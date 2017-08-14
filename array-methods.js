var planets = [" mercury", " venus", " earth", " mars", " jupiter", " saturn", " uranus", " neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
var el2 = document.getElementById("planets2");
let planetDom = "";
let planetDom2 = "";

planets.forEach(function(element) {
    planetDom = `<h3>${planets}</h3>`
    console.log(element);
    el.innerHTML = planetDom;
});

// Use the map method to create a new array where the first letter of each planet is capitalized

planets.forEach(function(item) {
	let plans = item;
	let capFirst = plans.charAt(1).toUpperCase() + plans.slice(2);
	
	el2.innerHTML += capFirst + " ";
})

// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

// var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];