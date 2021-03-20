var cEl = document.getElementById("cel");
var fEl = document.getElementById("fah");
function convertC() {
    var celsius = cEl.value * 9 / 5 + 32;
	function isDecimal(num) {
		var result = (num - Math.floor(num)) !== 0;
		if (result)
			fEl.value = celsius.toFixed(1);
		else
			fEl.value = celsius;
	}
	isDecimal(celsius);
	console.log(cEl.value);
	console.log(fEl.value);
}
function convertF() {
	var fahrenheit = (fEl.value - 32) * 5 / 9;
	function isDecimal(num) {
		var result = (num - Math.floor(num)) !== 0;
		if (result)
			cEl.value = fahrenheit.toFixed(1);
		 else
			 cEl.value = fahrenheit;
	}
	isDecimal(fahrenheit);
	console.log(fEl.value);
	console.log(cEl.value);
}