//Posição Ator
let xAtor = 100;
let yAtor = 370;
let colisao = false;
let pontos = 0;

 
 function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 25, 25);
 }

 function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
     if(keyIsDown(DOWN_ARROW)){
       if(podeMover()){
         yAtor += 3;
       }
    }
 }

 function verificaColisao(){
   for (let i = 0; i < imagemDosCarros.length; i++){
     colisao = collideRectCircle (xCarros[i], yCarros[i], compCarro, altCarro, xAtor, yAtor, 15);
     
     if(colisao){
       somColisao.play();
      voltaPosicaoInicial();
       if(pontosMaiorZero()){
         pontos -=1;
       }
     }
 }
 }


function voltaPosicaoInicial(){
  yAtor = 375;
}



function mostrarPontos(){
  text (pontos, width/10, 27);
  textSize (25);
  textAlign (CENTER);
  fill (255, 240, 60);
}

function meusPontos(){
  if (yAtor < 20){
    pontos +=1;
    somPonto.play();
    voltaPosicaoInicial();
  }
}

function pontosMaiorZero(){
  return pontos > 0;
}

function podeMover(){
  return yAtor < 370;
}
