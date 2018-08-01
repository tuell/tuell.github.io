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

var data_header = ['Country', 'CO2 footprint', 'Milk price', 'Press freedom ranking', 'Internet coverage', 'Life expectancy', 'Women suffrage'];
var data_suffix = ['', ' t/capita', ' USD', '', '%', ' yrs', ''];
var data_comparison = ['', 'larger', 'larger', 'larger', 'smaller', 'smaller', 'larger'];
var afg = ['Afghanistan', 0.02, 0.98, 118, 7, 63.67, 1963];
var ago = ['Angola', 1.04, 2.46, 121, 23, 61.55, 1975];
var alb = ['Albania', 1.54, 1.21, 75, 63, 78.35, 1920];
var arg = ['Argentina', 4.49, 1.21, 52, 69, 76.58, 1947];
var arm = ['Armenia', 2.3, 0.9, 80, 50, 74.62, 1917];
var aus = ['Australia', 16.92, 1.39, 19, 85, 82.5, 1962];
var aut = ['Austria', 9, 1.29, 11, 81, 80.89, 1919];
var aze = ['Azerbaijan', 3.63, 1.55, 163, 61, 72.03, 1918];
var bdi = ['Burundi', 0.26, 1.55, 159, 2, 57.48, 1961];
var bel = ['Belgium', 10.29, 1.22, 7, 89, 80.99, 1948];
var bgd = ['Bangladesh', 0.34, 0.78, 146, 13, 72.49, 1971];
var bgr = ['Bulgaria', 6.5, 1.32, 111, 59, 74.61, 1944];
var bhr = ['Bahrain', 21.74, 1.38, 166, 92, 76.9, 2002];
var bih = ['Bosnia and Herzegovina', 7.19, 1.02, 62, 62, 76.91, 1945];
var blr = ['Belarus', 8.45, 0.9, 155, 61, 73.83, 1919];
var blz = ['Belize', 2.93, 1.42, 47, 45, 70.38, 1954];
var bol = ['Bolivia', 1.65, 0.79, 110, 41, 69.13, 1952];
var bra = ['Brazil', 2.56, 1.03, 102, 66, 75.51, 1932];
var btn = ['Bhutan', 0.92, 0.9, 94, 37, 70.2, 1953];
var bwa = ['Botswana', 2.14, 1.11, 48, 21, 66.8, 1965];
var can = ['Canada', 15.67, 1.8, 18, 89, 82.3, 1960];
var che = ['Switzerland', 5.78, 1.6, 5, 87, 82.9, 1971];
var chl = ['Chile', 5.47, 1.19, 38, 78, 79.52, 1949];
var chn = ['China', 7.42, 2.09, 176, 52, 76.25, 1947];
var cmr = ['Cameroon', 0.32, 2.41, 129, 18, 58.07, 1946];
var cod = ['DR Congo', 0.05, 2.5, 154, 4, 59.62, 1967];
var col = ['Colombia', 1.78, 1.11, 130, 57, 74.38, 1954];
var cpv = ['Cape Verde', 0.34, 1.26, 29, 43, 72.8, 1975];
var cri = ['Costa Rica', 1.52, 1.36, 10, 56, 79.83, 1949];
var cub = ['Cuba', 3.48, 1.12, 172, 32, 79.74, 1934];
var cyp = ['Cyprus', 6.59, 1.91, 25, 72, 80.51, 1960];
var cze = ['Czech Republic', 10.66, 0.87, 34, 88, 78.33, 1920];
var deu = ['Germany', 10.21, 0.98, 15, 88, 80.64, 1918];
var dji = ['Djibouti', 2.4, 2.11, 173, 12, 62.47, 1946];
var dnk = ['Denmark', 7.39, 1.21, 9, 96, 80.7, 1915];
var dom = ['Dominican Republic', 2.26, 1.25, 59, 52, 73.86, 1942];
var dza = ['Algeria', 3.38, 0.53, 136, 20, 76.08, 1962];
var ecu = ['Ecuador', 2.25, 0.96, 92, 43, 76.33, 1967];
var egy = ['Egypt', 2.6, 1.08, 161, 33, 71.48, 1956];
var esp = ['Spain', 5.27, 1.08, 31, 82, 82.83, 1931];
var est = ['Estonia', 15.75, 0.86, 12, 91, 77.74, 1917];
var eth = ['Ethiopia', 0.08, 0.92, 150, 4, 65.48, 1955];
var fin = ['Finland', 10.57, 1.38, 4, 93, 81.78, 1906];
var fji = ['Fiji', 1.48, 1.7, 57, 47, 70.27, 1963];
var fra = ['France', 5.73, 1.31, 33, 86, 82.27, 1944];
var gab = ['Gabon', 3.54, 1.91, 108, 10, 66.11, 1956];
var gbr = ['United Kingdom', 7.53, 1.54, 40, 93, 80.96, 1928];
var geo = ['Georgia', 1.58, 1.46, 61, 53, 73.26, 1918];
var gha = ['Ghana', 0.48, 2.68, 23, 28, 62.74, 1954];
var gmb = ['Gambia', 0.16, 1.41, 122, 17, 61.19, 1960];
var grc = ['Greece', 7.11, 1.65, 74, 65, 81.04, 1952];
var gtm = ['Guatemala', 0.89, 1.51, 116, 27, 73.41, 1965];
var guy = ['Guyana', 2.28, 1.66, 55, 40, 66.65, 1953];
var hkg = ['Hong Kong', 7.23, 2.74, 70, 74, 84.23, 1949];
var hnd = ['Honduras', 1.03, 1.05, 141, 22, 73.58, 1955];
var hrv = ['Croatia', 5.37, 1.09, 69, 74, 78.02, 1945];
var hti = ['Haiti', 0.19, 2.32, 60, 12, 63.33, 1950];
var hun = ['Hungary', 4.72, 0.94, 73, 80, 75.57, 1945];
var idn = ['Indonesia', 1.95, 1.18, 124, 20, 69.19, 1945];
var ind = ['India', 1.65, 0.58, 138, 35, 68.56, 1947];
var irl = ['Ireland', 8.56, 1.45, 16, 81, 81.61, 1922];
var irn = ['Iran', 5.26, 0.97, 164, 49, 75.95, 1963];
var irq = ['Iraq', 5.45, 1.29, 160, 13, 69.86, 1980];
var isl = ['Iceland', 14.17, 1.15, 13, 100, 82.47, 1915];
var isr = ['Israel', 9.02, 1.72, 87, 73, 82.41, 1948];
var ita = ['Italy', 6.39, 1.72, 46, 66, 82.54, 1945];
var jam = ['Jamaica', 3.62, 2.04, 6, 43, 75.97, 1944];
var jor = ['Jordan', 3.47, 1.48, 132, 46, 74.33, 1974];
var jpn = ['Japan', 10.7, 1.81, 67, 91, 83.98, 1947];
var kaz = ['Kazakhstan', 15.39, 1.2, 158, 56, 72.3, 1924];
var ken = ['Kenya', 0.33, 1.01, 96, 45, 67.03, 1963];
var kgz = ['Kyrgyzstan', 1.45, 0.88, 98, 34, 70.95, 1918];
var khm = ['Cambodia', 0.1, 1.65, 142, 11, 68.98, 1955];
var kor = ['Korea', 12.72, 2.21, 43, 86, 82.02, 1948];
var kwt = ['Kuwait', 28.14, 1.39, 105, 80, 74.69, 1985];
var lbn = ['Lebanon', 3.79, 1.88, 100, 76, 79.58, 1952];
var lbr = ['Liberia', 0.15, 1.95, 89, 9, 62.51, 1946];
var lby = ['Libya', 6.07, 1.24, 162, 21, 71.93, 1951];
var lka = ['Sri Lanka', 0.86, 1.24, 131, 29, 75.28, 1931];
var lso = ['Lesotho', 0.11, 1.76, 68, 21, 54.17, 1965];
var ltu = ['Lithuania', 5.92, 1.11, 36, 77, 74.32, 1918];
var lux = ['Luxembourg', 20.42, 1.62, 17, 95, 82.29, 1919];
var lva = ['Latvia', 3.83, 1.27, 24, 76, 74.53, 1917];
var mar = ['Morocco', 2.12, 0.82, 135, 58, 75.82, 1963];
var mda = ['Moldova', 2, 0.66, 81, 48, 71.61, 1940];
var mdg = ['Madagascar', 0.11, 1.62, 54, 4, 65.93, 1959];
var mdv = ['Maldives', 2.11, 1.71, 120, 54, 77.34, 1932];
var mex = ['Mexico', 3.88, 1.04, 147, 45, 77.12, 1953];
var mkd = ['Macedonia', 4.87, 1.09, 109, 69, 75.7, 1945];
var mli = ['Mali', 0.05, 1.5, 115, 12, 57.97, 1956];
var mlt = ['Malta', 3.69, 1.22, 65, 80, 81.8, 1947];
var mmr = ['Myanmar', 0.27, 1.49, 137, 3, 66.61, 1922];
var mng = ['Mongolia', 5.02, 1.17, 71, 36, 69.29, 1924];
var moz = ['Mozambique', 0.19, 1.97, 99, 6, 58.31, 1975];
var mus = ['Mauritius', 2.58, 1.23, 56, 43, 74.39, 1956];
var mwi = ['Malawi', 0.06, 1.49, 64, 7, 63.22, 1961];
var mys = ['Malaysia', 7.64, 1.7, 145, 69, 75.3, 1955];
var nam = ['Namibia', 1.81, 1.22, 26, 16, 64.39, 1989];
var nga = ['Nigeria', 0.46, 2.55, 119, 46, 53.43, 1958];
var nic = ['Nicaragua', 0.83, 1.58, 90, 19, 75.4, 1955];
var nld = ['Netherlands', 9.66, 1.21, 3, 94, 81.51, 1919];
var nor = ['Norway', 8.5, 2.4, 1, 98, 82.51, 1913];
var npl = ['Nepal', 0.16, 0.5, 106, 17, 70.25, 1951];
var nzl = ['New Zealand', 7.95, 2.02, 8, 89, 81.61, 1893];
var omn = ['Oman', 13.79, 1.66, 127, 71, 77.03, 2003];
var pak = ['Pakistan', 0.87, 0.76, 139, 18, 66.48, 1947];
var pan = ['Panama', 3.56, 1.29, 91, 45, 78, 1946];
var per = ['Peru', 1.57, 1.33, 88, 41, 74.98, 1955];
var phl = ['Philippines', 1.04, 1.6, 133, 44, 69.09, 1937];
var png = ['Papua New Guinea', 0.71, 3.46, 53, 12, 65.54, 1964];
var pol = ['Poland', 8.47, 0.83, 58, 72, 77.45, 1918];
var prt = ['Portugal', 4.6, 0.83, 14, 67, 81.13, 1976];
var pry = ['Paraguay', 0.8, 0.91, 107, 47, 73.12, 1961];
var rou = ['Romania', 3.68, 1.21, 44, 58, 75.01, 1946];
var rus = ['Russia', 12.63, 1.11, 148, 71, 71.59, 1917];
var rwa = ['Rwanda', 0.07, 1.21, 156, 12, 67.13, 1961];
var sdn = ['Sudan', 0.36, 0.82, 174, 26, 64.49, 1964];
var sen = ['Senegal', 0.56, 1.99, 50, 23, 67.15, 1945];
var sgp = ['Singapore', 8.42, 2.25, 151, 83, 82.8, 1947];
var slv = ['El Salvador', 1.17, 1.28, 66, 38, 73.51, 1950];
var som = ['Somalia', 0.07, 1.5, 168, 2, 56.29, 1956];
var sur = ['Suriname', 3.05, 1.63, 21, 42, 71.41, 1948];
var svk = ['Slovakia', 7.13, 1.01, 27, 83, 76.56, 1920];
var svn = ['Slovenia', 8.07, 1.14, 32, 72, 80.78, 1945];
var swe = ['Sweden', 5.04, 1.38, 2, 93, 82.2, 1919];
var swz = ['Swaziland', 0.82, 0.83, 152, 28, 57.75, 1968];
var syc = ['Seychelles', 10.19, 2, 85, 58, 74.31, 1948];
var syr = ['Syria', 2.21, 0.93, 177, 30, 70.31, 1949];
var tcd = ['Chad', 0.01, 1.95, 123, 3, 52.9, 1958];
var tha = ['Thailand', 3.91, 1.4, 140, 43, 75.3, 1932];
var tjk = ['Tajikistan', 0.94, 0.78, 149, 19, 71.05, 1924];
var tkm = ['Turkmenistan', 11.08, 1.15, 178, 15, 67.84, 1924];
var tto = ['Trinidad and Tobago', 29.75, 1.88, 39, 69, 70.67, 1925];
var tun = ['Tunisia', 2.57, 0.7, 97, 48, 75.73, 1957];
var tur = ['Turkey', 4.41, 0.91, 157, 58, 75.76, 1934];
var uga = ['Uganda', 0.05, 1.17, 117, 19, 59.89, 1962];
var ukr = ['Ukraine', 6.71, 0.93, 101, 44, 71.48, 1919];
var ury = ['Uruguay', 1.94, 0.84, 20, 65, 77.49, 1927];
var usa = ['United States', 16.55, 0.99, 45, 89, 78.69, 1920];
var uzb = ['Uzbekistan', 3.91, 0.9, 165, 51, 71.31, 1938];
var ven = ['Venezuela', 5.96, 1.97, 143, 58, 74.55, 1946];
var wsm = ['Samoa', 1, 1.96, 22, 29, 75.01, 1990];
var yem = ['Yemen', 0.94, 1.52, 167, 25, 64.95, 1970];
var zaf = ['South Africa', 6.25, 0.95, 28, 52, 62.77, 1994];
var zmb = ['Zambia', 0.26, 1.37, 113, 19, 61.87, 1962];
var zwe = ['Zimbabwe', 0.91, 1.55, 126, 21, 61.16, 1919];


