var startGameButton = document.getElementById("startGame");
startGameButton.addEventListener("click", initGame);

var startTurnButton = document.getElementById("startTurn");
startTurnButton.addEventListener("click", initTurn);

var newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", initGame);

var showSummaryButton = document.getElementById("showSummary");
showSummaryButton.addEventListener("click", initSummary);

var waitingButton = document.getElementById("waiting");

var infoLine = document.getElementById("info_line");
var summaryList = document.getElementById("summary_list");
var gameProgressBar = document.getElementById("gameProgress");

var data_header = ['Wahlkreis', 'Fläche', 'Bevölkerung', 'Kirchensteuer', 'Zuzugsbilanz', 'Schweine', 'Waldfläche'];
var data_suffix = ['', 'km&#xb2;', '', ' %', '', '', ' %'];
var data_comparison = ['', 'größer', 'größer', 'größer', 'größer', 'größer', 'größer'];
var bergstraße_i = ['Bergstraße I', 299.63, 137382, 69, 1157, 1637, 35];
var bergstraße_ii_ = ['Bergstraße II ', 419.88, 130553, 71, 670, 1252, 44];
var darmstadt_dieburg_i = ['Darmstadt-Dieburg I', 173.74, 120744, 59, 802, 5051, 28];
var darmstadt_dieburg_ii = ['Darmstadt-Dieburg II', 365.28, 127450, 67, 904, 16156, 37];
var darmstadt_stadt_i_und_ii = ['Darmstadt-Stadt I und II', 241.7, 203987, 55, 2368, 470, 40];
var eschwege_witzenhausen = ['Eschwege-Witzenhausen', 595.18, 75970, 77, 868, 6048, 42];
var frankfurt_am_main_i___vi = ['Frankfurt am Main I - VI', 248.31, 736414, 44, 480, 1123, 15];
var fulda_i = ['Fulda I', 451.42, 106473, 77, 626, 24662, 38];
var fulda_ii = ['Fulda II', 839.23, 107647, 87, 604, 21377, 33];
var gießen_i = ['Gießen I', 220.04, 135108, 64, 2287, 100, 33];
var gießen_ii = ['Gießen II', 537.6, 120896, 72, 602, 13574, 31];
var groß_gerau_i = ['Groß-Gerau I', 123, 136188, 47, 1759, 0, 26];
var groß_gerau_ii = ['Groß-Gerau II', 330.03, 132857, 56, 1008, 5452, 19];
var hersfeld = ['Hersfeld', 679.74, 77813, 78, 78, 36669, 40];
var hochtaunus_i = ['Hochtaunus I', 254.81, 122643, 58, 1149, 183, 44];
var hochtaunus_ii = ['Hochtaunus II', 227.19, 112348, 58, 770, 180, 50];
var kassel_land_i = ['Kassel-Land I', 1020.22, 114530, 77, 868, 44014, 27];
var kassel_land_ii = ['Kassel-Land II', 268.49, 120433, 70, 1295, 7202, 27];
var kassel_stadt_i_und_ii = ['Kassel-Stadt I und II', 106.78, 199062, 57, 1210, 0, 21];
var lahn_dill_i = ['Lahn-Dill I', 648.09, 122713, 69, 322, 93, 51];
var lahn_dill_ii = ['Lahn-Dill II', 418.44, 131361, 70, 1359, 1739, 42];
var limburg_weilburg_i = ['Limburg-Weilburg I', 264.68, 88262, 75, 674, 6188, 22];
var limburg_weilburg_ii = ['Limburg-Weilburg II', 473.78, 83858, 76, 16, 7835, 40];
var main_kinzig_i = ['Main-Kinzig I', 305.84, 127743, 66, 955, 1857, 27];
var main_kinzig_ii = ['Main-Kinzig II', 141.46, 159720, 52, 3343, 7, 18];
var main_kinzig_iii = ['Main-Kinzig III', 950.25, 129252, 75, 982, 2905, 50];
var main_taunus_i = ['Main-Taunus I', 100.06, 119224, 57, 1305, 0, 18];
var main_taunus_ii = ['Main-Taunus II', 122.33, 116484, 60, 1446, 304, 9];
var marburg_biedenkopf_i = ['Marburg-Biedenkopf I', 770.59, 111323, 75, 175, 13033, 40];
var marburg_biedenkopf_ii = ['Marburg-Biedenkopf II', 491.95, 133690, 70, 153, 14820, 37];
var odenwald = ['Odenwald', 623.97, 96473, 67, -152, 817, 47];
var offenbach_land_i = ['Offenbach Land I', 121.55, 127446, 51, 721, 615, 47];
var offenbach_land_ii = ['Offenbach Land II', 74.99, 105538, 51, 599, 23, 42];
var offenbach_land_iii = ['Offenbach Land III', 159.75, 116998, 63, 1247, 473, 39];
var offenbach_stadt_ = ['Offenbach-Stadt ', 44.89, 124589, 44, 463, 0, 33];
var rheingau_taunus_i = ['Rheingau-Taunus I', 444.47, 89137, 68, 727, 0, 54];
var rheingau_taunus_ii = ['Rheingau-Taunus II', 367.01, 96531, 61, 1305, 939, 49];
var rotenburg = ['Rotenburg', 940.89, 77211, 79, 495, 43362, 44];
var schwalm_eder_i = ['Schwalm-Eder I', 613.33, 90371, 77, 1015, 77482, 31];
var schwalm_eder_ii = ['Schwalm-Eder II', 925.16, 90734, 83, 659, 70573, 36];
var vogelsberg = ['Vogelsberg', 1556.01, 116432, 83, 140, 61134, 39];
var waldeck_frankenberg_i = ['Waldeck-Frankenberg I', 907.62, 79754, 78, 634, 44329, 38];
var waldeck_frankenberg_ii = ['Waldeck-Frankenberg II', 940.82, 78213, 80, 442, 17993, 53];
var wetterau_i = ['Wetterau I', 220.76, 112345, 61, 1219, 1003, 15];
var wetterau_ii = ['Wetterau II', 547.05, 95562, 72, 578, 4058, 33];
var wetterau_iii = ['Wetterau III', 332.88, 96007, 68, 970, 7026, 21];
var wiesbaden_i_und_ii = ['Wiesbaden I und II', 203.93, 277619, 51, 908, 558, 27];


