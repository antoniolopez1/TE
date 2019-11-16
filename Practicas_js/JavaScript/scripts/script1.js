//variables
var array_persona= new Array();
//prototipos
function Persona(nombre, apellido, edad, profesion, telefono){
	this.nombre=nombre;
	this.apellido=apellido;
	this.edad=edad;
	this.profesion=profesion;
	this.telefono=telefono;
}
//funcion capturar traida del formulario
function Capturar(){
	n=document.getElementById("nombre").value;
	a=document.getElementById("apellido").value;
	e=document.getElementById("edad").value;
	p=document.getElementById("profesion").value;
	t=document.getElementById("telefono").value;

	var persona1= new Persona(n,a,e,p,t);
	array_persona.push(persona1);
	//console.log(persona1);
		//alert("Nombre: "+n);
		Listar();
}
//funcion listar
function Listar(){
		for (var i =0; i < array_persona.length; i++) {
			document.getElementById("resultados").innerHTML = "Nombre: "+array_persona[i].nombre+"<br>"+"Apellido: "+array_persona[i].apellido+"<br>"+"Edad: "+array_persona[i].edad+"<br>"+"Profesion: "+array_persona[i].profesion+"<br>"+"Telefono: "+array_persona[i].telefono+"<br>";
		}
		
	}