var countries;
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
var turnWaitMsg = "Kategorie wählen";
var gameOverMsg = "Spiel vorbei";
var gameWaitMsg = "Neues Spiel beginnen?";


function shuffleCards() {
  //Shuffles the array specified in the beginning, deals cards to player and computer
  countries = [afg,ago,alb,arg,arm,aus,aut,aze,bdi,bel,bgd,bgr,bhr,bih,blr,blz,bol,bra,btn,bwa,can,che,chl,
    chn,cmr,cod,col,cpv,cri,cub,cyp,cze,deu,dji,dnk,dom,dza,ecu,egy,esp,est,eth,fin,fji,fra,gab,gbr,geo,gha,
    gmb,grc,gtm,guy,hkg,hnd,hrv,hti,hun,idn,ind,irl,irn,irq,isl,isr,ita,jam,jor,jpn,kaz,ken,kgz,khm,kor,kwt,
    lbn,lbr,lby,lka,lso,ltu,lux,lva,mar,mda,mdg,mdv,mex,mkd,mli,mlt,mmr,mng,moz,mus,mwi,mys,nam,nga,nic,nld,
    nor,npl,nzl,omn,pak,pan,per,phl,png,pol,prt,pry,rou,rus,rwa,sdn,sen,sgp,slv,som,sur,svk,svn,swe,swz,syc,
    syr,tcd,tha,tjk,tkm,tto,tun,tur,uga,ukr,ury,usa,uzb,ven,wsm,yem,zaf,zmb,zwe];
  var currentIndex = countries.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = countries[currentIndex];
    countries[currentIndex] = countries[randomIndex];
    countries[randomIndex] = temporaryValue;
  }

  // Deal cards: 10 each
  playerCards = countries.slice(0, 10);
  computerCards = countries.slice(10, 20);
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
  computercardBackHeader.innerHTML =  "<img src='img/flags/" + currentComputerCard[0] + ".svg' class='flag mr-2 align-middle img-thumbnail'>" + currentComputerCard[0];

  $('#someDiv').height();

  // Change heading of computer card
  var computercardHeader = document.getElementById("computercard_header");
  computercardHeader.innerHTML = "<h3 class='m-3 card-title'> <img src='img/flags/" + currentComputerCard[0] + ".svg' class='flag mr-2 align-middle img-thumbnail'>" + currentComputerCard[0] + "</h3>";

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
  playercardHeader.innerHTML = "<h3 class='m-3 card-title'> <img src='img/flags/" + currentPlayerCard[0] + ".svg' class='flag mr-2 align-middle img-thumbnail'>" + currentPlayerCard[0] + "</h3>";

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
