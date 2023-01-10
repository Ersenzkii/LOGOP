//logocookier.js
//

export const shapeCook = () => {
	window.addEventListener("load", function() {
		document.cookie = "shape=;"
	})
	let square = document.getElementById("square")
	let circle = document.getElementById("circle")
	let triangle = document.getElementById("triangle")
	let hexagone = document.getElementById("hexagone")
	let test = document.getElementById("test")

	square.addEventListener("click", function() {
		document.cookie = "shape=Carré;"
		console.log(document.cookie)
		test.textContent = getCookie("shape")
	})

	circle.addEventListener("click", function() {
		document.cookie = "shape=Cercle;"
		console.log(document.cookie)
		test.textContent = getCookie("shape")
	})

	triangle.addEventListener("click", function() {
		document.cookie = "shape=Triangle;"
		console.log(document.cookie)
		test.textContent = getCookie("shape")
	})

	hexagone.addEventListener("click", function() {
		document.cookie = "shape=Hexagone;"
		console.log(document.cookie)
		test.textContent = getCookie("shape")
	})
}

export const colorCook = () => {
	window.addEventListener("load", function() {
		document.cookie = "color=;"
	})
	let blue = document.getElementById("blue")
	let green = document.getElementById("green")
	let orange = document.getElementById("orange")
	let red = document.getElementById("red")
	let test = document.getElementById("test")

	blue.addEventListener("click", function() {
		document.cookie = "color=Bleu;"
		console.log(document.cookie)
		test.textContent = getCookie("color")
	})

	green.addEventListener("click", function() {
		document.cookie = "color=Vert;"
		console.log(document.cookie)
		test.textContent = getCookie("color")
	})

	orange.addEventListener("click", function() {
		document.cookie = "color=Orange;"
		console.log(document.cookie)
		test.textContent = getCookie("color")
	})

	red.addEventListener("click", function() {
		document.cookie = "color=Rouge;"
		console.log(document.cookie)
		test.textContent = getCookie("color")
	})
}

export const otherCook = () => {
	window.addEventListener("load", function() {
		document.cookie = "other=;"
	})
	let TA = document.getElementById("final")

	TA.addEventListener("click", function() {
		let input = document.getElementById("theTA").value
		document.cookie = "other=" + input
		console.log(document.cookie)
	})
}

export const formulaCook = () => {
	window.addEventListener("load", function() {
		document.cookie = "formula=;"
	})
	let New = document.getElementById("new")
	let premium = document.getElementById("premium")
	let gold = document.getElementById("gold")
	let test = document.getElementById("test")

	New.addEventListener("click", function() {
		document.cookie = "formula=Débutant;"
		console.log(document.cookie)
		test.textContent = getCookie("formula")
	})

	premium.addEventListener("click", function() {
		document.cookie = "formula=Premium;"
		console.log(document.cookie)
		test.textContent = getCookie("formula")
	})

	gold.addEventListener("click", function() {
		document.cookie = "formula=Expert Gold;"
		console.log(document.cookie)
		test.textContent = getCookie("formula")
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