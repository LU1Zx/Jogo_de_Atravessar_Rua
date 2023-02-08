//Posição Carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 100, 150, 211, 265, 320];
let velocidadeCarros = [6, 5, 4, 3, 2, 1];
let compCarro = 50;
let altCarro = 40;


 function mostraCarro(){
   for(let i = 0; i < imagemDosCarros.length; i++){
    image(imagemDosCarros[i], xCarros[i], yCarros[i], compCarro, altCarro);
 }
 }
   
 function movimentaCarro(){
   for(let i = 0; i < imagemDosCarros.length; i++){
   xCarros[i]-= velocidadeCarros[i];
   }
 }

 function loopCarro(){
   for(let i = 0; i < imagemDosCarros.length; i++)
   if (passouDaBorda(xCarros[i])){
     xCarros[i] = 600;
   }
 }

 function passouDaBorda(xCarros){
   return xCarros < -50;
}


 
 

