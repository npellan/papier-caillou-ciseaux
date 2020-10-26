console.log('Fichier jeu charged');

// On demande à l'utilisateur de choisir entre Papier, caillou, ciseaux


// On fait jouer l'ordinateur de manière aléatoire
function getRandomChoice() {
    var randomNumber = Math.floor(Math.random() * Math.floor(3));
    
    if (randomNumber === 1) {
      return 'papier'
      console.log('Choix de l\'ordinauter est papier');
    } else if (randomNumber === 2) {
      return 'caillou'
      console.log('Choix de l\'ordinauter est caillou');
    } else {
      return 'ciseaux'
      console.log('Choix de l\'ordinauter est ciseaux');
    }
  }

function play() {
  var playerChoice = prompt('Papier, caillou, ciseaux ?');
  console.log('Le joueur a choisi', playerChoice);

  var computerChoice = getRandomChoice();
  console.log('L\'ordinateur a choisi', computerChoice);

  if (playerChoice === 'papier' && computerChoice === 'caillou') {
    playerScore++;
    console.log('L\'ordinateur a ' + computerScore + ' points !');
    console.log('Vous avez ' + playerScore + ' points !');
  } else if (playerChoice === 'papier' && computerChoice === 'ciseaux') {
    computerScore++;
    console.log('L\'ordinateur a ' + computerScore + ' points !');
    console.log('Vous avez ' + playerScore + ' points !');
  } else if (playerChoice === 'caillou' && computerChoice === 'ciseaux') {
    playerScore++;
    console.log('L\'ordinateur a ' + computerScore + ' points !');
    console.log('Vous avez ' + playerScore + ' points !');
  } else if (playerChoice === 'caillou' && computerChoice === 'papier') {
    computerScore++;
    console.log('L\'ordinateur a ' + computerScore + ' points !');
    console.log('Vous avez ' + playerScore + ' points !');
  } else if (playerChoice === 'ciseaux' && computerChoice === 'papier') {
    playerScore++;
    console.log('L\'ordinateur a ' + computerScore + ' points !');
    console.log('Vous avez ' + playerScore + ' points !');
  } else if (playerChoice === 'ciseaux' && computerChoice === 'caillou') {
    computerScore++;
    console.log('L\'ordinateur a ' + computerScore + ' points !');
    console.log('Vous avez ' + playerScore + ' points !');
  } else if (playerChoice === computerChoice) {
    console.log('Egalité !');
  }
}

var nbPoints = prompt('En combien de points voulez-vous jouer ?');
console.log('Partie en ' + nbPoints + ' points.');

var playerScore = 0;
var computerScore = 0;

do {
  play();
} while (playerScore < nbPoints && computerScore < nbPoints);

if (playerScore > computerScore) {
  console.log('Vous avez gagné avec ' + playerScore + ' points contre ' + computerScore + ' points !');
} else {
  console.log('Vous avez perdu avec ' + playerScore + ' points contre ' + computerScore + ' points !');
}