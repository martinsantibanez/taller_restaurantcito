/*
pending   / pendiente
fulfilled / resuelta
rejected  / rechazada
*/

function probarSuerte() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero = Math.random() // [0, 1)
      if (numero >= 0.9) resolve(numero) // 80% casos
      else reject(numero)
    }, 2000)
  })
}

console.log('hola')
probarSuerte()
  .then((valor) => {
    console.log("Mi numero de la suerte es: " + valor);
  })
  .catch((valor) => {
    console.log("Mala suerte con el " + valor);
  });
console.log('chao')





/*
probarSuerte().then((valor) => {
  console.log('Mi numero de la suerte es: ' + valor)
}, (valor) => {
  console.log('Mala suerte con el ' + valor)
})
*/

/*probarSuerte().then(valor => {
  console.log("Mi numero de la suerte es: " + valor);
}).catch(valor => {
  console.log("Mala suerte con el " + valor)
})*/