var wahlkreise;
var playerCards;
var computerCards;
var playerPoints;
var computerPoints;
var playerCount;
var computerCount;
var currentPlayerCard;
var currentComputerCard;
var stateOfGame;

var turnWonMsg = "Gewonnen!";
var turnLostMsg = "Verloren...";
var turnDrawMsg = "Unentschieden.";
var gameWonMsg = "Spiel gewonnen: ";
var gameLostMsg = "Spiel verloren: ";
var gameDrawMsg = "Unentschieden: ";
var turnWaitMsg = "Kategorie w&auml;hlen";
var gameOverMsg = "Spiel vorbei";
var gameWaitMsg = "Neues Spiel beginnen?";


function shuffleCards() {
  //Shuffles the array specified in the beginning, deals cards to player and computer
  wahlkreise = [bergstraße_i, bergstraße_ii_, darmstadt_dieburg_i, darmstadt_dieburg_ii, darmstadt_stadt_i_und_ii, 
		eschwege_witzenhausen, frankfurt_am_main_i___vi, fulda_i, fulda_ii, gießen_i, gießen_ii, groß_gerau_i, 
		groß_gerau_ii, hersfeld, hochtaunus_i, hochtaunus_ii, kassel_land_i, kassel_land_ii, kassel_stadt_i_und_ii, 
		lahn_dill_i, lahn_dill_ii, limburg_weilburg_i, limburg_weilburg_ii, main_kinzig_i, main_kinzig_ii, 
		main_kinzig_iii, main_taunus_i, main_taunus_ii, marburg_biedenkopf_i, marburg_biedenkopf_ii, odenwald, 
		offenbach_land_i, offenbach_land_ii, offenbach_land_iii, offenbach_stadt_, rheingau_taunus_i, 
		rheingau_taunus_ii, rotenburg, schwalm_eder_i, schwalm_eder_ii, vogelsberg, waldeck_frankenberg_i, 
		waldeck_frankenberg_ii, wetterau_i, wetterau_ii, wetterau_iii, wiesbaden_i_und_ii];
  var currentIndex = wahlkreise.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = wahlkreise[currentIndex];
    wahlkreise[currentIndex] = wahlkreise[randomIndex];
    wahlkreise[randomIndex] = temporaryValue;
  }

  // Deal cards: 10 each
  playerCards = wahlkreise.slice(0, 7);
  computerCards = wahlkreise.slice(7, 14);
}


//Set button-states
//1=start game
//2=start next turn
//2.5=turn in progress
//3=last turn finished
//4=showing summary

