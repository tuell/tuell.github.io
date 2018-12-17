// This script controls the mechanics behind a "top trumps"-style game.
// Developed by the data journalism team of the Hessischer Rundfunk in 2018
// (C) 2018/09/20
// Version 1.0

// CUSTOMIZATION: To build your own game, change the text to display

// dropdown for choosing a card
var chooseCardMsg = "(Spieler auswählen)";
// error message if no card is chosen
var noCardSelectionMsG = "Kein Spieler ausgewählt";
// error message if wrong number of categories is chosen
var noCategorySelectionMsG = "Genau fünf Kategorien auswählen";
var turnWonMsg = "Gewonnen!"; // turn won
var turnLostMsg = "Verloren..."; // turn lost
var turnDrawMsg = "Unentschieden."; // turn results in draw
var gameWonMsg = "Spiel gewonnen"; // game won
var gameLostMsg = "Spiel verloren"; // game lost
var gameDrawMsg = "Unentschieden"; // game results in draw
// text to display in infoline while player choses category
var turnWaitMsg = "Kategorie w&auml;hlen";
// text to display in infoline when game is over
var gameOverMsg = "Spiel vorbei";
// text to display in infoline when summary is shown
var gameWaitMsg = "Neues Spiel beginnen?";


// Game is configured for seven rounds and five categories per card
// Change this here. Progress bar percentage is 100/number of Rounds

var numberOfRounds = 7;
var numberOfCategories = 5;
var progressBarPercentage = "width: 14.29%";
var currentRound = 1;


// CUSTOMIZATION: Enter your data for the cards here

// Data header: Names of the categories, first one = title of the card
var data_header = ['Spieler', 'Spielminuten', 'Ballkontakte',
                   'Gelaufene Strecke', 'Zweikampfquote', 'Schüsse'];

// Category names for summary
var summary_header = ['Spieler', 'Min&shy;uten',
                      'Ball&shy;kon&shy;tak&shy;te',
                      'Ge&shy;lau&shy;fen',
                      'Zwei&shy;kämpfe', 'Schüs&shy;se'];

// Units if necessary, first entry always empty
var data_suffix = ['', '', '', '\u2006km', '\u0025', ''];

// Specify which number wins: larger or smaller, first entry always empty
var data_comparison = ['', 'larger', 'larger', 'larger', 'larger', 'larger'];

// One array per card, structure: Title first, then category values

/////////////////////////////////////////////////
// HIER VARIABLEN AUS DER EXCEL-DATEI EINFÜGEN //
// HIER VARIABLEN AUS DER EXCEL-DATEI EINFÜGEN //
// HIER VARIABLEN AUS DER EXCEL-DATEI EINFÜGEN //
// HIER VARIABLEN AUS DER EXCEL-DATEI EINFÜGEN //
// HIER VARIABLEN AUS DER EXCEL-DATEI EINFÜGEN //
// HIER VARIABLEN AUS DER EXCEL-DATEI EINFÜGEN //
// HIER VARIABLEN AUS DER EXCEL-DATEI EINFÜGEN //
/////////////////////////////////////////////////

var dc24 = ['da Costa', 1081, 665, 11.6, 70.7, 38];
var en2 = ['N\'Dicka', 1105, 353, 9.5, 63.5, 82];
var fk10 = ['Kostic', 733, 202, 10.1, 46.7, 50];
var sh9 = ['Haller', 1208, 703, 11.6, 45.1, 88];
var mh20 = ['Hasebe', 1126, 777, 11.5, 75.8, 67];
var gf5 = ['Fernandes', 646, 530, 12.7, 72.6, 91];
var jg6 = ['de Guzman', 895, 591, 10.2, 72.3, 14];
var lj8 = ['Jovic', 550, 565, 11.1, 59.4, 63];
var da19 = ['Abraham', 623, 316, 11.6, 46.3, 35];
var ar4 = ['Rebic', 1090, 773, 9.6, 54.6, 10];
var mg11 = ['Gacinovic', 1364, 242, 11, 72.4, 23];
var lt16 = ['Torró', 865, 234, 12.9, 69.8, 25];
var mr23 = ['Russ', 1326, 670, 12.6, 47.8, 36];
var jw15 = ['Willems', 1048, 423, 9.2, 65, 53];
var cs13 = ['Salcedo', 1373, 603, 10.6, 48.7, 94];

