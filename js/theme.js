let theme = document.querySelector('.theme');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
	theme.classList.toggle('light-theme');
	theme.classList.toggle('dark-theme');
};
