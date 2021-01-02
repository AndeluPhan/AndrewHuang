const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/andeluphan/portfo/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}
function ageCalc() {
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365.25;
    var date1 = new Date(12 + "/" + 20 + "/" + 2001);
  
    var date2 = new Date();
    var timeDiff = (date2.getTime() - date1.getTime());
    var age = (timeDiff / years);
    age = parseFloat(Math.round(age * 100000000000) / 100000000000).toFixed(11);
  
    document.getElementById("age").innerHTML = age;
  
    setTimeout("ageCalc()", 1);
  
  }
ageCalc();

function convertDigitIn(str) {
return str.split('/').reverse().join('/');
}