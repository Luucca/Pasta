const gameOver = document.getElementById("gameOver");
const playGame = document.getElementById("game");
const score = document.getElementById("score");
const restartGame = document.getElementById("restart");
// adicionar física ao jogo

  let gameoverPlay = false;
  let shipX = 1, shipY = 1;
  let projetilX = 1, projetilY = 1;
  let velocidadeX = 1, velocidadeY = 1;
  let pacoteX, pacoteY;
  let scoreGame = 0;
  window.addEventListener("keyup", shipDirection = (i) => {
    if(i.key == "ArrowDown"){
      shipX = velocidadeX = velocidadeX;
      shipY = velocidadeY = velocidadeY + 1;
    }else if(i.key == "ArrowUp"){
      shipX = velocidadeX = velocidadeX;
      shipY = velocidadeY = velocidadeY - 1;
    }else if(i.key == "ArrowLeft"){
      shipX = velocidadeX = velocidadeX - 1;
      shipY = velocidadeY = velocidadeY;
    }else if(i.key == "ArrowRight"){
      shipX = velocidadeX = velocidadeX + 1;
      shipY = velocidadeY = velocidadeY;
    }
  });
       
         
  
setInterval(initGame = () => {
  var shipProjection = `<div id="ship" style="grid-area: ${shipY} / ${shipX} "></div>`
  playGame.innerHTML = shipProjection;
  console.log(shipX);
  console.log(shipY)
}, 200);
