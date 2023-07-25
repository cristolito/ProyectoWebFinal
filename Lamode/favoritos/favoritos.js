// Borrar cards de favoritos
function deleteItem(button) {
    button.parentElement.parentElement.remove();
}

// alerta de  compra de articulo
function buyItem() {
    alert("Felicidades usted a comprado este objeto");
}

/************ ventana modal ************/

// Parar abrir la ventana modal
let modal_open=()=>{
    comentarios_modal.showModal();
    comentarios_modal_2.showModal();
    comentarios_modal_3.showModal();
    comentarios_modal_4.showModal();
    comentarios_modal_5.showModal();
    comentarios_modal_6.showModal();
    comentarios_modal_7.showModal();
    comentarios_modal_8.showModal();
}

// Para cerrar la ventana modal
let modal_close=()=>{
    comentarios_modal.close();
}