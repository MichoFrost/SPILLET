  // GAME SCREENS
  const startScreen = document.querySelector("#start_game");
  const startGameScreen = document.querySelector("#start_game");
  const gameOverScreen = document.querySelector("#game_over");
  const gameCompleteScreen = document.querySelector("#game_complete");
  // SPACESHIP
  const spaceshipContainer = document.querySelector("#spaceship_container");
  const spaceship = document.querySelector("#spaceship");
  // METEORITES
  const meteorite = document.querySelector("#meteorite");
  const meteoriteSmall = document.querySelector("#meteorite_small");
  const meteoriteBig = document.querySelector("#meteorite_big");
  // CONTAINERS
  const meteoriteContainers = Array.from(document.getElementsByClassName("meteorite_container"));
  const meteorites = Array.from(document.getElementsByClassName("meteorite"));
  // GAME ELEMENTS (SCREEN)
  const gameElements = document.querySelector("#game_elements");
  // SCOREBOARDS
  let points = 0;
  let ammo = 5;
  let myPoints = document.querySelector("#myPoints");
  let myAmmo = document.querySelector("#myAmmo");
  myPoints.textContent = points;
  myAmmo.textContent = ammo;
  // PRØV IGEN KNAPPER
  const gameOverBtn = document.querySelector(".game_over_btn");
  const gameCompleteBtn = document.querySelector(".game_complete_btn");
  // gameOverBtn.addEventListener("click", reloadGame);
  // gameCompleteBtn.addEventListener("click", reloadGame);
  
  
  
  
  // START-GAME ON LOAD
  window.addEventListener('load', startGame());
  
  // START-GAME FUNCTION
  function startGame() {
    spaceshipContainer.classList.add("float");
  
    meteoriteContainers.forEach((e) => {
      e.classList.add("attack");
    });
    meteorites.forEach((e) => {
      e.classList.add("wiggle");
    });
  }
  
  startGame();
  
  
  
  
  
  
  
  // RAMMER METEORER PLANETEN?
  // meteoriteContainers.forEach((e) => {
  //   e.addEventListener("animationend", gameOver);
  // });
  // LAD RUMSKIBET MED FLERE MISSILER
  // spaceshipContainer.addEventListener("mousedown", increaseAmmo);
  // function increaseAmmo() {
  //   console.log("increaseAmmo");
  //   if (ammo < 5) {
  //     ammo++;
  //     myAmmo.textContent = ammo;
  //   }
  // }
  
  // GAME OVER
  // function gameOver(event) {
  //   if (event.animationName == "attack") {
  //     gameOverScreen.classList.remove("hide");
  //   }
  // }
  // GAME COMPLETE
  // function gameComplete() {
  //   gameCompleteScreen.classList.remove("hide");
  // }
  // RELOAD GAME
  // function reloadGame() {
  //   hideScreens();
  //   startGame();
  // }
  // HIDESCREENS
  // function hideScreens() {
  //   startGameScreen.classList.add("hide");
  //   gameOverScreen.classList.add("hide");
  //   gameCompleteScreen.classList.add("hide");
  // }
  // function shootMeteorite() {
  //   // console.log("shootMeteorite");
  //   increasePoints();
  //   decreaseAmmo();
  // }
  // function decreaseAmmo() {
  //   if (ammo > 0) {
  //     // console.log("decreaseAmmo");
  //     ammo--;
  //     myAmmo.textContent = ammo;
  //   }
  // }
  // function increasePoints() {
  //   if ((points < 20) & (ammo > 0)) {
  //     // console.log("increasePoints");
  //     points++;
  //     myPoints.textContent = points;
  //   }
  // }
  // function randomNumber(rand) {
  //   return Math.floor(Math.random() * rand) + 1;
  // }
  
  /*CLICK METEORITE*/
  
  // gameElements.addEventListener("mousedown", clickMeteorite);
  
  // function clickMeteorite(el) {
  //   // console.log("checkMeteorite");
  //   if (!el.target.classList.contains("meteorite")) return;
  
  //   shootMeteorite();
  
  //   if (ammo > 0) {
  //     el.target.classList.remove("wiggle");
  //     el.target.parentElement.classList.add("freeze");
  
  //     el.target.classList.add("fade");
  
  //     if (points == 5) {
  //       meteoriteContainers.forEach((e) => {
  //         e.classList.add("freeze");
  //       });
  //       meteorites.forEach((e) => {
  //         e.classList.add("fade");
  //       });
  
  //       setTimeout(function () {
  //         gameComplete();
  //         meteoriteContainers.forEach((e) => {
  //           e.classList.remove("freeze");
  //           el.offsetHeight;
  //         });
  //         meteorites.forEach((e) => {
  //           e.classList.remove("fade");
  //         });
  //       }, 1000);
  
  
  
  //     } else {
  //       setTimeout(function () {           
  //         el.target.parentElement.classList.remove("freeze");
  //         el.target.classList.remove("fade");
  //         el.target.parentElement.classList.remove("attack");
  //         // el.target.parentElement.classList.add("pos8");
  //         el.target.parentElement.offsetHeight;
  //         // el.target.parentElement.offsetWidth;
  //         el.target.parentElement.classList.add("attack");
  //         el.target.classList.add("wiggle");
  //       }, 0);
  //     }
  
  //   }
  // }
  
  
  
  
  