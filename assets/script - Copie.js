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

// 30/07/2023 06:30:33 evenement si clique affiche le message "Salut"
//element.addEventListener("click", cliqueGauche);
//element.addEventListener("click", cliqueDroit);

// let ArrowGauche = document.getElementById("arrow_left");
//console.log(ArrowGauche);
let ArrowGauche = document.querySelector(".arrow_left");


// let ArrowDroit = document.getElementById("arrow_right");
//console.log(ArrowDroit);
let ArrowDroit = document.querySelector(".arrow_right"); // suite cours de from Scrtach il fallait mettre le . pour que la class soit reconnue !! 10/08/2023 17:50:50

// maj et correction le 04/08/2023 11:51:06
ArrowGauche.addEventListener("click", cliqueGauche());
ArrowDroit.addEventListener("click", cliqueDroit());


function cliqueGauche() {
	// avec la metode alerte
  //alert ("vous avez cliqué sur le Arrow de Gauche");
  
  // avec la metode console.log
  console.log ("vous avez cliqué sur le Arrow de Gauche");
}

function cliqueDroit() {
	// avec la metode alerte
  //alert ("vous avez cliqué sur le Arrow de Droit");

  // avec la metode console.log
  console.log ("vous avez cliqué sur le Arrow de Droit");
}


// plus complexe : surevillance de la souris et dit sur quelle bouton on a clické !!

let button = document.querySelector("arrow_right");
button.addEventListener("mouseup", (e) => {
  let log = document.querySelector("#log");
  switch (e.button) {
    case 0:
      log.textContent = "Left button clicked.";
      break;
    case 1:
      log.textContent = "Middle button clicked.";
      break;
    case 2:
      log.textContent = "Right button clicked.";
      break;
    default:
      log.textContent = `Unknown button code: ${e.button}`;
  }
});