function calculeishon(){

  var nombre = document.getElementById("nombreCliente").value;
  var millas = parseInt(document.getElementById("kilometros").value);
  var estadia = parseInt(document.getElementById("diasDeEstadia").value);
  var calculo = millas * 35;

  if(nombre=="" || isNaN(millas) || isNaN(estadia)){
    alert("Ingrese todos los datos por favor.");
  } else if(millas > 1000 && estadia > 7){
    calculo = calculo - (calculo*0.3);
    alert(nombre + " el tiquete de tu avión tiene un costo de: $" + calculo + "\nLa aerolínea te hace un descuento del 30% en tu tíquete por la cantidad de kilómetros que vas a recorrer y tus días de estadía.\n¡Disfrútalo!");
  } else{
    alert(nombre + " el tiquete de tu avión tiene un costo de: $" + calculo);
  }

}
document.getElementById("btnCalcular").onclick=function(){
  calculeishon();
}
