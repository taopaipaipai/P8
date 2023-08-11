const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const ArrowGauche = document.querySelector(".arrow_left"); // suite cours de from Scrtach il fallait mettre le . pour que la class soit reconnue !! 10/08/2023 17:50:50
const ArrowDroit  = document.querySelector(".arrow_right"); // suite cours de from Scrtach il fallait mettre le . pour que la class soit reconnue !! 10/08/2023 17:50:50


// maj et correction le 10/08/2023 18:18:45
ArrowGauche.addEventListener("click", ()=> {
	console.log ("vous avez cliqué sur le Arrow de Gauche");
	});

ArrowDroit.addEventListener('click', ()=> {
	console.log ("vous avez cliqué sur le Arrow de Droit");
	});