// group cards in one array
var allCards = [dc24, en2, fk10, sh9, mh20, gf5, jg6, lj8,
                da19, ar4, mg11, lt16, mr23, jw15, cs13];

// list of cards in case player wants to choose a specific card to play with
var cardsList = [['dc24', 'Danny da Costa'], ['en2', 'Evan N\'Dicka'],
                 ['fk10', 'Filip Kostic'], ['sh9', 'Sébastien Haller'],
                 ['mh20', 'Makoto Hasebe'], ['gf5', 'Gelson Fernandes'],
                 ['jg6', 'Jonathan de Guzman'], ['lj8', 'Luka Jovic'],
                 ['da19', 'David Abraham'], ['ar4', 'Ante Rebic'],
                 ['mg11', 'Mijat Gacinovic'], ['lt16', 'Lucas Torró'],
                 ['mr23', 'Marco Russ'], ['jw15', 'Jetro Willems'],
                 ['cs13', 'Carlos Salcedo']];

// Inititate buttons and information displays
var startGameButton;
var startTurnButton;
var newGameButton;
var showSummaryButton;
var waitingButton;
var infoLine;
var summaryList;
var gameProgressBar;
var computerCardDiv;


// set width of hud and button container on small devices
var viewportWidth = $(window).width();

if (viewportWidth <= 576) {
  $("#hudcontent").css( "maxWidth", viewportWidth );
  $("#buttons").css( "maxWidth", viewportWidth );
  $("#infocontent").css( "maxWidth", viewportWidth );
}

// initiate variables for later use
var gameMode;
var chosenCard;
var chosenCategories;
var playerCards;
var computerCards;
var playerPoints;
var computerPoints;
var playerCount;
var computerCount;
var currentPlayerCard;
var currentComputerCard;
var stateOfGame;

function formatNumbers(num){
  return (
    num
      .toString()
      .replace(".",",")
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    );
}

function shuffleCards() {
  //Shuffles an array
  var currentIndex = allCards.length;
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = allCards[currentIndex];
    allCards[currentIndex] = allCards[randomIndex];
    allCards[randomIndex] = temporaryValue;
  }

}


//Set button-states
//1=game mode selection
//2=category selection
//3=start game
//4=start next turn
//5=turn in progress
//6=last turn finished
//7=showing summary

function updateButtons(state) {
  stateOfGame = state;
  switch(state) {
    case 1:
      // Show only game mode selectors
      document.getElementById("hud").style.display = "none";
      document.getElementById("hud2").style.display = "none";
      document.getElementById("getMode").style.display = "flex";
      document.getElementById("getCategories").style.display = "none";
      document.getElementById("summary").style.display = "none";
      document.getElementById("cards").style.display = "none";
      document.getElementById("buttons").style.display = "none";
      newGameButton.style.display = "none";
      // Reset summary
      while (summaryList.hasChildNodes()) {
        summaryList.removeChild(summaryList.lastChild);
      }

      getMode();
      break;
    case 2:
      // Show only category selectors
      document.getElementById("hud").style.display = "none";
      document.getElementById("hud2").style.display = "none";
      document.getElementById("getMode").style.display = "none";
      document.getElementById("getCategories").style.display = "flex";
      document.getElementById("summary").style.display = "none";
      document.getElementById("cards").style.display = "none";
      document.getElementById("buttons").style.display = "none";
      getCategories();
      break;
    case 3:
      // Disable all buttons, show "waiting"-button, hide summary, show carddeck
      document.getElementById("hud").style.display = "block";
//      document.getElementById("hud2").style.display = "flex";
      document.getElementById("getMode").style.display = "none";
      document.getElementById("getCategories").style.display = "none";
      document.getElementById("summary").style.display = "none";
      document.getElementById("cards").style.display = "block";
      document.getElementById("buttons").style.display = "flex";
      startGameButton.style.display = "none";
      startTurnButton.style.display = "none";
      newGameButton.style.display = "none";
      waitingButton.style.display = "inline";
      showSummaryButton.style.display = "none";
      infoLine.innerHTML = "";
      break;
    case 4:
      // Display button to start next turn
      startGameButton.style.display = "none";
      startTurnButton.style.display = "inline";
      newGameButton.style.display = "none";
      waitingButton.style.display = "none";
      showSummaryButton.style.display = "none";
      break;
    case 5:
      // Disable all buttons, show "waiting"-button, reset infoline
      startGameButton.style.display = "none";
      startTurnButton.style.display = "none";
      newGameButton.style.display = "none";
      waitingButton.style.display = "inline";
      showSummaryButton.style.display = "none";
      infoLine.classList.remove("text-success");
      infoLine.classList.remove("text-danger");
      infoLine.classList.remove("text-warning");
      infoLine.classList.add("text-light");
      infoLine.innerHTML = "<h4 class='mb-1'>Runde " + currentRound + " von " +
                           numberOfRounds + "</h4>";
      break;
    case 6:
      // Show button to display summary after last turn
      startGameButton.style.display = "none";
      startTurnButton.style.display = "none";
      newGameButton.style.display = "none";
      waitingButton.style.display = "none";
      showSummaryButton.style.display = "inline";
      break;
    case 7:
      // Show summary, hide cards, show "new game"-button
      document.getElementById("hud").style.display = "none";
      startGameButton.style.display = "none";
      startTurnButton.style.display = "none";
      waitingButton.style.display = "none";
      newGameButton.style.display = "inline";
      showSummaryButton.style.display = "none";
      infoLine.style.display = "none";
      document.getElementById("summary").style.display = "block";
      document.getElementById("cards").style.display = "none";
      document.getElementById("hud2").style.display = "none";
      break;
  }
}

