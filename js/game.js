const game = {
  /**
   * Génère un nombre aléatoire entre 1 et 3 pour simuler le choix de l'ordinateur
   */
  getRandomChoice : (min = 1, max = 3) => {
      const randomBase = Math.random(); // Chiffre flottant entre 0 et 1
      const randomNumber = randomBase * (max - min) + min; // Chiffre flottant entre min et max
      const roundedRandomNumber = Math.round(randomNumber); // Chiffre entier entre min et max
      
      return roundedRandomNumber;
  },

  scores: {
    player: 0,
    computer: 0,
    end: 3,
  },

  /**
   * Vide le board du joueur
   */
  clearPlayerBoard: () => {
    document.querySelector('#playerBoard').innerHTML = '';
  },

  /**
   * Vide le board de l'ordinateur
   */
  clearComputerBoard: () => {
    document.querySelector('#computerBoard').innerHTML = '';
  },

  /**
   * Fonction qui, au clic du joueur sur son choix, vide les 2 boards, et génère le choix du joueur et de l'ordinateur dans les boards respectives
   */
  launcher: (event) => {
    // On vide les 2 boards
    game.clearPlayerBoard();
    game.clearComputerBoard();

    // On empêche la soumission du formulaire
    event.preventDefault();

    // On récupère le bouton cliqué
    const buttonClicked = event.target;

    // On récupère le dataset du bouton correspondant à son choix (1 = papier, 2 = caillou, 3 = ciseaux)
    // Et on l'applique à la board, pour comparer plus tard avec le choix de l'ordinateur
    const playerChoice = parseInt(buttonClicked.dataset.ppc);
    document.querySelector('#playerBoard').setAttribute('data-pcc', playerChoice);

    // On crée une div pour acceuillir l'image correspondant à son choix, géré via un sprite css
    // Puis on l'ajoute à la board
    const playerPpcImage = document.createElement('div');
    playerPpcImage.classList.add('pcc');
    document.querySelector('#playerBoard').appendChild(playerPpcImage);
    playerPpcImage.style.backgroundPosition = -(playerChoice*100 - 100) + 'px';

    // L'ordinater joue, seulement après que le joueur ait fait son choix
    game.computerPlay();

    // On récupère les dataset des boards pour comparaison
    let playerChoiceData = parseInt(document.querySelector('#playerBoard').getAttribute('data-pcc'));
    let computerChoiceData = parseInt(document.querySelector('#computerBoard').getAttribute('data-pcc'));

    // On effectue la comparaison, on incrémente les scores et on les affiche les scores sous les boards
    if (playerChoiceData === 1 && computerChoiceData === 2) {
      game.scores.player++
      document.querySelector('#playerScore').textContent = `Votre score : ${game.scores.player}` ;
      document.querySelector('#computerScore').textContent = `Son score : ${game.scores.computer}` ;
    } else if (playerChoiceData === 1 && computerChoiceData === 3) {
      game.scores.computer++
      document.querySelector('#playerScore').textContent = `Votre score : ${game.scores.player}` ;
      document.querySelector('#computerScore').textContent = `Son score : ${game.scores.computer}` ;
    } else if (playerChoiceData === 2 && computerChoiceData === 3) {
      game.scores.player++
      document.querySelector('#playerScore').textContent = `Votre score : ${game.scores.player}` ;
      document.querySelector('#computerScore').textContent = `Son score : ${game.scores.computer}` ;
    } else if (playerChoiceData === 2 && computerChoiceData === 1) {
      game.scores.computer++
      document.querySelector('#playerScore').textContent = `Votre score : ${game.scores.player}` ;
      document.querySelector('#computerScore').textContent = `Son score : ${game.scores.computer}` ;
    } else if (playerChoiceData === 3 && computerChoiceData === 1) {
      game.scores.player++
      document.querySelector('#playerScore').textContent = `Votre score : ${game.scores.player}` ;
      document.querySelector('#computerScore').textContent = `Son score : ${game.scores.computer}` ;
    } else if (playerChoiceData === 3 && computerChoiceData === 2) {
      game.scores.computer++
      document.querySelector('#playerScore').textContent = `Votre score : ${game.scores.player}` ;
      document.querySelector('#computerScore').textContent = `Son score : ${game.scores.computer}` ;
    } else if (playerChoiceData === computerChoiceData) {
      document.querySelector('#playerScore').textContent = `Votre score : ${game.scores.player}` ;
      document.querySelector('#computerScore').textContent = `Son score : ${game.scores.computer}` ;
    }

    // Fin du jeu lorsque l'un des deux joueurs arrive à trois points
    if (game.scores.player === game.scores.end) {
      document.querySelector('#resultMessage').textContent = "Vous avez gagné !";
    } else if (game.scores.computer === game.scores.end) {
      document.querySelector('#resultMessage').textContent = "Vous avez perdu !";
    }
  },

  /**
   * Fonction écouteur d'événement au clic du joueur sur l'un des 3 boutons "papier", "caillou", "ciseaux"
   */
  playerPlay: () => {
    // On ajoute un écouteur d'événement aux boutons du form
    document.querySelectorAll('#playerChoices').forEach(item => {
    item.addEventListener('click', game.launcher)});
  },

  /**
   * Fonction qui affiche l'image du choix de l'ordinateur, elle est appelé dans la fonction playerPlay, seulement une fois le choix du joueur effectué
   */
  computerPlay: () => {
    // On crée une div pour insérer le choix de l'ordinateur dedans
    const computerPccImage = document.createElement('div');
    // On lui ajoute la class 
    computerPccImage.classList.add('pcc');
    // On l'ajoute au board de l'ordinateur
    document.querySelector('#computerBoard').appendChild(computerPccImage);
    // On tire un nombre au hasard entre 1 et 3
    const computerChoice = game.getRandomChoice(1, 3);
    // On rajoute un dataset pour comparer entre joueur et ordinateur
    document.querySelector('#computerBoard').setAttribute('data-pcc', computerChoice);
    // On sprite l'image pour afficher le choix de l'ordinateur
    computerPccImage.style.backgroundPosition = -(computerChoice*100 - 100) + 'px';
  },

  init: () => {
    game.playerPlay();
  }
}

// Le listener pour lancer l'init d'app quand le dom aura fini de charger
document.addEventListener('DOMContentLoaded', game.init);