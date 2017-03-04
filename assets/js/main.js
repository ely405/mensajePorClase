window.addEventListener("load", function(){
  var claseMensaje = document.getElementsByClassName("mensaje");
  var muestra = document.getElementById("muestraResultado");
  muestra.innerHTML = (claseMensaje.length == 1)? "<strong>Es muy poco.</strong>" :
                      (claseMensaje.length > 2 && claseMensaje < 4)? "<strong>No está mal.</strong>":
                      (claseMensaje.length >= 4)? "<strong>Son muchos!</strong>" : ""
})
