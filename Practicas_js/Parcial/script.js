var nombre;
var variedad;
var cant_plantada;
var fecha_plantacion;
var fecha_cosecha;
var ArrayCultivo=new Array;


function Cultivo(nombre, variedad, cant_plantada, fecha_plantacion, fecha_cosecha){
	this.nombre=nombre;
	this.variedad=variedad;
	this.cant_plantada=cant_plantada;
	this.fecha_plantacion=fecha_plantacion;
	this.fecha_cosecha=fecha_cosecha;
}

function Capturar(){
	n=document.getElementById("nombre").value;
	v=document.getElementById("variedad").value;
	c=document.getElementById("cant_plantada").value;
	fp=document.getElementById("fecha_plantacion").value;
	fc=document.getElementById("fecha_cosecha").value;
	registro1=new Cultivo(n,v,c,fp,fc);
	ArrayCultivo.push(registro1);
	Listar();
}
function Listar(){
	for (var i = 0; i < ArrayCultivo.length; i++) {
		document.write("Nombre de cultivo: "+ArrayCultivo[i].nombre+"<br>Variedad: "+ArrayCultivo[i].variedad+"<br>Cantidad Plantada: "+ArrayCultivo[i].cant_plantada+"<br>Fecha de Plantacion: "+ArrayCultivo[i].fecha_plantacion+"<br>Fecha de Cosecha: "+ArrayCultivo[i].fecha_cosecha);
	}
}