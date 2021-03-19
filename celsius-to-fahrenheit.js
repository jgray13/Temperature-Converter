var cEl = document.getElementById("cel");
var fEl = document.getElementById("fahResult");

function convertC() {
    var celsius = cEl.value * 9 / 5 + 32;
//    fEl.value = celsius.toFixed(4);
    fEl.value = celsius;
	console.log(cEl.value);
	console.log(fEl.value);
}
function convertF() {
	var fahrenheit = (fEl.value - 32) * 5 / 9;
//	cEl.value = fahrenheit.toFixed(4);
    cEl.value = fahrenheit;
	console.log(fEl.value);
	console.log(cEl.value);
}