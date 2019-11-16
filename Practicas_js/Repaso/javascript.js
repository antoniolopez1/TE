//Declarar Variables}
var nombre;
var apellido;
var telefono;
var direccion;
var ocupacion;
var ArrayRegistro=[];

function Llamada(){
	//Recoger Datos de input html
nombre= document.getElementById("nombre").value;
apellido=document.getElementById("apellido").value;
telefono=document.getElementById("telefono").value;
direccion=document.getElementById("direccion").value;
ocupacion=document.getElementById("ocupacion").value;
	ArrayRegistro.push(new Registro(nombre,apellido,telefono,direccion, ocupacion));
	Listar();
}

// prototipo
function Registro(nombre,apellido,telefono,direccion, ocupacion) {
	// body...
	this.nombre=nombre;
	this.apellido=apellido;
	this.telefono=telefono;
	this.direccion=direccion;
	this.ocupacion=ocupacion;

}
function Listar(){
	for (i=0;i<=ArrayRegistro.length; i++) {
		document.getElementById("ListarNombre").innerHTML= ArrayRegistro[i].nombre;
		document.getElementById("ListarApellido").innerHTML= ArrayRegistro[i].apellido;
		document.getElementById("ListarTelefono").innerHTML= ArrayRegistro[i].telefono;
		document.getElementById("ListarDireccion").innerHTML= ArrayRegistro[i].direccion;
		document.getElementById("ListarOcupacion").innerHTML= ArrayRegistro[i].ocupacion;
	//document.write(ArrayRegistro[i].nombre)
	//document.write("<br>"+ArrayRegistro[i].apellido)
	//document.write("<br>"+ArrayRegistro[i].telefono)
	//document.write("<br>"+ArrayRegistro[i].direccion)
	//document.write("<br>"+ArrayRegistro[i].ocupacion)
}
}