function getMode() {
  // function to let user select a game mode:
  // either classic with a random card in each round
  // or play with one card throughout the entire game

  var cardsListDropdown = document.getElementById("chosenCardSelect");
  var noCardSelectionDiv = document.getElementById("noCardSelection");
  noCardSelectionDiv.innerHTML = "";

  // Reset list of cards to choose from first
  while (cardsListDropdown.hasChildNodes()) {
    cardsListDropdown.removeChild(cardsListDropdown.lastChild);
  }

  // Build list of all cards to choose from
  var chooseCardMsgElement = document.createElement("option");
  chooseCardMsgElement.value = "noSelection";
  var chooseCardMsgContent = document.createTextNode(chooseCardMsg);
  chooseCardMsgElement.appendChild(chooseCardMsgContent);
  cardsListDropdown.appendChild(chooseCardMsgElement);

  var newCardInList;
  var newCardInListContent;

  for (i = 0; i < cardsList.length; i+=1) {
    newCardInList = document.createElement("option");
    newCardInList.value = cardsList[i][0];
    newCardInListContent = document.createTextNode(cardsList[i][1]);
    newCardInList.appendChild(newCardInListContent);
    cardsListDropdown.appendChild(newCardInList);
  }


  // build random list of categories - delete this section if
  // getCategories() will be used

  chosenCategories = [];
  for (i = 1; i < data_header.length; i+=1) {
    chosenCategories.push(i);
  }

  var currentCatIndex = chosenCategories.length;
  var temporaryCatValue;
  var randomCatIndex;

  // While there remain elements to shuffle...
  while (0 !== currentCatIndex) {

    // Pick a remaining element...
    randomCatIndex = Math.floor(Math.random() * currentCatIndex);
    currentCatIndex -= 1;

    // And swap it with the current element.
    temporaryCatValue = chosenCategories[currentCatIndex];
    chosenCategories[currentCatIndex] = chosenCategories[randomCatIndex];
    chosenCategories[randomCatIndex] = temporaryCatValue;
  }

  // Use number (specified before) of categories of shuffled list
  chosenCategories = chosenCategories.slice(0, numberOfCategories);



  // Let player choose game mode
  $(document).on("click", "#randomCards", function() {
    gameMode = "random";
    initGame();
  });

  $(document).on("click", "#chosenCardButton", function() {
    gameMode = "fixedCard";
    chosenCard = $("#chosenCardSelect :selected").val();

    if (chosenCard == "noSelection") {
      noCardSelectionDiv.innerHTML = noCardSelectionMsG;
    } else {
      initGame();
    }

  });

}

