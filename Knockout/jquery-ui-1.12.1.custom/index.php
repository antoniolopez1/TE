<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>jQuery UI Dialog - Modal form</title>
  <link rel="stylesheet" href="jquery-ui.css">
  <link rel="stylesheet" href="style.css">
  <style>
   
  </style>
  <script src="external\jquery\jquery.js"></script>
  <script src="jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
	
	$( "#enviar" ).on( "click", function() {
	$( "#dialog" ).dialog( "close" );
      Enviar();
    });
	
        
 
  } );
  
  function Enviar(){
  //star ajax
  $.ajax({
       cache: false,
       data:{
	         nombre: $("#nombre").val(),
			 apellido: $("#apellido").val(),
			 },
                url:   'Recived.php',
                type:  'post',
                beforeSend: function () {
                  //mensaje
                 $('#dato').text("Enviando..");
                },
                success:  function (respuesta) {
                   $('#dato').text(respuesta);
                   }
        });//the end AJAX
  }
  
  </script>
</head>
<body>
 
<div id="dialog" title="Envio por Ajax">
 <input type="text" name="nombre" id="nombre" value="" class="text ui-widget-content ui-corner-all">
 <input type="text" name="apellido" id="apellido" value="" class="text ui-widget-content ui-corner-all">
 <button id="enviar">Enviar</button>
</div>
 
<button id="opener">Open Dialog</button>
 <div id="dato"></div>
 
</body>
</html>