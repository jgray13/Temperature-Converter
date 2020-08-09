function convertC() {
    var x;
        x = document.getElementById("cel").value * 9 / 5 + 32;
        document.getElementById("fahResult").value = (x);
}


function convertF() {
    var x;
        x = (document.getElementById("fah").value -32) * 5 / 9;
        document.getElementById("celResult").value = (x);
}