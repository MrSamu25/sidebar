function abrir_cerrar() {
    if(document.getElementById("mySidebar").style.display == "none") {
        document.getElementById("contenido").style.marginLeft = "22%";
        document.getElementById("mySidebar").style.width = "20%";
        document.getElementById("mySidebar").style.display = "block";      
    }
    else{
        document.getElementById("contenido").style.marginLeft = "2%";
        document.getElementById("mySidebar").style.display = "none";
    }

}