var startGameButton = document.getElementById("startGame");
startGameButton.addEventListener("click", initGame);

var startZugButton = document.getElementById("startZug");
startZugButton.addEventListener("click", initZug);

var newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", initGame);

var showSummaryButton = document.getElementById("showSummary");
showSummaryButton.addEventListener("click", initSummary);

var waitingButton = document.getElementById("waiting");

var infoLine = document.getElementById("info_line");
var summaryList = document.getElementById("summary_list");
var gameProgressBar = document.getElementById("gameProgress");

var data_header = ["Verein", "Ewige Tabelle", "Mitglieder", "Gründungsjahr", "TV-Geld 18/19"];
var data_suffix = ["", ". Platz", "", "", " Mio."];
var data_comparison = ["", "kleiner", "größer", "kleiner", "größer"];
var bvb = ['Borussia Dortmund', 4, 153787, 1909, 61.9];
var spl = ['FC St. Pauli', 32, 26000, 1910, 11.5];
var sge = ['Eintracht Frankfurt', 9, 50000, 1899, 49.9];
var fcb = ['Bayern München', 1, 290000, 1900, 63.2];
var svw = ['Werder Bremen', 2, 36500, 1899, 52.9];
var hsv = ['Hamburger SV', 3, 81377, 1919, 20.7];
var vfb = ['VfB Stuttgart', 5, 64000, 1893, 38.5];
var bmg = ['Mönchengladbach', 6, 83351, 1900, 56.6];
var s04 = ['FC Schalke 04', 7, 153000, 1904, 60.6];

var vereine;
var playerCards;
var computerCards;
var playerPoints;
var computerPoints;
var playerCount;
var computerCount;
var currentPlayerCard;
var currentComputerCard;
var spielstatus;
// var numberOfTurns;

var zugGewonnenNachricht = "Karte gewinnt!";
var zugVerlorenNachricht = "Karte verliert!";
var zugUnentschiedenNachricht = "Keine Karte gewinnt.";
var spielGewonnenNachricht = "Der Spieler gewinnt mit ";
var spielVerlorenNachricht = "Der Computer gewinnt mit ";
var spielUnentschiedenNachricht = "Spiel endet unentschieden &ndash; ";
var zugWarteNachricht = "Kategorie wählen";
var spielVorbeiNachricht = "Spiel beendet";
var spielWarteNachricht = "Neues Spiel beginnen";


function shuffleCards() {
  vereine = [bvb, spl, sge, fcb, svw, hsv, vfb, bmg, s04];
  var currentIndex = vereine.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = vereine[currentIndex];
    vereine[currentIndex] = vereine[randomIndex];
    vereine[randomIndex] = temporaryValue;
  }

  var numberOfCards = vereine.length;
  numberOfCards -= numberOfCards % 2;
  // numberOfTurns = numberOfCards/2;
  playerCards = vereine.slice(0, numberOfCards / 2);
  computerCards = vereine.slice(numberOfCards/2, numberOfCards);
}


//Button-Status setzen
//1=Spiel starten
//2=Nächster Zug
//2.5=Zug läuft
//3=Neues Spiel
function updateButtons(status) {
  spielstatus = status;
  switch(status) {
  case 1:
    startGameButton.style.display = 'none';
    startZugButton.style.display = 'none';
    newGameButton.style.display = 'none';
    waitingButton.style.display = 'inline';
    showSummaryButton.style.display = 'none';
    document.getElementById("summary").style.display = 'none';
    document.getElementById("cards").style.display = 'grid';
    infoLine.innerHTML = "";
    break;
  case 2:
    startGameButton.style.display = 'none';
    startZugButton.style.display = 'inline';
    newGameButton.style.display = 'none';
    waitingButton.style.display = 'none';
    showSummaryButton.style.display = 'none';
    break;
  case 2.5:
    startGameButton.style.display = 'none';
    startZugButton.style.display = 'none';
    newGameButton.style.display = 'none';
    waitingButton.style.display = 'inline';
    showSummaryButton.style.display = 'none';
    infoLine.classList.remove('text-success');
    infoLine.classList.remove('text-danger');
    infoLine.classList.remove('text-warning');
    infoLine.classList.add('text-secondary');
    infoLine.innerHTML = "<h6 class='mb-1'><i class='em em-hourglass mr-1'></i> " + zugWarteNachricht +  "</h6>";
    break;
  case 3:
    startGameButton.style.display = 'none';
    startZugButton.style.display = 'none';
    newGameButton.style.display = 'none';
    waitingButton.style.display = 'none';
    showSummaryButton.style.display = 'inline';
    break;
  case 4:
    startGameButton.style.display = 'none';
    startZugButton.style.display = 'none';
    newGameButton.style.display = 'inline';
    waitingButton.style.display = 'none';
    showSummaryButton.style.display = 'none';
    document.getElementById("summary").style.display = 'grid';
    document.getElementById("cards").style.display = 'none';
    break;
  }
}

