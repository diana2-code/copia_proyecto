
document.addEventListener("DOMContentLoaded", function(){
    //Seleccionamos los elementos

    const boton = document.getElementById("boton");
    const parrafo = document.getElementById("parrafo");

    //evento para cambiar el color del boton al pasar el mouse

    boton.addEventListener("mouseover", function(){
        boton.style.background ="red";
    });

    boton.addEventListener("mouseout", function(){
        boton.style.backgroundColor = "blue";
    });

    //Evento para ambiar color del parrafo al hacer clic

    parrafo.addEventListener("click", function(){
        parrafo.style.color = parrafo.style.color === "green" ? "black" : "green";
    });
});