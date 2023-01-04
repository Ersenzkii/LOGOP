//script.js
//
export const backToMenu = () => {
    let homeButton = document.getElementById("home");
    homeButton.addEventListener("click", function() {
        window.location.href = "/index.html";
    });
}

export const goToLogo = () => {
    let homeButton = document.getElementById("logo");
    homeButton.addEventListener("click", function() {
        window.location.href = "/logo.html";
    });
}

export const goToFormules = () => {
    let homeButton = document.getElementById("formules");
    homeButton.addEventListener("click", function() {
        window.location.href = "/formules.html";
    });
}

export const goToAvis = () => {
    let homeButton = document.getElementById("avis");
    homeButton.addEventListener("click", function() {
        window.location.href = "/avis.html";
    });
}

export const goToLogIn = () => {
    let loginButton = document.getElementById("connexion");
    loginButton.addEventListener("click", function() {
        window.location.href = "/connexion.html";
    })
}

export const goToSecond = () => {
    let button = document.getElementById("toSecond");
    const cookie = getCookie("shape").length
    button.addEventListener("click", function() {
        if (cookie > 1) {
            window.location.href = "/second-step.html"
        } else {
        	document.getElementById("test").textContent = cookie
        }
    })
}

export const goToThird = () => {
    let button = document.getElementById("toThird");
    const cookies = getCookie("color").length
    console.log(cookies)
    button.addEventListener("click", function() {
        if (cookies > 1) {
            window.location.href = "/third-step.html"
        } else {
        	console.log(document.cookie)
        	document.getElementById("test").textContent = cookies
        }
    })
}

function getCookie(cookieName) {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let [key,value] = el.split('=');
    cookie[key.trim()] = value;
  })
  return cookie[cookieName];
}