$(document).ready(function(){
    
    //Agregamos Atributo _blank a todos los cada etiqueta <a>
    $('a').attr('target', '_blank');
      
    //Agregamos el Icono correspondiente a cada botón
    $( ".socialnetworks li:nth-child(1) a" ).prepend( '<i class="fab fa-facebook-f"></i>' );
    $( ".socialnetworks li:nth-child(2) a" ).prepend( '<i class="fab fa-instagram"></i>' );
    $( ".socialnetworks li:nth-child(3) a" ).prepend( '<i class="fab fa-twitter"></i>' );
    $( ".socialnetworks li:nth-child(4) a" ).prepend( '<i class="fab fa-pinterest"></i>' );
    
    //Cambiar el color de todos los selectores H2 a color rojo cuando le damos click
    $("h2").click(function (){
      $(this).css("color","red"); 
   });
    
     //Agregar String por medio de un append y un After al cuarto <li> de la segunda <section>
    
    $("section:nth-child(3) li:nth-child(4)").append('<ul><li><a href="#">link 4.a</a></li></ul>');
    $("section:nth-child(3) li:nth-child(4)").after('<li><a href="#">link 5</a></li>');
      
    
});