function getCategories() {
  // function to let user select, which categories to play with:
  // either with five random categories
  // or with five fixed categories

  var categoriesList = document.getElementById("chosenCategoriesList");
  var noCategorySelectionDiv = document.getElementById("noCategorySelection");
  noCategorySelectionDiv.innerHTML = "";

  // Reset checkboxes for categories
  while (categoriesList.hasChildNodes()) {
    categoriesList.removeChild(categoriesList.lastChild);
  }

  // Build checkboxes with categories
  var newCategoryCheckbox;
  var newCategoryInput;
  var newCategoryLabel;
  var newCategoryLabelContent;

  for (i = 1; i < data_header.length; i+=1) {
    newCategoryCheckbox = document.createElement("div");
    newCategoryCheckbox.classList.add("custom-control", "custom-checkbox",
                                      "custom-control-inline");

    newCategoryInput = document.createElement("input");
    newCategoryInput.id = i;
    newCategoryInput.classList.add("custom-control-input");
    newCategoryInput.type = "checkbox";

    newCategoryLabel = document.createElement("label");
    newCategoryLabel.classList.add("custom-control-label");
    newCategoryLabel.setAttribute("for", i);
    newCategoryLabelContent = document.createTextNode(data_header[i]);
    newCategoryLabel.appendChild(newCategoryLabelContent);

    newCategoryCheckbox.appendChild(newCategoryInput);
    newCategoryCheckbox.appendChild(newCategoryLabel);

    categoriesList.appendChild(newCategoryCheckbox);
  }

  // Let player choose categories

  // If player chooses random categories, create random array of five numbers
  $(document).on("click", "#randomCategories", function() {
    chosenCategories = [];
    for (i = 1; i < data_header.length; i+=1) {
      chosenCategories.push(i);
    }

    var currentCatIndex = chosenCategories.length;
    var temporaryCatValue;
    var randomCatIndex;

    // While there remain elements to shuffle...
    while (0 !== currentCatIndex) {

      // Pick a remaining element...
      randomCatIndex = Math.floor(Math.random() * currentCatIndex);
      currentCatIndex -= 1;

      // And swap it with the current element.
      temporaryCatValue = chosenCategories[currentCatIndex];
      chosenCategories[currentCatIndex] = chosenCategories[randomCatIndex];
      chosenCategories[randomCatIndex] = temporaryCatValue;
    }

    // Use first five categories of shuffled list
    chosenCategories = chosenCategories.slice(0, numberOfCategories);

    initGame();

  });

  // if player chooses own categories, store in array
  $(document).on("click", "#chosenCategoriesButton", function() {
    chosenCategories = [];
    for (i = 1; i < data_header.length; i+=1) {
      currentCatID = "#" + i;
      if ($(currentCatID).is(":checked"))
        chosenCategories.push(i);
    }

    if (chosenCategories.length != numberOfCategories) {
      noCategorySelectionDiv.innerHTML = noCategorySelectionMsG;
    } else {
      initGame();
    }
  });

}

function buildDecks() {
  // Assign cards to player and computer according to game mode selection

  if (gameMode == "random") {
    // Deal 7 random cards each
    playerCards = allCards.slice(0, numberOfRounds);
    computerCards = allCards.slice(numberOfRounds, 14);
  } else {
    // assign the chosen card to player seven times
    playerCards = [];
    for (i = 0; i < numberOfRounds; i+=1) {
      playerCards.push(eval(chosenCard));
    }
    // remove chosen player card from cards, assign computer random cards
    chosenCardIndex = allCards.indexOf(eval(chosenCard));
    allCards.splice(chosenCardIndex, 1);
    computerCards = allCards.slice(0, numberOfRounds);
  }

}

function updateScore() {
  // function to display the current score
  playerCount = document.getElementById("player_count");
  computerCount = document.getElementById("computer_count");
  playerCount.className = '';
  playerCount.classList.add("score" + playerPoints);
  computerCount.className = '';
  computerCount.classList.add("score" + computerPoints);

  // playerCount.innerHTML = "<img src='img/" + playerPoints + ".jpg' alt='" + playerPoints + "'>";
  // computerCount.innerHTML = "<img src='img/" + computerPoints + ".jpg' alt='" + computerPoints + "'>";
}

