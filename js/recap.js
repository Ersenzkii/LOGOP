//recap.js
//

export const recap = () => {
	let first = document.getElementById("first");
	let second = document.getElementById("second");
	let third = document.getElementById("third");
	let fourth = document.getElementById("fourth");

	first.textContent = "- " + getCookie("shape")
	second.textContent = "- " + getCookie("color")
	third.textContent = "- " + getCookie("formula")
	fourth.textContent = "- " + getCookie("other")
}

function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
        let [key, value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}