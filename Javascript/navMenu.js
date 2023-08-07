if(document.documentElement.clientWidth> 1024){
    document.getElementById("btn-inicio").style.display="block";
    document.getElementById("btn-paquete").style.display="block";
    document.getElementById("btn-nosotros").style.display="block";
    document.getElementById("btn-contactanos").style.display="block";
    document.getElementById("btn-wpp").style.display="block";
    document.getElementById("btn-videollamada").style.display="block";
    
}

    
function desplegarMenu(){

    if(document.documentElement.clientWidth< 1024){
   /*
        document.getElementById('menu-desplegable').style.backgroundImage="none";
        document.getElementById('menu-desplegable').style.display="flex";
        document.getElementById('menu-desplegable').style.flexDirection="column";
        document.getElementById('menu-desplegable').style.background = "#EF6C50";
        document.getElementById('menu-desplegable').style.width = "auto";
        document.getElementById('menu-desplegable').style.height = "auto";
        document.getElementById('menu-desplegable').style.borderRadius = "1rem";
        document.getElementById('menu-desplegable').style.paddingBottom = "5px";
        document.getElementById('menu-desplegable').style.border = "3px solid #F3AF5A";
*/
        document.getElementById("btn-inicio").style.display="block";
        document.getElementById("btn-paquete").style.display="block";
        document.getElementById("btn-nosotros").style.display="block";
        document.getElementById("btn-contactanos").style.display="block";
        document.getElementById("btn-wpp").style.display="block";
        document.getElementById("btn-videollamada").style.display="block";
        
        
    }

}


function cerrarMenu(){ 
    
    
    if(document.documentElement.clientWidth< 1024){
        document.getElementById("btn-inicio").style.display="none";
        document.getElementById("btn-paquete").style.display="none";
        document.getElementById("btn-nosotros").style.display="none";
        document.getElementById("btn-contactanos").style.display="none";
        document.getElementById("btn-wpp").style.display="none";
        document.getElementById("btn-videollamada").style.display="none";

    }

}



//document.getElementById('estilos').href = 'css/retro.css';
    



