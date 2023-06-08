// ***VARIABLER***VARIABLER***VARIABLER***VARIABLER***VARIABLER***VARIABLER*** //
// ***VARIABLER***VARIABLER***VARIABLER***VARIABLER***VARIABLER***VARIABLER*** //

// GAME SCREENS
const startScreen = document.querySelector("#start_game");
const startGameScreen = document.querySelector("#start_game");
const gameOverScreen = document.querySelector("#game_over");
const gameCompleteScreen = document.querySelector("#game_complete");
const infoScreen = document.querySelector("#info_screen");
const gameElements = document.querySelector("#game_elements");
// SPACESHIP
const spaceshipContainer = document.querySelector("#spaceship_container");
const spaceship = document.querySelector("#spaceship");
// METEORITES
const meteoriteContainers = Array.from(document.getElementsByClassName("meteorite_container"));
const meteorites = Array.from(document.querySelectorAll("[data-meteorite]"));
// SOUNDS
const explosion = document.querySelector('#explosion');
// KNAPPER
const playBtn = document.querySelector("#play_btn");
const gameOverBtn = document.querySelector(".game_over_btn");
const gameCompleteBtn = document.querySelector(".game_complete_btn");
const reloadBtn = document.querySelector('#reloadBtn');
const infoBtn = document.querySelector('#info_btn');
const closeInfoBtn = document.querySelector('#close_info_btn');

// SCOREBOARDS
let points;
let ammo;
let winPoints = 20;
let reloadAmmo = 5;
let myPoints = document.querySelector("#myPoints");
let myAmmo = document.querySelector("#myAmmo");

//***EVENTLISTENERS***EVENTLISTENERS***EVENTLISTENERS***EVENTLISTENERS***//
//***EVENTLISTENERS***EVENTLISTENERS***EVENTLISTENERS***EVENTLISTENERS***//

spaceshipContainer.addEventListener("mousedown", increaseAmmo);
playBtn.addEventListener("click", startGame);
infoBtn.addEventListener("click", openInfoScreen);
closeInfoBtn.addEventListener("click", closeInfoScreen)
gameOverBtn.addEventListener("click", startGame);
gameCompleteBtn.addEventListener("click", startGame);
gameElements.addEventListener("mousedown", clickMeteorite);

function openInfoScreen() {
  infoScreen.classList.remove('hide');
}
function closeInfoScreen() {
  infoScreen.classList.add('hide');
}


//***START_GAME***START_GAME***START_GAME***START_GAME***START_GAME***START_GAME***//
//***START_GAME***START_GAME***START_GAME***START_GAME***START_GAME***START_GAME***//

function startGame() {
  meteoriteContainers.forEach((e) => {
    e.addEventListener("animationend", gameOver);
  });
  hideScreens();
  reloadScores();
  reloadMeteorites();
}
function reloadScores() {
  removeReloadMsg();
  points = 0;
  ammo = 5;
  myPoints.textContent = points;
  myAmmo.textContent = ammo;
}
function randomNumber(rand) {
  return Math.floor(Math.random() * rand) + 1;
}
function reloadMeteorites() {
  meteorites.forEach((e) => {
    e.classList = "";
    e.classList.add("wiggle");
  });
  meteoriteContainers.forEach((e) => {
    e.classList = "";
    let rand = randomNumber(7);
    e.classList.add('pos' + rand)
    e.offsetHeight;
    e.classList.add("attack");
  });
}

//***POINTS_&_AMMO***POINTS_&_AMMO***POINTS_&_AMMO***POINTS_&_AMMO***POINTS_&_AMMO***//
//***POINTS_&_AMMO***POINTS_&_AMMO***POINTS_&_AMMO***POINTS_&_AMMO***POINTS_&_AMMO***//

// DECREASE AMMO
function decreaseAmmo() {
  if (ammo > 0) {
    ammo--;
    myAmmo.textContent = ammo;
  }
}
// INCREASE POINTS
function increasePoints() {
  if ((points < 20) & (ammo > 0)) {
    points++;
    myPoints.textContent = points;
  }
}
// SHOOT METEORITE
function updateScores() {
  // console.log("updateScores");
  increasePoints();
  decreaseAmmo();
  if (ammo == 0) {
    addReloadMsg();
  }
  if (ammo > 0) {
    removeReloadMsg();
  }
}
// RELOAD ALERTS
function addReloadMsg() {
  myAmmo.classList.add('textBlink');
  reloadBtn.classList.remove('hide');
  reloadBtn.classList.add('blink1');
}
function removeReloadMsg() {
  myAmmo.classList.remove('textBlink');
  reloadBtn.classList.add('hide');
  reloadBtn.classList.remove('blink1');
}
// RELOAD MISSILES
function increaseAmmo() {
  // console.log("increaseAmmo");
  if (ammo < reloadAmmo) {
    ammo++;
    myAmmo.textContent = ammo;
  }
  if (ammo > 0) {
    removeReloadMsg();
  }
}

//***GAME_SCREENS***GAME_SCREENS***GAME_SCREENS***GAME_SCREENS***GAME_SCREENS***//
//***GAME_SCREENS***GAME_SCREENS***GAME_SCREENS***GAME_SCREENS***GAME_SCREENS***//

// GAME COMPLETE
function gameComplete() {
  gameCompleteScreen.classList.remove("hide");
}
// GAME OVER
// meteoriteContainers.forEach((e) => {
//   e.addEventListener("animationend", gameOver);
// });
function gameOver(event) {
  if (event.animationName == "attack") {
    console.log('gameOver')
    gameOverScreen.classList.remove("hide");
  }
}
// HIDESCREENS
function hideScreens() {
  console.log('hideScreens'); 
  startGameScreen.classList.add("hide");
  gameOverScreen.classList.add("hide");
  gameCompleteScreen.classList.add("hide");
}

//***CLICK_METEORITE***CLICK_METEORITE***CLICK_METEORITE***CLICK_METEORITE***//
//***CLICK_METEORITE***CLICK_METEORITE***CLICK_METEORITE***CLICK_METEORITE***//

/*CLICK METEORITE*/
function clickMeteorite(element) {
  if (!element.target.dataset.meteorite) return;

  if (ammo > 0 & points < winPoints) {

    explosion.currentTime = 0;
    explosion.play();

    element.target.classList.add("fade");
    element.target.classList.remove("wiggle");
    element.target.parentElement.classList.add("freeze");

    setTimeout(() => {
    element.target.classList = "";
    element.target.parentElement.classList = "";

    let rand = randomNumber(7);
    element.target.parentElement.classList.add('pos' + rand)
    element.target.offsetHeight;
    element.target.parentElement.classList.add("attack");
    element.target.classList.add("wiggle");

    }, 1000);
  
  }

  updateScores();

  if (points == winPoints) {

    explosion.play();
    
    meteoriteContainers.forEach((e) => {
      e.classList.add("freeze");
    });
    meteorites.forEach((e) => {
      e.classList.remove("wiggle");
      e.classList.add("fade");
    });

    myPoints.classList.add('blink3');

    setTimeout(function () {
      gameComplete();
    }, 2000);
  }

}









