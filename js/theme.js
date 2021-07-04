var css = document.getElementById("theme");

var favicon = document.getElementById("favicon");

var test = 1

function light(){
	if (test === 1){
		css.href = "css/theme/light.css";
		favicon.href = "images/favicon/favicon-white.png";
		test = 0
	}
	else
	{
		css.href = "css/theme/dark.css";
		favicon.href = "images/favicon/favicon-black.png";
		test = 1
	}
}
