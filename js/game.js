var yes = 0;
var no = 100;

document.getElementById("1").onclick = function(){
	if (yes === 0){
		document.getElementById("text").innerHTML = "Вы открываете файл, на экране появляется окно приложения<br/> На немного светло-черном фоне написано [Данные искаженны]<br/> Ниже текст две кнопки<br/> Первая - пустая, нет никаких надписей<br/> Вторая - Подробней";
		document.getElementById("question").innerHTML = "На какую кнопку нажмете ?";
		document.getElementById("1").innerHTML = "Первая";
		document.getElementById("0").innerHTML = "Вторая";
		yes = 1;
		no = 0
	}else if (yes === 1){
		document.getElementById("text").innerHTML = "Окно закрылось";
		document.getElementById("question").innerHTML = "";
		document.getElementById("1").innerHTML = "С начала";
		document.getElementById("0").style.display = "none"
		document.getElementById("1").style.width = "110px"
		yes = 100;
	}else if (yes === 2){
		document.getElementById("text").innerHTML = "Вы закрыли окно";
		document.getElementById("question").innerHTML = "";
		document.getElementById("1").innerHTML = "С начала";
		document.getElementById("0").style.display = "none"
		document.getElementById("1").style.width = "110px"
		yes = 100;
	}else{
		document.getElementById("text").innerHTML = "Вы сидите за компьютером, и замечаете неизвестный файл";
		document.getElementById("question").innerHTML = "Откроете ?";
		document.getElementById("1").innerHTML = "Да";
		document.getElementById("0").innerHTML = "Нет";
		document.getElementById("0").style.display = ""
		document.getElementById("1").style.width = ""
		yes = 0
	}
}

document.getElementById("0").onclick = function(){
	if (no === 0){
		document.getElementById("text").innerHTML = "Экран на секунду отключается, вам показывается список ошибок, но вы их не понимаете";
		document.getElementById("question").innerHTML = "Закрыть окно, или попытаться разобраться?";
		document.getElementById("1").innerHTML = "Закрыть";
		document.getElementById("0").innerHTML = "Разобраться";
		yes = 2
		no = 1
	}else if (no == 1){
		document.getElementById("text").innerHTML = "Вы пытаетесь разобраться в чем ошибка, но вам не хватает знаний, было принято решение оставить это на завтра";
		document.getElementById("question").innerHTML = "";
		document.getElementById("1").innerHTML = "С начала";
		document.getElementById("0").style.display = "none"
		document.getElementById("1").style.width = "110px"
		yes = 100;
	}else{
		document.getElementById("text").innerHTML = "Вы просто удалили файл";
		document.getElementById("question").innerHTML = "";
		document.getElementById("1").innerHTML = "С начала";
		document.getElementById("0").style.display = "none"
		document.getElementById("1").style.width = "110px"
		yes = 100
	}
}