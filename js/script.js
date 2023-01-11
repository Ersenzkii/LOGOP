//script.js
//
export const backToMenu = () => {
    let homeButton = document.getElementById("home");
    homeButton.addEventListener("click", function() {
        window.location.href = "/index.html";
    });
}

export const backToMenuDEUX = () => {
    let homeButton = document.getElementById("DEUXhome");
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
    button.addEventListener("click", function() {
        window.location.href = "/second-step.html"
    })
}

export const goToThird = () => {
    let button = document.getElementById("toThird");
    button.addEventListener("click", function() {
        window.location.href = "/third-step.html"
    })
}

export const toFinal = () => {
    let button = document.getElementById("final");
    button.addEventListener("click", function() {
        window.location.href = "/final.html"
    })
}

export const toFourth = () => {
    let button = document.getElementById("toFourth");
    button.addEventListener("click", function() {
        window.location.href = "/fourth-step.html"
    })
}
export const toPayment = () => {
    let button = document.getElementById("toPayment");
    button.addEventListener("click", function() {
        window.location.href = "/pay-step.html"
    })
}

function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
        let [key, value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}