//let formulario = document.getElementById("miFormulario");



window.onload = iniciar;
function iniciar(){
    document.getElementById("enviar").addEventListener('click', validar,false);
 
}

function validar(e){
    if(!e) e=window.event;
if(validarEmail() && validarsubject() && validarnombre() && validardescripcion()){
    
    alert('Mensaje enviado');
    
    
    
}else{
    e.preventDefault();
   
    
   if(!validarEmail()){
    document.getElementById("mail").style.borderColor="red";
    
   }
   if(!validarsubject()){
    document.getElementById("subject").style.borderColor="red";

   }
   if(!validarnombre()){
    document.getElementById("nombre").style.borderColor="red";
  
   }
   if(!validardescripcion()){
    document.getElementById("descripcion").style.borderColor="red";
   
   }
   
   
}
}
function validarEmail() {
    let valor = document.getElementById("mail").value;
    
    if ( /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es|net|org)+$/.test(valor)){
     return true;
    } else {
        return false;
    }
   
  }
   function limpiarerror(elemento){
    elemento.className="";
    }
function validarnombre(){
    let valor = document.getElementById("nombre").value;
    
    if(valor==""){
        return false;
    }else{
        return true;
    }

}
function validarsubject(){
    let valor = document.getElementById("subject").value;
   
    if(valor==""){
        return false;
    }else{
        return true;
    }

}
function validardescripcion(){
    let valor = document.getElementById("descripcion").value;
    
    if(valor==""){
        return false;
    }else{
        return true;
    }

}

