//log.js
//

export const cookier = () => {
    let button = document.getElementById("subbut")
    let nameInput = document.getElementById("name");
    let passwordVal = document.getElementById("pass");
    button.addEventListener("click", function() {
        document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
        let username = nameInput.value
        let pass = passwordVal.value
        if (username.length < 1 || pass.length < 1) {
            alert("Veuillez remplir tous les champs!")
        } else {
            document.cookie = 'user=' + username
            console.log(document.cookie)
            window.location.href = "/index.html"
        }

    })

}

export const onLoadCookies = () => {
	window.addEventListener("load", function() {
		let userCookie = getCookie("user")
		console.log(userCookie)
		let loginButton = document.getElementById("connexion");
		let signupButton = document.getElementById("inscription");
		let name = document.getElementById("namebut");
		if (userCookie.length > 0) {
			loginButton.classList.toggle("not-visible")
			signupButton.classList.toggle("not-visible")
			name.classList.toggle("not-visible")
			name.innerHTML = "Welcome, " + userCookie

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

export const signOut = () => {
	let name = document.getElementById("namebut");
	name.addEventListener("click", function() {
		document.cookie = 'user=;'
		window.location.href = "/index.html";
	})
}