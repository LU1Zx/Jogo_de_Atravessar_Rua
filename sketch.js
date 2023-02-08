function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  mostraEstrada();
  mostraAtor();
  mostraCarro();
  movimentaAtor();
  movimentaCarro();
  loopCarro();
  verificaColisao();
  mostrarPontos();
  meusPontos();
}