function buildComputerCard() {
  // function to display the current card of the computer
  computerCardDiv.classList.toggle("flip");

  var computerCardBack = document.getElementById("computerCardBack");
  computerCardBack.style.height = $(playercard).height() + "px";
  computerCardBack.style.background = "url('img/h_" + currentComputerCard[0].replace("\'", "") + ".jpg') repeat center center";
  var computercardBackHeader=document.getElementById("computercardBackHeader");
  computercardBackHeader.innerHTML =  currentComputerCard[0].toUpperCase();


  setTimeout(function(){
    //wait with card content so as not to display it before card is flipped back

    // Change heading of computer card
    var computercardHeader = document.getElementById("computercard_header");
    computercardHeader.innerHTML = "<h3 class='mx-3 my-2 card-title'>" +
                                   currentComputerCard[0] + "</h3>";

    var computercardFront = document.getElementById("computerCardFront");
    computercardFront.style.background = "url('img/a_" + currentComputerCard[0].replace("\'", "") + ".jpg') repeat center center";

    // Fill in computer card by looping through card-array
    var computercardCategories = document
      .getElementById("computercard_categories");
    computercardCategories.innerHTML = "";
    for (i = 0; i < chosenCategories.length; i+=1) {

      var currentCategory = chosenCategories[i];

      // make new row
      var newRow = document.createElement("div");
      newRow.id = "computer_category_row" + currentCategory;
      newRow.classList.add("list-group-item", "d-flex",
                           "w-100", "justify-content-between", "py-2");
      document.getElementById("computercard_categories").appendChild(newRow);

      // category
      var newCat = document.createElement("h6");
      var newCatContent = document.createTextNode(data_header[currentCategory]);
      newCat.appendChild(newCatContent);
      document.getElementById("computer_category_row" + currentCategory)
        .appendChild(newCat);

      // show value
      var newVal = document.createElement("span");
      var currentValue = formatNumbers(currentComputerCard[currentCategory]);
      var newValContent = document
        .createTextNode(currentValue + data_suffix[currentCategory]);
      newVal.appendChild(newValContent);
      newVal.id = "computercardCategory" + currentCategory;
      newVal.classList.add("category_nolink");
      document.getElementById("computer_category_row" + currentCategory)
        .appendChild(newVal);
    }
  }, 500);
}


