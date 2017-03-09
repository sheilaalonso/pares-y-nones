function paresynones(){
document.write('vamos a jugar a pares y nones. El jugador 1 siempre elige nones y el jugador 2 siempre elige pares <br>');
var tiradaJugador = prompt('Jugador 1 dinos un numero del 1 al 5');
document.write('El jugador 1 ha sacado = '+ tiradaJugador + '<br>');
var tiradaJugador2 = prompt('Jugador2 dinos un numero del 1 al 5');
document.write('El jugador 2 ha sacado = ' + tiradaJugador2);
tiradaJugador = Number(tiradaJugador);
tiradaJugador2 = Number(tiradaJugador2);
var suma = tiradaJugador + tiradaJugador2;
document.write('La suma de jugadas es = ' + suma + '<br>');
if(suma % 2 === 0){
   document.write('El jugador 2 ha ganado <br>');
}else{
  document.write('El jugador 1 ha ganado <br>'); 
}
}