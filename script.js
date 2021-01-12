const holes = $('.hole'); // utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "hole";
const scoreBoard = $('.score'); //utiliser la méthode jquery appropriée pour selectionner l'élément ayant pour classe "score";
const moles = $('.mole'); // utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "mole";

document.getElementById('startGame').addEventListener('click', startGame);

let randomTrou = Math.floor(Math.random() * Math.floor(holes.length));
let randomTrouName = "hole" + randomTrou;
console.log(randomTrouName);

// Start:
function startGame(){
    console.log('start');

}

// Test moles:
$(randomTrouName).addClass('.up');

