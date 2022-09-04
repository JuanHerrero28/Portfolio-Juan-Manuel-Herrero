//funcion que quita la opcion seleccionada
function seleccionar(link){
    const opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //hacemos desaparecer el menu
    const x = document.getElementById("nav");
    x.className = "";
}



// Funcion que muestra el menu responsive
function responsiveMenu() {
    const x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }

}

//detecto el scrolling para aplicar la animacion de las barras

window.onscroll = function(){
    efectoHabilidades()
}

function efectoHabilidades(){
    const skills = document.getElementById("skills");
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("css").classList.add("barra-progreso2");
        document.getElementById("js").classList.add("barra-progreso3");
        document.getElementById("react").classList.add("barra-progreso4");
        document.getElementById("node").classList.add("barra-progreso5");
    }
}

