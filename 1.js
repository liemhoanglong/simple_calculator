function calc()
{
	var x = parseFloat(document.getElementById("no1").value)
	var y = parseFloat(document.getElementById("no2").value)
	if (document.getElementById("cong").checked) {
		document.getElementById('result').value = x+y;
	}	
	if (document.getElementById("tru").checked) {
		document.getElementById('result').value = x-y;
	}	
	if (document.getElementById("nhan").checked) {
		document.getElementById('result').value = x*y;
	}	
	if (document.getElementById("chia").checked) {
		document.getElementById('result').value = x/y;
	}
}

$(document).ready(function(){  
    $('#validate_form').parsley();
});