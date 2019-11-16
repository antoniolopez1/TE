<?php 
if (!empty($_POST)){ // si el post no esta vacio.
   $Nombre    = $_POST['nombre'];
   $Apellido = $_POST['apellido'];
   echo $Nombre," ",$Apellido;
   
}
 ?>