"use strict";

const cuenta =document.getElementById('botoncitos');
let estado = false;

cuenta.addEventListener('click', ()=>{
    if (cuenta =! estado) {

        alert('redireccionando');
        window.location ="../html/envio.html";
    
}

})

