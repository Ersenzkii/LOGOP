//name-putter.js
//

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



export const shapeNamePutter = () => {
    window.addEventListener("load", function() {
    	console.log('c')
        let second = document.getElementById("name");
        let entreprise = getCookie("entrepriseName")
        second.textContent = entreprise + " / Sélection de la forme"
    })
}

export const colorNamePutter = () => {
    window.addEventListener("load", function() {
        console.log('c')
        let second = document.getElementById("name");
        let entreprise = getCookie("entrepriseName")
        second.textContent = entreprise + " / Sélection de la couleur"
    })
}

export const otherNamePutter = () => {
    window.addEventListener("load", function() {
        console.log('c')
        let second = document.getElementById("name");
        let entreprise = getCookie("entrepriseName")
        second.textContent = entreprise + " / Informations à ajouter"
    })
}

export const formuNamePutter = () => {
    window.addEventListener("load", function() {
        console.log('c')
        let second = document.getElementById("name");
        let entreprise = getCookie("entrepriseName")
        second.textContent = entreprise + " / Choix de la formule"
    })
}

export const payNamePutter = () => {
    window.addEventListener("load", function() {
        console.log('c')
        let second = document.getElementById("name");
        let entreprise = getCookie("entrepriseName")
        second.textContent = entreprise + " / Paiement (via PayPal)"
    })
}

export const wow = () => {
    window.addEventListener("load", function() {
        let random = getRandomInt(154362, 304953)
        console.log('c')
        let second = document.getElementById("wow");
        let entreprise = getCookie("entrepriseName")
        second.textContent = "Récapitulatif : " + entreprise + " / N°" + random;
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