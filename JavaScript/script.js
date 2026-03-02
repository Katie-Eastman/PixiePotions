window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler() {
	const themeButton = document.getElementById("themeToggleButton");
	themeButton.addEventListener("click", toggleTheme);
	
	const savedTheme = localStorage.getItem("theme");
	if (savedTheme == "light") {
		document.body.classList.add("lighttheme");
	}
}

function toggleTheme() {
	document.body.classList.toggle("lighttheme");
	
	if (document.body.classList.contains("lighttheme")) {
		localStorage.setItem("theme", "light");
	}
	else {
		localStorage.setItem("theme", "dark");
	}
}

function confirmSubmit(){
	alert("Thank you for contacting us! A member of our team will get back to you as soon as possible.");
}
