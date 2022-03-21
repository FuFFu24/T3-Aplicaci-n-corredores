function validarNombre() {
    let nombre = document.getElementById("nombre").value.length;

    if (nombre >= 4)
     {
       return (true)
     }
       alert("Has introducido un nombre no valido.")
       return (false)
}

function validarEmail(email) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    alert("Has introducido una direccion email no valida.")
    return (false)
}

function cambiarKm() {
    let km = document.getElementsByName("corre");
    switch (km) {
        case "si": 
            document.getElementsByTagName("p")[2].className="mostrado";
            document.getElementsByTagName("input")[5].className="mostrado";
            break;
        
        case "no":
            document.getElementsByTagName("p")[2].className="oculto";
            document.getElementsByTagName("input")[5].className="oculto";
            break;
    }
}


function siHaCorrido() {
  if (document.getElementById("distancia")!=null){
  } else {
    var obj_distancia=document.createElement("input");
    obj_distancia.id="distancia";
    obj_distancia.type="number";
    document.getElementById("campo_corredor").appendChild(obj_distancia);
  }}

function noHaCorrido() {
  if (document.getElementById("distancia")!=null) {
    document.getElementById("campo_corredor").removeChild(document.getElementById("distancia"));
  }}

function alerta() {
  var nombre=document.getElementById("nombre").value;
  var email=document.getElementById("email").value;
  var saludo="Te llamas "+nombre+" tienes email: "+email;
  var r_buttons=document.getElementsByName("hacorrido");
  var hacorrido=r_buttons[0].checked;
  if (hacorrido) {
    var distancia=document.getElementById("distancia").value;
    saludo=saludo+" y has corrido distancia de "+distancia+" km";
  }
  alert(saludo);
}
