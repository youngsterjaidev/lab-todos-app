import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const fetchTodos = ()=> {
    // make a get resquest server
    // find the data from response
    axios.get("https://lab-todos-app-backend-ggfwhbfjerbahjex.eastus-01.azurewebsites.net/")
      .then(res => {
        console.log(res.data)
        setTodos(res.data)
      })
  }
  
  const handleSubmit = (e) => {
    // prevent page from reloading
    e.preventDefault()

    // send the post request to the server
    axios.post("https://lab-todos-app-backend-ggfwhbfjerbahjex.eastus-01.azurewebsites.net/add", {
      title: "football",
      isCompleted: false,
      timestamp: "2024-08-26 13:35:04"
    }).then(res => {
      console.log(
        "Response ", res
      )

      fetchTodos()
    })
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div><input type="text" placeholder='Enter the todo' /></div>
      <div>
        <button type='submit'>Add Todo</button>
      </div>
    </form>
    <section>
      <ul>
        {todos.map((todo) => {
          return (
          <li>
            <input type='checkbox' checked={todo[3]} />
            {todo[1]}
          </li>)
        })}
      </ul>
    </section>
    </div>
  )
}

export default App
