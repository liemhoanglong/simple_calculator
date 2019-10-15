var checkNo1 = document.getElementById("no1");
var checkNo2 = document.getElementById("no2");
checkNo1.onblur = IsANumber;
checkNo2.onblur = IsANumber;
function IsANumber() {
	if (isNaN(this.value)) {
		document.getElementById("warning").innerHTML = "Dữ liệu không phải là số thực";
		return 0;
	}
	document.getElementById("warning").innerHTML = "";
	return 1;
}
function calc()
{
	if (isNaN(checkNo1.value) || isNaN(checkNo2.value) || (checkNo1.value === "") || (checkNo2.value === "")){
		warning.innerHTML = "bạn chưa nhập đủ 2 số hợp lệ";
		return 0;
	}
	else {
		document.getElementById("warning").innerHTML = "";
	}
	var x = parseFloat(checkNo1.value);
	var y = parseFloat(checkNo2.value);
	var flag = 0;
	if (document.getElementById("cong").checked) {
		document.getElementById('result').value = x+y;
		flag = 1;
	}	
	if (document.getElementById("tru").checked) {
		document.getElementById('result').value = x-y;
		flag = 1;
	}	
	if (document.getElementById("nhan").checked) {
		document.getElementById('result').value = x*y;
		flag = 1;
	}	
	if (document.getElementById("chia").checked) {
		document.getElementById('result').value = x/y;
		flag = 1;
	}
	if (flag === 0) {
		warning.innerHTML = "Bạn chưa chọn phép tính";
		return 0;
	}

}