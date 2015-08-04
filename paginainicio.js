

var operacion = ' ';
var resultado = ' ';

function enviarNumero(calcular) {
		alert("NUMERO INGRESADO:   "+calcular);
		operacion = operacion + calcular;
		inserteTesxto();
}



function enviarSigno(calcular) {
		alert("SIGNO:   "+calcular);
		operacion = operacion + calcular;
		inserteTesxto();
}



function igual() {
		resultado=eval(operacion);
		alert("EL RESULTADO ES:   "+resultado)
	operacionFinal(resultado);
}

function borrar() {
	operacion='';
	resultado='';
	document.getElementById("total").innerHTML="";
}



function insertetesxto(){
	document.getElementById("total").innerHTML=operacion;
}



function operacionFinal(calcular){
	document.getElementById("total").innerHTML=operacion+"="+resultado;
}