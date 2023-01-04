//logo-generator.js
//

export const goToCreator = () => {
    let arrow = document.getElementById("arrow-case")
    arrow.addEventListener("click", function() {
        cookier()

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

const cookier = () => {
    let button = document.getElementById("arrow-case")
    let nameInput = document.getElementById("entreprise");
    let entreprise = nameInput.value
    if (entreprise.length < 1) {
        alert("Veuillez remplir tous les champs!")
    } else {
        let username = getCookie("user")
        if (username.length > 1) {
            document.cookie = "entrepriseName=" + entreprise
            console.log(document.cookie)
            window.location.href = "/first-step.html"
        } else {
        	document.cookie = 'entrepriseName=' + entreprise;
        	console.log(document.cookie)
        	window.location.href = "/connexion.html"
        }
    }

}