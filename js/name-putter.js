//name-putter.js
//

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

function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
        let [key, value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}