function updateSpielstand() {
  playerCount = document.getElementById("player_count");
  computerCount = document.getElementById("computer_count");
  cardsCount = document.getElementById("cards_count");
  playerCount.innerHTML = playerPoints;
  computerCount.innerHTML = computerPoints;
  // cardsCount.innerHTML = numberOfTurns;
  // numberOfTurns = numberOfTurns -1;
}

function buildComputerCard() {

  var computerCardDiv = document.getElementById("computercard");
  computerCardDiv.classList.toggle('flip');

  var computercardHeader = document.getElementById("computercard_header");
  computercardHeader.innerHTML = "<img src='img/" + currentComputerCard[0] + ".jpg' class='card-img-top'><h3 class='m-3 card-title'>" + currentComputerCard[0] + "</h3>";

  var computercardCategories = document.getElementById("computercard_categories");
  computercardCategories.innerHTML = "";
  for (i = 1; i < currentComputerCard.length; i++) {

    // Zeile erstellen
    var newRow = document.createElement("div");
    newRow.id = "computer_category_row" + i;
    newRow.classList.add('list-group-item', 'd-flex', 'w-100', 'justify-content-between');
    document.getElementById("computercard_categories").appendChild(newRow);

    // Feld für Kategorie
    var newCat = document.createElement("h6");
    var newCatContent = document.createTextNode(data_header[i]);
    newCat.appendChild(newCatContent);
    document.getElementById("computer_category_row" + i).appendChild(newCat);

    // Link für Wert erstellen
    var newVal = document.createElement("span");
    var newValContent;
    newValContent = document.createTextNode(currentComputerCard[i] + data_suffix[i]);
    newVal.appendChild(newValContent);
    newVal.id = "computercardCategory" + i;
    newVal.classList.add('category_nolink');
    document.getElementById("computer_category_row" + i).appendChild(newVal);

  }
}



