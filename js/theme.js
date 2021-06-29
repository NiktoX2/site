let theme = document.querySelector('.theme');
let themeButton = document.querySelector('.theme-button');

let list = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
let Button = document.querySelector('.theme-button');

let test = 1;

themeButton.onclick = function() {
	theme.classList.toggle('light-theme');
	theme.classList.toggle('dark-theme');
	
	if (test === 1){
		list.forEach(function(element) {element.setAttribute('href', 'images/iso/white.png');});
	    test = 0;
	}else{
		list.forEach(function(element) {element.setAttribute('href', 'images/iso/ico-site.png');});
	    test = 1;
	}
};