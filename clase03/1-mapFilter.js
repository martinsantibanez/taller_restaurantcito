
const platos = [
  {
    nombre: "Ceviche",
    precio: 6000,
  },
  {
    nombre: "Tiramisu",
    precio: 2000,
  },
  {
    nombre: "Fruna cola",
    precio: 1000,
  },
]

/*
Forma fea, mejor usar platos.map
for(let i=0; i<platos.length; i++) {
  nombres.push(platos[i].nombre)
}*/

/*

platos.forEach((plato) => {
  console.log("MI PLATO:")
  console.log(plato.nombre)
})
*/


const getNombre = (plato) => {
  return plato.nombre
}

const esBarato = (plato) => {
  return plato.precio <= 2000
}

const nombres = platos.map(getNombre)
const platosBaratos = platos.filter(esBarato)

console.log(nombres)
console.log(platosBaratos)
