var nombre;
var variedad;
var cant_plantada;
var fecha_plantacion;
var fecha_cosecha;
var ArrayCultivo=new Array();
//prototipo
function Cultivo(nombre, variedad, cant_plantada, fecha_plantacion, fecha_cosecha){
	this.nombre=nombre;
	this.variedad=variedad;
	this.cant_plantada=cant_plantada;
	this.fecha_plantacion=fecha_plantacion;
	this.fecha_cosecha=fecha_cosecha;
}
function Get(){
	n=$("nombre").val();
	v=$("variedad").val();
	c=$("cant_plantada").val();
	fp=$("fecha_plantacion").val();
	fc=$("fecha_cosecha").val();
}
function Insert(){
	ArrayCultivo.push(new Cultivo(n,v,c,fp,fc));
}

function Listar(){
	for (var i = 0; i < ArrayCultivo.length; i++) {
		console.log("Nombre de cultivo: "+ArrayCultivo[i].nombre+"<br>Variedad: "+ArrayCultivo[i].variedad+"<br>Cantidad Plantada: "+ArrayCultivo[i].cant_plantada+"<br>Fecha de Plantacion: "+ArrayCultivo[i].fecha_plantacion+"<br>Fecha de Cosecha: "+ArrayCultivo[i].fecha_cosecha);
	}
}
$(document).ready(function(){
	// se invoca

	$("#enviar").click(function(){
		Get();
		Insert();
		Listar();
	});
});
