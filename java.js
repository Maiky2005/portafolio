var menu = document.getElementById("nava")

let menuVisible = false;
    function mostrarOcultarMenu(){
        if(menuVisible){
            document.getElementById("nav").classList ="";
            menuVisible = false;
        }else{
            document.getElementById("nav").classList ="responsive";
            menuVisible = true;
        }
    }
menu.addEventListener("click",()=> mostrarOcultarMenu())


function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("Davinci");
        habilidades[3].classList.add("animate");
        habilidades[4].classList.add("ilustrator");
        habilidades[5].classList.add("Davinci");
        habilidades[6].classList.add("puntualidad");
        habilidades[7].classList.add("Davinci");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("Davinci");
    }
}


window.onscroll = function(){
    efectoHabilidades();
}

function abrir(){
    document.getElementById ("vente").style.display="block";
}

function cerrar(){
    document.getElementById("vente").style.display="none";
}