// functions needed when page loads
$(document).ready(function() {

  startGameButton = document.getElementById("startGame");
  startGameButton.addEventListener("click", initGame);

  startTurnButton = document.getElementById("startTurn");
  startTurnButton.addEventListener("click", initTurn);

  newGameButton = document.getElementById("newGame");
  newGameButton.addEventListener("click", initNewGame);

  showSummaryButton = document.getElementById("showSummary");
  showSummaryButton.addEventListener("click", initSummary);

  waitingButton = document.getElementById("waiting");

  infoLine = document.getElementById("info_line");
  summaryList = document.getElementById("summary_list");
  gameProgressBar = document.getElementById("gameProgress");

  computerCardDiv = document.getElementById("computercard");


  // Players turn: player chooses category
  $(document).on("click", ".category_link", function(event) {

    if (stateOfGame == 5) {

      var computerCardDiv = document.getElementById("computercard");
      var firstComputerCard = currentComputerCard;
      var firstPlayerCard = currentPlayerCard;

      // turn over computer card
      computerCardDiv.classList.toggle("flip");

      // log the chosen category
      var categoryID = parseInt(this.id.slice(-1));
      if (categoryID == 0) {
        categoryID = 10;
      }
      var chosenPlayerCategory = document
        .getElementById("playercardCategory" + categoryID);
      var chosenComputerCategory = document
        .getElementById("computercardCategory" + categoryID);

      // Prepare summary entry

      var newSummaryLine = document.createElement("div");
      newSummaryLine.classList.add("d-flex", "w-100", "border-top", "py-1");


      var newSummaryPlayer = document.createElement("div");
      newSummaryPlayer.classList.add("text-right", "summary_left")
      newSummaryPlayer.innerHTML = currentPlayerCard[0] + "<br>" +
        formatNumbers(currentPlayerCard[categoryID]) + data_suffix[categoryID];

      var newSummaryCat = document.createElement("div");
      newSummaryCat.classList
        .add("text-center", "d-inline-block", "px-1", "text-secondary", "summary_center")
      newSummaryCat.innerHTML = "<i>" + summary_header[categoryID] + "</i>";

      var newSummaryComputer = document.createElement("div");
      newSummaryComputer.classList.add("text-left", "summary_right")
      newSummaryComputer.innerHTML = currentComputerCard[0] + "<br>" +
        formatNumbers(currentComputerCard[categoryID]) +data_suffix[categoryID];

      if (data_comparison[categoryID] == "larger") {
        if (firstPlayerCard[categoryID] > firstComputerCard[categoryID]) {
          newSummaryPlayer.classList.add("winner", "text-success");
          newSummaryComputer.classList.add("text-danger");
        } else if (firstPlayerCard[categoryID] < firstComputerCard[categoryID]){
          newSummaryComputer.classList.add("winner", "text-success");
          newSummaryPlayer.classList.add("text-danger");
        }
      } else {
        if (firstPlayerCard[categoryID] < firstComputerCard[categoryID]) {
          newSummaryPlayer.classList.add("winner", "text-success");
          newSummaryComputer.classList.add("text-danger");
        } else if (firstPlayerCard[categoryID] > firstComputerCard[categoryID]){
          newSummaryComputer.classList.add("winner", "text-success");
          newSummaryPlayer.classList.add("text-danger");
        }
      }

      newSummaryLine.appendChild(newSummaryPlayer);
      newSummaryLine.appendChild(newSummaryCat);
      newSummaryLine.appendChild(newSummaryComputer);

      summaryList.appendChild(newSummaryLine);

      // Prepare progress-bar

      var progressBarWin = document.createElement("div");
      progressBarWin.classList.add("progress-bar", "bg-success");
      progressBarWin.style = progressBarPercentage;
      progressBarWin.role = "progressbar";

      var progressBarLose = document.createElement("div");
      progressBarLose.classList.add("progress-bar", "bg-danger");
      progressBarLose.style = progressBarPercentage;
      progressBarLose.role = "progressbar";

      var progressBarDraw = document.createElement("div");
      progressBarDraw.classList.add("progress-bar", "bg-warning");
      progressBarDraw.style = progressBarPercentage;
      progressBarDraw.role = "progressbar";

      // compare values, change message accordingly, update score

      if (data_comparison[categoryID] == "larger") {
        if (firstPlayerCard[categoryID] > firstComputerCard[categoryID]) {
          chosenPlayerCategory.classList.add("text-success");
          chosenComputerCategory.classList.add("text-danger");
          infoLine.classList.remove("text-light");
          infoLine.classList.add("text-success");
          infoLine.innerHTML = "<h4 class='mb-1'>" + turnWonMsg + "</h4>";
          gameProgressBar.appendChild(progressBarWin);
          playerPoints += 1;
        } else if (firstPlayerCard[categoryID] < firstComputerCard[categoryID]){
          chosenPlayerCategory.classList.add("text-danger");
          chosenComputerCategory.classList.add("text-success");
          infoLine.classList.remove("text-light");
          infoLine.classList.add("text-danger");
          infoLine.innerHTML = "<h4 class='mb-1'>" + turnLostMsg + "</h4>";
          gameProgressBar.appendChild(progressBarLose);
          computerPoints += 1;
        } else {
          chosenPlayerCategory.classList.add("text-warning");
          chosenComputerCategory.classList.add("text-warning");
          infoLine.classList.remove("text-light");
          infoLine.classList.add("text-warning");
          infoLine.innerHTML = "<h4 class='mb-1'>" + turnDrawMsg + "</h4>";
          gameProgressBar.appendChild(progressBarDraw);
        }
      } else {
        if (firstPlayerCard[categoryID] < firstComputerCard[categoryID]) {
          chosenPlayerCategory.classList.add("text-success");
          chosenComputerCategory.classList.add("text-danger");
          infoLine.classList.remove("text-light");
          infoLine.classList.add("text-success");
          infoLine.innerHTML = "<h4 class='mb-1'>" + turnWonMsg + "</h4>";
          playerPoints += 1;
          gameProgressBar.appendChild(progressBarWin);
        } else if (firstPlayerCard[categoryID] > firstComputerCard[categoryID]){
          chosenPlayerCategory.classList.add("text-danger");
          chosenComputerCategory.classList.add("text-success");
          infoLine.classList.remove("text-light");
          infoLine.classList.add("text-danger");
          gameProgressBar.appendChild(progressBarLose);
          infoLine.innerHTML = "<h4 class='mb-1'>" + turnLostMsg + "</h4>";
          computerPoints += 1;
        } else {
          chosenPlayerCategory.classList.add("text-warning");
          chosenComputerCategory.classList.add("text-warning");
          infoLine.classList.remove("text-light");
          infoLine.classList.add("text-warning");
          infoLine.innerHTML = "<h4 class='mb-1'>" + turnDrawMsg + "</h4>";
          gameProgressBar.appendChild(progressBarDraw);
        }
      }

      updateScore();


      //remove current card from decks

      playerCards.shift();
      computerCards.shift();
      currentRound += 1;

      // Proceed: Next card, if cards left or summary, if no cards left

      if (playerCards.length > 0) {
        updateButtons(4);
      } else {
        updateButtons(6);
        infoLine.classList.remove("text-success");
        infoLine.classList.remove("text-warning");
        infoLine.classList.remove("text-danger");
        infoLine.classList.add("text-light");
        infoLine.innerHTML = "<h4 class='mb-1'>" + gameOverMsg + "</h4>";
      }

    }

  } );

  // Show gameMode-Chooser on load - GAME IS STARTED HERE
  updateButtons(1);

});