$(document).ready(function() {
 // Nutzer wählt Kategorie

  $(document).on('click', '.category_link', function(event) {

    if (spielstatus == 2.5) {

      var computerCardDiv = document.getElementById("computercard");
      var firstComputerCard = currentComputerCard;
      var firstPlayerCard = currentPlayerCard;

      // Computer-Karte umdrehen und neu bauen
      buildComputerCard();

      // Gewählte Kategorie speichern
      var categoryID = parseInt(this.id.slice(-1));
      console.log("Gewählte Kategorie: " + categoryID);

      // Gewählte Kategorie speichern
      console.log("playerCardCategory" + categoryID);
      var chosenPlayerCategory = document.getElementById("player_category_row" + categoryID);
      var chosenComputerCategory = document.getElementById("computer_category_row" + categoryID);

      // Zusammenfassung vorbereiten

      var newSummaryLine = document.createElement("div");
      newSummaryLine.classList.add('list-group-item', 'd-flex', 'w-100', 'justify-content-between');
      var newSummaryEmoji = document.createElement("div");
      newSummaryEmoji.classList.add("d-none", "d-sm-block");

      var newSummaryPlayer = document.createElement("div");
      newSummaryPlayer.classList.add("p-1");
      newSummaryPlayer.innerHTML = "Spieler: " + currentPlayerCard[0] + "<br>" + data_header[categoryID] + " &ndash; " + currentPlayerCard[categoryID] + data_suffix[categoryID];

      var newSummaryComputer = document.createElement("div");
      newSummaryComputer.classList.add("p-1");
      newSummaryComputer.innerHTML = "Computer: " + currentComputerCard[0] + "<br>" + data_header[categoryID] + " &ndash; " + currentComputerCard[categoryID] + data_suffix[categoryID];

      if (data_comparison[categoryID] == "größer") {
        if (firstPlayerCard[categoryID] > firstComputerCard[categoryID]) {
          newSummaryEmoji.innerHTML = "<h1><i class='em em-slightly_smiling_face'></h1>";
          newSummaryLine.classList.add('list-group-item-success');
        } else if (firstPlayerCard[categoryID] < firstComputerCard[categoryID]) {
          newSummaryEmoji.innerHTML = "<h1><i class='em em-robot_face'></h1>";
          newSummaryLine.classList.add('list-group-item-danger');
        } else {
          newSummaryEmoji.innerHTML = "<h1><i class='em em-full_moon_with_face'></h1>";
          newSummaryLine.classList.add('list-group-item-warning');
        }
      } else {
        if (firstPlayerCard[categoryID] < firstComputerCard[categoryID]) {
          newSummaryEmoji.innerHTML = "<h1><i class='em em-slightly_smiling_face'></h1>";
          newSummaryLine.classList.add('list-group-item-success');
        } else if (firstPlayerCard[categoryID] > firstComputerCard[categoryID]) {
          newSummaryEmoji.innerHTML = "<h1><i class='em em-robot_face'></h1>";
          newSummaryLine.classList.add('list-group-item-danger');
        } else {
          newSummaryEmoji.innerHTML = "<h1><i class='em em-full_moon_with_face'></h1>";
          newSummaryLine.classList.add('list-group-item-warning');
        }
      }

      newSummaryLine.appendChild(newSummaryEmoji);
      newSummaryLine.appendChild(newSummaryPlayer);
      newSummaryLine.appendChild(newSummaryComputer);

      summaryList.appendChild(newSummaryLine);


      // Kategorien vergleichen


      console.log("Spieler: " + firstPlayerCard[categoryID] + " im Vergleich zu Computer: " + firstComputerCard[categoryID]);

      // Progress-Bar vorbereiten

      var progressBarWin = document.createElement("div");
      progressBarWin.classList.add("progress-bar", "bg-success", "w-25");
      progressBarWin.role = "progressbar";

      var progressBarLose = document.createElement("div");
      progressBarLose.classList.add("progress-bar", "bg-danger", "w-25");
      progressBarLose.role = "progressbar";

      var progressBarDraw = document.createElement("div");
      progressBarDraw.classList.add("progress-bar", "bg-warning", "w-25");
      progressBarDraw.role = "progressbar";

      if (data_comparison[categoryID] == "größer") {
        if (firstPlayerCard[categoryID] > firstComputerCard[categoryID]) {
          chosenPlayerCategory.classList.add('list-group-item-success');
          chosenComputerCategory.classList.add('list-group-item-danger');
          infoLine.classList.remove('text-secondary');
          infoLine.classList.add('text-success');
          infoLine.innerHTML = "<h6 class='mb-1'><i class='em em-grinning mr-1'></i> " + zugGewonnenNachricht +  "</h6>";
          gameProgressBar.appendChild(progressBarWin);
          playerPoints += 1;
        } else if (firstPlayerCard[categoryID] < firstComputerCard[categoryID]) {
          chosenPlayerCategory.classList.add('list-group-item-danger');
          chosenComputerCategory.classList.add('list-group-item-success');
          infoLine.classList.remove('text-secondary');
          infoLine.classList.add('text-danger');
          infoLine.innerHTML = "<h6 class='mb-1'><i class='em em-disappointed mr-1'></i> " + zugVerlorenNachricht +  "</h6>";
          gameProgressBar.appendChild(progressBarLose);
          computerPoints += 1;
        } else {
          chosenPlayerCategory.classList.add('list-group-item-warning');
          chosenComputerCategory.classList.add('list-group-item-warning');
          infoLine.classList.remove('text-secondary');
          infoLine.classList.add('text-warning');
          infoLine.innerHTML = "<h6 class='mb-1'><i class='em em-full_moon_with_face mr-1'></i> " + zugUnentschiedenNachricht +  "</h6>";
          gameProgressBar.appendChild(progressBarDraw);
        }
      } else {
        if (firstPlayerCard[categoryID] < firstComputerCard[categoryID]) {
          chosenPlayerCategory.classList.add('list-group-item-success');
          chosenComputerCategory.classList.add('list-group-item-danger');
          infoLine.classList.remove('text-secondary');
          infoLine.classList.add('text-success');
          infoLine.innerHTML = "<h6 class='mb-1'><i class='em em-grinning mr-2'></i> " + zugGewonnenNachricht +  "</h6>";
          playerPoints += 1;
          gameProgressBar.appendChild(progressBarWin);
        } else if (firstPlayerCard[categoryID] > firstComputerCard[categoryID]) {
          chosenPlayerCategory.classList.add('list-group-item-danger');
          chosenComputerCategory.classList.add('list-group-item-success');
          infoLine.classList.remove('text-secondary');
          infoLine.classList.add('text-danger');
          gameProgressBar.appendChild(progressBarLose);
          infoLine.innerHTML = "<h6 class='mb-1'><i class='em em-disappointed mr-1'></i> " + zugVerlorenNachricht +  "</h6>";
          computerPoints += 1;
        } else {
          chosenPlayerCategory.classList.add('list-group-item-warning');
          chosenComputerCategory.classList.add('list-group-item-warning');
          infoLine.classList.remove('text-secondary');
          infoLine.classList.add('text-warning');
          infoLine.innerHTML = "<h6 class='mb-1'><i class='em em-full_moon_with_face mr-1'></i> " + zugUnentschiedenNachricht +  "</h6>";
          gameProgressBar.appendChild(progressBarDraw);
        }
      }

      updateSpielstand();

      playerCards.shift();
      computerCards.shift();

      if (playerCards.length > 0) {
        updateButtons(2);
      } else {
        updateButtons(3);
        infoLine.classList.remove('text-success');
        infoLine.classList.remove('text-warning');
        infoLine.classList.remove('text-danger');
        infoLine.classList.add('text-secondary');
        infoLine.innerHTML = "<h6 class='mb-1'><i class='em em-checkered_flag mr-1'></i> " + spielVorbeiNachricht + "</h6>";
      }

    }

  } );
});

