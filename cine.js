window.onload = function()    
{
    
// añadimos el evento click al boton validar
document.getElementById("btn-validar").addEventListener("click", validar);  

// añadimos el evento change a la seleccion de genero
document.getElementById("genero").addEventListener("change", CambiarGenero); 


// protejo los campos para el genero animacion
document.getElementById("campo1").style.display='none';  
document.getElementById("campo2").style.display='none';     
document.getElementById("campo3").style.display='none';     
document.getElementById("campo4").style.display='none';     
document.getElementById("campo5").style.display='true';       

    
// añado un evento onmousedown al "Distribuidor"
    document.getElementById("distribuidor").addEventListener("onmousedown",msgDistribuidor)
}  



function validar() {
    // guardamos en una variable el texto donde se introducen los mensajes de error
    var mensaje_error = document.getElementById("mensaje");
	mensaje_error.innerHTML = '';
    
    // validar campos de obligacion
    var campos_obligatorios = document.getElementsByClassName("obligatorio");
  //  var titulo_obligatorio = ["Pelicula", "Director", "Distribuidor","E-Mail","Año"];
	for (i=0; i < campos_obligatorios.length; i++) {
		if (campos_obligatorios[i].value == '') {
			mensaje_error.setAttribute("class", "alert alert-danger");
		//   mensaje_error.insertAdjacentHTML("afterbegin", titulo_obligatorio[i] + " es obligatorio");
			  mensaje_error.insertAdjacentHTML("afterbegin", campos_obligatorios[i].alt + " es obligatorio");
            return false;
		}
	} // End For
    
    // validacion formato de email
    var nodo_email = document.getElementById("email");
    var valor_email = nodo_email.value;
    var email_correcto = ValidateEmail(valor_email);
    //    ValidateEmail(document.getElementById("email").value)   // esta es la forma abreviada 
    if (!email_correcto) {
        mensaje_error.setAttribute("class", "alert alert-danger");
		mensaje_error.insertAdjacentHTML("afterbegin", "El e-mail tiene un formato incorrecto");
		return false;
    }
    
    // validacion año
    var nodo_año = document.getElementById("año");
    var valor_año = nodo_año.value;
    var año_correcto = ValidarAño(valor_año);
    if (!año_correcto) {
        mensaje_error.setAttribute("class", "alert alert-danger");
		mensaje_error.insertAdjacentHTML("afterbegin", "El año tiene un formato incorrecto, debe ser: YYYY");
		return false;
    }    
    
    // EN CASO DE QUE NO HAYA ERROR
    mensaje_error.setAttribute("class", "alert alert-success");
	mensaje_error.insertAdjacentHTML("afterbegin", "Las validaciones son correctas");
    
    
}

function ValidateEmail(mail) 
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
  return (false)
}

function ValidarAño(año) 
{
  if (/^[0-9]{4}$/.test(año))
  {
    return (true)
  }
  return (false)
}

function CambiarGenero() {
    var nodo_genero =document.getElementById("genero");
    var valor_genero = nodo_genero.value;
    
    if (valor_genero=="Animacion" ) {
        // protejo los campos para el genero animacion
        document.getElementById("campo1").style.display='none';  
        document.getElementById("campo2").style.display='none';     
        document.getElementById("campo3").style.display='none';     
        document.getElementById("campo4").style.display='none';     
        document.getElementById("campo5").style.display='block';       
    }
    
    else if (valor_genero == "Aventura") {
        // protejo los campos para el genero aventura
        document.getElementById("campo1").style.display='block';  
        document.getElementById("campo2").style.display='block';     
        document.getElementById("campo3").style.display='block';     
        document.getElementById("campo4").style.display='block';    
        document.getElementById("campo5").style.display='none';   
    }
    
    else {
         // protejo los campos para el genero drama
        document.getElementById("campo1").style.display='block';  
        document.getElementById("campo2").style.display='block';     
        document.getElementById("campo3").style.display='none';     
        document.getElementById("campo4").style.display='none';    
        document.getElementById("campo5").style.display='none';   
    }
}

function msgDistribuidor() {
    var distribuidor = document.getElementById("variable");
    variable.value = "Esto cambia"; 
}