// initiate new game after a game is finished
function initNewGame() {
  // updateButtons(1);
  window.location.reload()
}


function initGame() {
  //Function to initiate the actual game

  // Shuffle and deal cards
  shuffleCards();
  buildDecks();

  // Show cards and beginn game
  updateButtons(3);

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
  updateButtons(7)

  var summaryHeadline = document.getElementById("summaryHeadline");

  if (playerPoints > computerPoints) {
    summaryHeadline.innerHTML = "<h3 class='text-success'>" + playerPoints + ":" +
     computerPoints + " - " + gameWonMsg + "</h3>";
  }
  if (playerPoints < computerPoints) {
    summaryHeadline.innerHTML = "<h3 class='text-danger'>" + playerPoints + ":" +
     computerPoints + " - " + gameLostMsg + "</h3>";
  }
  if (playerPoints == computerPoints) {
    summaryHeadline.innerHTML = "<h3 class='text-warning'>" + playerPoints + ":" +
     computerPoints + " - " + gameDrawMsg + "</h3>";
  }
}

function initTurn() {
  //Function to initiate the next turn by showing the topmost player card


  updateButtons(5);

  // choose first card from each deck
  currentPlayerCard = playerCards[0];
  currentComputerCard = computerCards[0];

  // Change heading of player card
  var playercardHeader = document.getElementById("playercard_header");
  // playercardHeader.innerHTML = "<h3 class="m-3 card-title"> <img
  var playercard = document.getElementById("playercard");
  playercard.style.background = "url('img/a_" + currentPlayerCard[0].replace("\'", "") + ".jpg') repeat center center";
  // align-middle img-thumbnail">" + currentPlayerCard[0] + "</h3>";
  playercardHeader.innerHTML = "<h3 class='mx-3 my-2 card-title'>" +
    currentPlayerCard[0] + "</h3>";

  // Fill in player card by looping through card-array
  var playercardCategories = document.getElementById("playercard_categories");
  playercardCategories.innerHTML = "";
  for (i = 0; i < chosenCategories.length; i+=1) {

    var currentCategory = chosenCategories[i];

    // make new row
    var newRow = document.createElement("div");
    newRow.id = "player_category_row" + currentCategory;
    newRow.classList
      .add("list-group-item", "py-2");
    document.getElementById("playercard_categories").appendChild(newRow);

    // category
    var newCat = document.createElement("h6");
    var newCatContent = document.createTextNode(data_header[currentCategory]);
    newCat.appendChild(newCatContent);

    // value


    var newVal = document.createElement("h6");
    var currentValue = formatNumbers(currentPlayerCard[currentCategory]);
    var newValContent = document
      .createTextNode(currentValue + data_suffix[currentCategory]);
    newVal.appendChild(newValContent);

    // link whole row
    var newRowLink = document.createElement("a");
    newRowLink.id = "playercardCategory" + currentCategory;
    newRowLink.href = "#";
    newRowLink.classList
      .add("category_link", "d-flex", "w-100", "justify-content-between");
    newRowLink.appendChild(newCat);
    newRowLink.appendChild(newVal);
    document.getElementById("player_category_row" + currentCategory)
      .appendChild(newRowLink);

  }

  buildComputerCard();

}