// Funktion fuer das Initialisieren des Spiels
function initGame() {

  shuffleCards();

  // "Spielen"-Knopf ausblenden und Spielstand einblenden
  updateButtons(1);

  // Punktestand einrichten
  playerPoints = 0;
  computerPoints = 0;
  updateSpielstand();

  //Progress-Bar leeren
  while (gameProgressBar.hasChildNodes()) {
    gameProgressBar.removeChild(gameProgressBar.lastChild);
  }

  initZug()
}

function initSummary() {
  updateButtons(4)

  var summaryHeadline = document.getElementById('summaryHeadline');

  if (playerPoints > computerPoints) {
    summaryHeadline.innerHTML = "<h3 class='text-success'>" + spielGewonnenNachricht + playerPoints + ":" + computerPoints + "<i class='em em-grinning ml-2'></i></h3>";
  }
  if (playerPoints < computerPoints) {
    summaryHeadline.innerHTML = "<h3 class='text-danger'>" + spielVerlorenNachricht + playerPoints + ":" + computerPoints + "<i class='em em-disappointed ml-2'></i></h3>";
  }
  if (playerPoints == computerPoints) {
    summaryHeadline.innerHTML = "<h3 class='text-warning'>" + spielUnentschiedenNachricht + playerPoints + ":" + computerPoints + "<i class='em em-full_moon_with_face ml-2'></i></h3>";
  }
}

function initZug() {
  // oberste Karte des Spielers/Computers anzeigen
  updateButtons(2.5);

  currentPlayerCard = playerCards[0];
  currentComputerCard = computerCards[0];

  var playercardHeader = document.getElementById("playercard_header");
  playercardHeader.innerHTML = "<img src='img/" + currentPlayerCard[0] + ".jpg' class='card-img-top'><h3 class='m-3 card-title'>" + currentPlayerCard[0] + "</h3>";

  var playercardCategories = document.getElementById("playercard_categories");
  playercardCategories.innerHTML = "";
  for (i = 1; i < currentPlayerCard.length; i++) {

    // Zeile erstellen
    var newRow = document.createElement("div");
    newRow.id = "player_category_row" + i;
    newRow.classList.add('list-group-item', 'd-flex', 'w-100', 'justify-content-between');
    document.getElementById("playercard_categories").appendChild(newRow);

    // Feld für Kategorie
    var newCat = document.createElement("h6");
    var newCatContent = document.createTextNode(data_header[i]);
    newCat.appendChild(newCatContent);
    document.getElementById("player_category_row" + i).appendChild(newCat);

    // Link für Wert erstellen
    var newVal = document.createElement("a");
    var newValContent = document.createTextNode(currentPlayerCard[i] + data_suffix[i]);
    newVal.appendChild(newValContent);
    newVal.id = "playercardCategory" + i;
    newVal.href = "#";
    newVal.classList.add('category_link');
    document.getElementById("player_category_row" + i).appendChild(newVal);

  }


  buildComputerCard();

}
