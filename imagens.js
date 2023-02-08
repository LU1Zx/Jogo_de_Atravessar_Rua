let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;

let somTrilha;
let somColisao;
let somPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro1 = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  imagemDosCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1]
  
  
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}

function mostraEstrada(){
    background(imagemDaEstrada);
}
