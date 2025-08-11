param(
    [string]$RepoName = (Split-Path -Leaf (Resolve-Path .)),
    [switch]$Public,
    [string]$Description = "",
    [string]$RemoteName = "origin"
)

function Write-Info($msg) { Write-Host "[INFO] $msg" -ForegroundColor Cyan }
function Write-Warn($msg) { Write-Host "[WARN] $msg" -ForegroundColor Yellow }
function Write-Err($msg) { Write-Host "[ERROR] $msg" -ForegroundColor Red }

# Ensure we are at project root (script can be run from anywhere)
Set-Location -Path (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location ..

Write-Info "Working directory: $(Resolve-Path .)"

# Check git
try {
    $gitVersion = git --version 2>$null
    if (-not $gitVersion) { throw "git not found" }
    Write-Info "Git found: $gitVersion"
} catch {
    Write-Err "Git is not installed or not available in PATH. Please install from https://git-scm.com/download/win and re-run."
    exit 1
}

# Check GitHub CLI (optional)
$hasGh = $false
try {
    $ghVersion = gh --version 2>$null | Select-Object -First 1
    if ($ghVersion) { $hasGh = $true; Write-Info "GitHub CLI found: $ghVersion" }
} catch { $hasGh = $false }

# Initialize repo if needed
$gitDir = Join-Path (Resolve-Path .) ".git"
if (-not (Test-Path $gitDir)) {
    Write-Info "Initializing new Git repository..."
    git init | Out-Null
    # Set default branch to main
    git checkout -b main 2>$null | Out-Null

    # Respect .gitignore; add all and commit
    Write-Info "Staging files..."
    git add .
    if ($LASTEXITCODE -ne 0) { Write-Err "Failed to stage files."; exit 1 }

    Write-Info "Creating initial commit..."
    git commit -m "Initial commit" 2>$null | Out-Null
    if ($LASTEXITCODE -ne 0) { Write-Warn "Commit may have failed or nothing to commit (empty repo)." }
} else {
    Write-Info ".git directory exists — repository already initialized."
    # Ensure we are on main branch if possible
    $currentBranch = (git rev-parse --abbrev-ref HEAD).Trim()
    if ($currentBranch -ne "main") {
        Write-Warn "Current branch is '$currentBranch'. You can rename with: git branch -M main"
    }
}

# Determine if remote exists
$remoteUrl = (git remote get-url $RemoteName 2>$null)
if ($remoteUrl) {
    Write-Info "Remote '$RemoteName' is already set to: $remoteUrl"
} else {
    if ($hasGh) {
        Write-Info "Creating GitHub repository '$RepoName' via GitHub CLI..."
        $visibilityFlag = if ($Public) { "--public" } else { "--private" }
        $descFlag = if ([string]::IsNullOrWhiteSpace($Description)) { "" } else { "--description \"$Description\"" }
        # Use --source . to push code and set remote in one step
        $cmd = "gh repo create \"$RepoName\" --source . $visibilityFlag $descFlag --push"
        Write-Info "Running: $cmd"
        Invoke-Expression $cmd
        if ($LASTEXITCODE -ne 0) {
            Write-Err "Failed to create/push via gh. You can retry or set the remote manually (instructions below)."
        } else {
            # Ensure upstream tracking
            git branch --set-upstream-to=$RemoteName/main main 2>$null | Out-Null
            Write-Info "GitHub repository created and code pushed successfully."
            exit 0
        }
    }

    # Fallback/manual path
    Write-Warn "GitHub CLI not available or failed. Proceeding with manual remote setup instructions."
    Write-Host ""
    Write-Host "NEXT STEPS (manual):" -ForegroundColor Green
    Write-Host "1) Create a new repository on GitHub named '$RepoName' (https://github.com/new)." -ForegroundColor Green
    Write-Host "2) Copy its remote URL (e.g., https://github.com/<your-user>/$RepoName.git)." -ForegroundColor Green
    Write-Host "3) Run the following commands:" -ForegroundColor Green
    Write-Host "   git remote add $RemoteName https://github.com/<your-user>/$RepoName.git" -ForegroundColor Gray
    Write-Host "   git push -u $RemoteName main" -ForegroundColor Gray
    Write-Host "" 
}

# If remote exists, push current branch
if ((git remote get-url $RemoteName 2>$null)) {
    $branch = (git rev-parse --abbrev-ref HEAD).Trim()
    if ([string]::IsNullOrWhiteSpace($branch)) { $branch = "main" }
    Write-Info "Pushing branch '$branch' to '$RemoteName'..."
    git push -u $RemoteName $branch
    if ($LASTEXITCODE -eq 0) {
        Write-Info "Push completed successfully."
    } else {
        Write-Err "Push failed. Please verify remote permissions and try again."
    }
}