function updateButtons(state) {
  stateOfGame = state;
  switch(state) {
    case 1:
      // Disable all buttons, show "waiting"-button, hide summary, show carddeck
      startGameButton.style.display = 'none';
      startTurnButton.style.display = 'none';
      newGameButton.style.display = 'none';
      waitingButton.style.display = 'inline';
      showSummaryButton.style.display = 'none';
      document.getElementById("summary").style.display = 'none';
      document.getElementById("cards").style.display = 'grid';
      infoLine.innerHTML = "";
      break;
    case 2:
      // Display button to start next turn
      startGameButton.style.display = 'none';
      startTurnButton.style.display = 'inline';
      newGameButton.style.display = 'none';
      waitingButton.style.display = 'none';
      showSummaryButton.style.display = 'none';
      break;
    case 2.5:
      // Disable all buttons, show "waiting"-button, reset infoline
      startGameButton.style.display = 'none';
      startTurnButton.style.display = 'none';
      newGameButton.style.display = 'none';
      waitingButton.style.display = 'inline';
      showSummaryButton.style.display = 'none';
      infoLine.classList.remove('text-success');
      infoLine.classList.remove('text-danger');
      infoLine.classList.remove('text-warning');
      infoLine.classList.add('text-secondary');
      infoLine.innerHTML = "<h5 class='mb-1'><i class='em em-question mr-1'></i> " + turnWaitMsg +  "</h5>";
      break;
    case 3:
      // Show button to display summary after last turn
      startGameButton.style.display = 'none';
      startTurnButton.style.display = 'none';
      newGameButton.style.display = 'none';
      waitingButton.style.display = 'none';
      showSummaryButton.style.display = 'inline';
      break;
    case 4:
      // Show summary, hide cards, show "new game"-button
      startGameButton.style.display = 'none';
      startTurnButton.style.display = 'none';
      newGameButton.style.display = 'inline';
      waitingButton.style.display = 'none';
      showSummaryButton.style.display = 'none';
      document.getElementById("summary").style.display = 'grid';
      document.getElementById("cards").style.display = 'none';
      break;
  }
}

function updateScore() {
  playerCount = document.getElementById("player_count");
  computerCount = document.getElementById("computer_count");
  playerCount.innerHTML = playerPoints;
  computerCount.innerHTML = computerPoints;
}

