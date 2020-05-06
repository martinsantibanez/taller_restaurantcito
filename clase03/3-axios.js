const axios = require('axios')

function getTask(id) {
  return new Promise((resolve, reject) => {
    axios.get("https://jsonplaceholder.typicode.com/todos/" + id).then(response => {
      resolve(response.data)
    }).catch(error => { 
      reject(error) 
    })
  })

}

getTask(10).then((value) => {
  console.log(value)
})