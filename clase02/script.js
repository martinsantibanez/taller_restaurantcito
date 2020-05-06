var inputProductos = document.querySelector("#numProductos");
var botonCalcular = document.querySelector("#calcular");
var inputPrecio = document.querySelector("#precioUnidad");
var divTotal = document.querySelector("#total");
var listaProductos = document.getElementById("lista-productos"); // equivale a querySelector('#lista-productos')

function actualizarTotal(event) {
  console.log(event);
  var precioUnidad = inputPrecio.value;
  var numProductos = inputProductos.value;
  var precioTotal = precioUnidad * numProductos;
  console.log(
    "precioUnidad: " +
      precioUnidad +
      " numProductos:" +
      numProductos +
      " = " +
      precioTotal
  );
  divTotal.innerHTML = precioTotal;
}

inputProductos.addEventListener("keydown", actualizarTotal);
inputProductos.addEventListener("change", actualizarTotal);
inputPrecio.addEventListener("keydown", actualizarTotal);

// LISTA DE PLATOS DINÁMICA
var platos = [];

function reqListener() {
  platos = JSON.parse(this.responseText);
  console.log(platos);

  for (var platoActual of platos) {
    var elementoPlato = document.createElement("li");
    var etiqueta = document.createTextNode(platoActual.nombre);
    elementoPlato.appendChild(etiqueta);
    listaProductos.appendChild(elementoPlato);
  }
}

// Obtener datos del archivo
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://localhost/restaurantcito/data.json");
oReq.send();

// equivalente a for .. of ..
/*for(var i = 0; i < platos.length; i++){ 
        platoActual = platos[i]

      }*/
