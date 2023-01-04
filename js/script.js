//script.js
//
export const backToMenu = () => {
	let homeButton = document.getElementById("home");
	homeButton.addEventListener("click", function()  {
		window.location.href = "/index.html";
	});
}

export const goToLogo = () => {
	let homeButton = document.getElementById("logo");
	homeButton.addEventListener("click", function()  {
		window.location.href = "/logo.html";
	});
}

export const goToFormules = () => {
	let homeButton = document.getElementById("formules");
	homeButton.addEventListener("click", function()  {
		window.location.href = "/formules.html";
	});
}

export const goToAvis = () => {
	let homeButton = document.getElementById("avis");
	homeButton.addEventListener("click", function()  {
		window.location.href = "/avis.html";
	});
}

export const goToLogIn = () => {
	let loginButton = document.getElementById("connexion");
	loginButton.addEventListener("click", function() {
		window.location.href = "/connexion.html";
	})
}