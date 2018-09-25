function abrir_cerrar() {

    //La ventana es de tamaño 600px o menos
    var x = window.matchMedia("(max-width: 600px)")

    /* Abrir side-bar toda la pantalla*/
    if (document.getElementById("mySidebar").style.display == "none" && x.matches) {
        document.getElementById("contenido").style.marginLeft = "22%";
        document.getElementById("mySidebar").style.width = "100%";
        document.getElementById("mySidebar").style.display = "block";
        console.log(" /* Abrir side-bar toda la pantalla*/ ");
        console.log("tamaño ventana mayora 600px ");
    }

    /* Abrir side-bar parte de la pantalla */
    else if (document.getElementById("mySidebar").style.display == "none") {
        document.getElementById("contenido").style.marginLeft = "22%";
        document.getElementById("mySidebar").style.width = "20%";
        document.getElementById("mySidebar").style.display = "block";
        console.log(" /* Abrir side-bar parte de la pantalla */ ");
    }

    /* Cerrar side-bar  */
    else {
        document.getElementById("mySidebar").style.display = "none"
        document.getElementById("contenido").style.marginLeft = "2%";
        console.log(" /* Cerrar side-bar  */ ");
    }

}
/* 
    if(document.getElementById("contenido").style.fontSize == " 8px" && document.getElementById("mySidebar").style.display == "none"){
        document.getElementById("mySidebar").style.width = "100%";
        document.getElementById("mySidebar").style.display = "block"
    }


    bien abajo
    document.getElementById("contenido").style.marginLeft = "2%";
    document.getElementById("mySidebar").style.display = "none";

*/