let todo = document.getElementById('todo')
let dataWrapper = document.getElementById('dataWrapper')


const Todo = () => {
  let data = todo.value
  console.log(data)

  dataWrapper.innerHTML += ` 
    <div class="container" >
        <h3>${data}</h3>
        <button>delete</button>
    </div>
  
  `
}
