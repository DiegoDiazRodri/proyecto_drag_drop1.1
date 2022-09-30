// drag and drop utlilizando la libreria sorteable JS

const dropItems = document.getElementById('drop_items');

new Sortable(dropItems, {
    animation: 350,  //velocidad de movimiento de los elementos
    
});
