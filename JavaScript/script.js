window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler() {
    const themeButton = document.getElementById("themeToggleButton");
    themeButton.addEventListener("click", toggleTheme);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme == "light") {
        document.body.classList.add("lightTheme");
    }

    applyNavbarTheme();

    setUpParticleEffect()
}

function toggleTheme() {
    document.body.classList.toggle("lightTheme");

    if (document.body.classList.contains("lightTheme")) {
        localStorage.setItem("theme", "light");
    }
    else {
        localStorage.setItem("theme", "dark");
    }

    applyNavbarTheme();
}

function applyNavbarTheme() {
    const navbar = document.querySelector(".navbar");

    if (document.body.classList.contains("lightTheme")) {
        navbar.classList.remove("navbar-dark", "bg-dark");
        navbar.classList.add("navbar-light", "bg-light");
    } else {
        navbar.classList.remove("navbar-light", "bg-light");
        navbar.classList.add("navbar-dark", "bg-dark");
    }
}

function confirmSubmit(){
    alert("Thank you for contacting us! A member of our team will get back to you as soon as possible.");
}

function setUpParticleEffect() {
    let lastTimestamp = 0;

    document.addEventListener("mousemove", (event) => {
		const now = performance.now();
		if (now - lastTimestamp < 25) {
			return;
		}
		lastTimestamp = now;

		const particle = document.createElement("div");
		particle.className = "cursor-particle";
		const size = 6 + Math.random() * 8;
		particle.style.width = `${size}px`;
		particle.style.height = `${size}px`;
		particle.style.left = `${event.clientX}px`;
		particle.style.top = `${event.clientY}px`;
		particle.style.opacity = "0";
		document.body.appendChild(particle);

		requestAnimationFrame(() => {
			particle.style.opacity = "1";
			particle.style.transform = `translate(-50%, -50%) scale(${1.4 + Math.random() * 0.7})`;
		});

		setTimeout(() => {
			particle.style.opacity = "0";
			particle.style.transform = `translate(-50%, -50%) scale(${2 + Math.random() * 0.8})`;
		}, 180);

		setTimeout(() => {
			particle.remove();
		}, 1500);
	});
}
