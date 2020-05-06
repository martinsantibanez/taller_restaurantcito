const axios = require("axios");

async function getTask(id) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/" + id
  );
  return response.data;
}

async function imprimirTarea(id) {
  try {
    const tarea = await getTask(id)
    console.log(tarea)
  } catch {
    console.log("UPS! Ocurrió un error");
  }
}

imprimirTarea(9999999)
imprimirTarea(10)