function buildComputerCard() {

  var computerCardDiv = document.getElementById("computercard");
  computerCardDiv.classList.toggle('flip');

  var computerCardBack = document.getElementById("computerCardBack");
  computerCardBack.style.height = $(playercard).height() + "px";
  var computercardBackHeader = document.getElementById("computercardBackHeader");
  // computercardBackHeader.innerHTML =  "<img src='img/flags/" + currentComputerCard[0] + ".svg' class='flag mr-2 align-middle img-thumbnail'>" + currentComputerCard[0];
  computercardBackHeader.innerHTML =  currentComputerCard[0];
  $('#someDiv').height();

  // Change heading of computer card
  var computercardHeader = document.getElementById("computercard_header");
  // computercardHeader.innerHTML = "<h3 class='m-3 card-title'> <img src='img/flags/" + currentComputerCard[0] + ".svg' class='flag mr-2 align-middle img-thumbnail'>" + currentComputerCard[0] + "</h3>";
  computercardHeader.innerHTML = "<h3 class='m-3 card-title'>" + currentComputerCard[0] + "</h3>";

  // Fill in computer card by looping through card-array
  var computercardCategories = document.getElementById("computercard_categories");
  computercardCategories.innerHTML = "";
  for (i = 1; i < currentComputerCard.length; i++) {

    // make new row
    var newRow = document.createElement("div");
    newRow.id = "computer_category_row" + i;
    newRow.classList.add('list-group-item', 'd-flex', 'w-100', 'justify-content-between');
    document.getElementById("computercard_categories").appendChild(newRow);

    // category
    var newCat = document.createElement("h6");
    var newCatContent = document.createTextNode(data_header[i]);
    newCat.appendChild(newCatContent);
    document.getElementById("computer_category_row" + i).appendChild(newCat);

    // show value
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
 // Let player choose category

  $(document).on('click', '.category_link', function(event) {

    if (stateOfGame == 2.5) {

      var computerCardDiv = document.getElementById("computercard");
      var firstComputerCard = currentComputerCard;
      var firstPlayerCard = currentPlayerCard;

      // turn over computer card
      buildComputerCard();

      // log the chosen category
      var categoryID = parseInt(this.id.slice(-1));
      var chosenPlayerCategory = document.getElementById("player_category_row" + categoryID);
      var chosenComputerCategory = document.getElementById("computer_category_row" + categoryID);

      // Prepare summary

      var newSummaryLine = document.createElement("div");
      newSummaryLine.classList.add("list-group-item");
	  newSummaryRow = document.createElement("div");
      newSummaryRow.classList.add("row");
      var newSummaryEmoji = document.createElement("div");
      newSummaryEmoji.classList.add("d-none", "d-sm-block", "col-sm-2");

      var newSummaryPlayer = document.createElement("div");
      newSummaryPlayer.classList.add("p-1", "col-6");
      newSummaryPlayer.innerHTML = "<strong>" + currentPlayerCard[0] + "</strong><br>" + data_header[categoryID] + ": <br class='d-block d-sm-none'>" + currentPlayerCard[categoryID] + data_suffix[categoryID];

      var newSummaryComputer = document.createElement("div");
      newSummaryComputer.classList.add("p-1", "col-6");
      newSummaryComputer.innerHTML = "<strong>" + currentComputerCard[0] + "</strong><br>" + data_header[categoryID] + ": <br class='d-block d-sm-none'>" + currentComputerCard[categoryID] + data_suffix[categoryID];

      if (data_comparison[categoryID] == "larger") {
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

      // newSummaryRow.appendChild(newSummaryEmoji);
      newSummaryRow.appendChild(newSummaryPlayer);
      newSummaryRow.appendChild(newSummaryComputer);
      newSummaryLine.appendChild(newSummaryRow);

      summaryList.appendChild(newSummaryLine);

      // Prepare progress-bar

      var progressBarWin = document.createElement("div");
      progressBarWin.classList.add("progress-bar", "bg-success");
      progressBarWin.style = "width: 10%";
      progressBarWin.role = "progressbar";

      var progressBarLose = document.createElement("div");
      progressBarLose.classList.add("progress-bar", "bg-danger");
      progressBarLose.style = "width: 10%";
      progressBarLose.role = "progressbar";

      var progressBarDraw = document.createElement("div");
      progressBarDraw.classList.add("progress-bar", "bg-warning");
      progressBarDraw.style = "width: 10%";
      progressBarDraw.role = "progressbar";

      // compare values, change message accordingly, update score

      if (data_comparison[categoryID] == "larger") {
        if (firstPlayerCard[categoryID] > firstComputerCard[categoryID]) {
          chosenPlayerCategory.classList.add('list-group-item-success');
          chosenComputerCategory.classList.add('list-group-item-danger');
          infoLine.classList.remove('text-secondary');
          infoLine.classList.add('text-success');
          infoLine.innerHTML = "<h5 class='mb-1'><i class='em em-grinning mr-1'></i> " + turnWonMsg +  "</h5>";
          gameProgressBar.appendChild(progressBarWin);
          playerPoints += 1;
        } else if (firstPlayerCard[categoryID] < firstComputerCard[categoryID]) {
          chosenPlayerCategory.classList.add('list-group-item-danger');
          chosenComputerCategory.classList.add('list-group-item-success');
          infoLine.classList.remove('text-secondary');
          infoLine.classList.add('text-danger');
          infoLine.innerHTML = "<h5 class='mb-1'><i class='em em-disappointed mr-1'></i> " + turnLostMsg +  "</h5>";
          gameProgressBar.appendChild(progressBarLose);
          computerPoints += 1;
        } else {
          chosenPlayerCategory.classList.add('list-group-item-warning');
          chosenComputerCategory.classList.add('list-group-item-warning');
          infoLine.classList.remove('text-secondary');
          infoLine.classList.add('text-warning');
          infoLine.innerHTML = "<h5 class='mb-1'><i class='em em-full_moon_with_face mr-1'></i> " + turnDrawMsg +  "</h5>";
          gameProgressBar.appendChild(progressBarDraw);
        }
      } else {
        if (firstPlayerCard[categoryID] < firstComputerCard[categoryID]) {
          chosenPlayerCategory.classList.add('list-group-item-success');
          chosenComputerCategory.classList.add('list-group-item-danger');
          infoLine.classList.remove('text-secondary');
          infoLine.classList.add('text-success');
          infoLine.innerHTML = "<h5 class='mb-1'><i class='em em-grinning mr-2'></i> " + turnWonMsg +  "</h5>";
          playerPoints += 1;
          gameProgressBar.appendChild(progressBarWin);
        } else if (firstPlayerCard[categoryID] > firstComputerCard[categoryID]) {
          chosenPlayerCategory.classList.add('list-group-item-danger');
          chosenComputerCategory.classList.add('list-group-item-success');
          infoLine.classList.remove('text-secondary');
          infoLine.classList.add('text-danger');
          gameProgressBar.appendChild(progressBarLose);
          infoLine.innerHTML = "<h5 class='mb-1'><i class='em em-disappointed mr-1'></i> " + turnLostMsg +  "</h5>";
          computerPoints += 1;
        } else {
          chosenPlayerCategory.classList.add('list-group-item-warning');
          chosenComputerCategory.classList.add('list-group-item-warning');
          infoLine.classList.remove('text-secondary');
          infoLine.classList.add('text-warning');
          infoLine.innerHTML = "<h5 class='mb-1'><i class='em em-full_moon_with_face mr-1'></i> " + turnDrawMsg +  "</h5>";
          gameProgressBar.appendChild(progressBarDraw);
        }
      }

      updateScore();


      //remove current card from decks

      playerCards.shift();
      computerCards.shift();

      // Proceed with game: Next card, if cards left or summary, if no cards left

      if (playerCards.length > 0) {
        updateButtons(2);
      } else {
        updateButtons(3);
        infoLine.classList.remove('text-success');
        infoLine.classList.remove('text-warning');
        infoLine.classList.remove('text-danger');
        infoLine.classList.add('text-secondary');
        infoLine.innerHTML = "<h5 class='mb-1'><i class='em em-checkered_flag mr-1'></i> " + gameOverMsg + "</h5>";
      }

    }

  } );
});



function initGame() {
  //Function to initiate the actual game

  // Shuffle and deal cards
  shuffleCards();

  // Show cards and beginn game
  updateButtons(1);

  // Reset score
  playerPoints = 0;
  computerPoints = 0;
  updateScore();

  // Reset progress bar
  while (gameProgressBar.hasChildNodes()) {
    gameProgressBar.removeChild(gameProgressBar.lastChild);
  }

  // Start turn
  initTurn()
}

function initSummary() {
  //Function to display a summary of each turn after the game

  // Change buttons when summary is shown
  updateButtons(4)

  var summaryHeadline = document.getElementById('summaryHeadline');

  if (playerPoints > computerPoints) {
    summaryHeadline.innerHTML = "<h3 class='text-success'>" + gameWonMsg + playerPoints + ":" + computerPoints + "<i class='em em-grinning ml-2'></i></h3>";
  }
  if (playerPoints < computerPoints) {
    summaryHeadline.innerHTML = "<h3 class='text-danger'>" + gameLostMsg + playerPoints + ":" + computerPoints + "<i class='em em-disappointed ml-2'></i></h3>";
  }
  if (playerPoints == computerPoints) {
    summaryHeadline.innerHTML = "<h3 class='text-warning'>" + gameDrawMsg + playerPoints + ":" + computerPoints + "<i class='em em-full_moon_with_face ml-2'></i></h3>";
  }
}

function initTurn() {
  //Function to initiate the next turn by showing the first player card

  updateButtons(2.5);

  // choose first card from each deck
  currentPlayerCard = playerCards[0];
  currentComputerCard = computerCards[0];

  // Change heading of player card
  var playercardHeader = document.getElementById("playercard_header");
  // playercardHeader.innerHTML = "<h3 class='m-3 card-title'> <img src='img/flags/" + currentPlayerCard[0] + ".svg' class='flag mr-2 align-middle img-thumbnail'>" + currentPlayerCard[0] + "</h3>";
  playercardHeader.innerHTML = "<h3 class='m-3 card-title'>" + currentPlayerCard[0] + "</h3>";
	
  // Fill in player card by looping through card-array
  var playercardCategories = document.getElementById("playercard_categories");
  playercardCategories.innerHTML = "";
  for (i = 1; i < currentPlayerCard.length; i++) {

    // make new row
    var newRow = document.createElement("div");
    newRow.id = "player_category_row" + i;
    newRow.classList.add('list-group-item', 'd-flex', 'w-100', 'justify-content-between');
    document.getElementById("playercard_categories").appendChild(newRow);

    // category
    var newCat = document.createElement("h6");
    var newCatContent = document.createTextNode(data_header[i]);
    newCat.appendChild(newCatContent);
    document.getElementById("player_category_row" + i).appendChild(newCat);

    // link with value
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
