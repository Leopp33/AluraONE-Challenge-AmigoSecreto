const amigo = document.getElementById("amigo");
const img = document.createElement('img');
const lista_amigos = [];
const seccion_lista_amigos = document.getElementById("listaAmigos");
const seccion_amigos_sorteo = document.getElementById("resultado");
const seccion_input = document.querySelector('.input-section');

function agregarAmigo(){
 
    if (amigo.value){
        lista_amigos.push(amigo.value);
        
        seccion_lista_amigos.innerHTML = "";

        lista_amigos.forEach(crear_elementos_li);
    }
    else{
        alert("Para continuar ingresa un nombre en el campo designado.");
    }
    
    function crear_elementos_li(amigo_lista){
      
        const li = document.createElement("li");
        li.textContent = amigo_lista
        seccion_lista_amigos.appendChild(li);
        amigo.value = "";
    }

    seccion_input.removeChild(img);
    seccion_amigos_sorteo.innerHTML = null;
    
}

function sortearAmigo(){

    if(lista_amigos.length >= 2){

        seleccion_random = Math.floor( Math.random() * lista_amigos.length);

        seccion_amigos_sorteo.innerHTML = lista_amigos[seleccion_random];

        seccion_lista_amigos.innerHTML = null;

        lista_amigos.length = 0;

        
        img.src = 'assets/congratulations.gif';
        img.alt = 'Imágen de celebración: Confetti Animado';
        img.className = 'celebracion_confetti';
        seccion_input.appendChild(img);
        

    }
    else{
        alert("Debes agregar por lo menos a dos participantes para jugar.")
    }
    
} 