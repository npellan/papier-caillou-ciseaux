console.log('Fichier jeu charged');

function getRandomChoice(min = 1, max = 3) {
    const randomBase = Math.random(); // Chiffre flottant entre 0 et 1
    const randomNumber = randomBase * (max - min) + min; // Chiffre flottant entre min et max
    const roundedRandomNumber = Math.round(randomNumber); // Chiffre entier entre min et max
    
    return roundedRandomNumber;
}


function refreshPlayerBoard() {
  document.querySelector('#playerBoard').innerHTML = '';
}


function refreshComputerBoard() {
  document.querySelector('#computerBoard').innerHTML = '';
}


function playerPpcImage(event) {
  refreshPlayerBoard();
  refreshComputerBoard();

  event.preventDefault();

  const form = event.target;

  const playerChoice = parseInt(form.dataset.ppc);

  const playerPpcImage = document.createElement('div');
  playerPpcImage.classList.add('pcc');

  document.querySelector('#playerBoard').setAttribute('data-pcc', playerChoice);

  document.querySelector('#playerBoard').appendChild(playerPpcImage);

  playerPpcImage.style.backgroundPosition = -(playerChoice*100 - 100) + 'px';

  computerPlay();

  let playerChoiceData = parseInt(document.querySelector('#playerBoard').getAttribute('data-pcc'));
  let computerChoiceData = parseInt(document.querySelector('#computerBoard').getAttribute('data-pcc'));

  let playerScore = 0;
  let computerScore = 0;

  if (playerChoiceData === 1 && computerChoiceData === 2) {
    playerScore++
    document.querySelector('#playerScore').textContent = `Votre score : ${playerScore}` ;
    document.querySelector('#computerScore').textContent = `Son score : ${computerScore}` ;
  } else if (playerChoiceData === 1 && computerChoiceData === 3) {
    computerScore++
    document.querySelector('#playerScore').textContent = `Votre score : ${playerScore}` ;
    document.querySelector('#computerScore').textContent = `Son score : ${computerScore}` ;
  } else if (playerChoiceData === 2 && computerChoiceData === 3) {
    playerScore++
    document.querySelector('#playerScore').textContent = `Votre score : ${playerScore}` ;
    document.querySelector('#computerScore').textContent = `Son score : ${computerScore}` ;
  } else if (playerChoiceData === 2 && computerChoiceData === 1) {
    computerScore++
    document.querySelector('#playerScore').textContent = `Votre score : ${playerScore}` ;
    document.querySelector('#computerScore').textContent = `Son score : ${computerScore}` ;
  } else if (playerChoiceData === 3 && computerChoiceData === 1) {
    playerScore++
    document.querySelector('#playerScore').textContent = `Votre score : ${playerScore}` ;
    document.querySelector('#computerScore').textContent = `Son score : ${computerScore}` ;
  } else if (playerChoiceData === 3 && computerChoiceData === 2) {
    computerScore++
    document.querySelector('#playerScore').textContent = `Votre score : ${playerScore}` ;
    document.querySelector('#computerScore').textContent = `Son score : ${computerScore}` ;
  } else if (playerChoiceData === computerChoiceData) {
    document.querySelector('#playerScore').textContent = `Votre score : ${playerScore}` ;
    document.querySelector('#computerScore').textContent = `Son score : ${computerScore}` ;
  }  
}


function playerPlay() {
  // On ajoute un écouteur d'événement aux boutons du form
  document.querySelectorAll('#playerChoices').forEach(item => {
  item.addEventListener('click', playerPpcImage)});
}


function computerPlay() {
  // On crée une div pour insérer le choix de l'ordinateur dedans
  const computerPpcImage = document.createElement('div');
  // On lui ajoute la class 
  computerPpcImage.classList.add('pcc');
  // On l'ajoute au board de l'ordinateur
  document.querySelector('#computerBoard').appendChild(computerPpcImage);
  // On tire un nombre au hasard entre 1 et 3
  const computerChoice = getRandomChoice(1, 3);
  // On rajoute un dataset pour comparer entre joueur et ordinateur
  document.querySelector('#computerBoard').setAttribute('data-pcc', computerChoice);
  // On sprite l'image pour afficher le choix de l'ordinateur
  computerPpcImage.style.backgroundPosition = -(computerChoice*100 - 100) + 'px';
}


playerPlay();