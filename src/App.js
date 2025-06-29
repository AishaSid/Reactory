import React, {useState , useRef , useEffect} from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'
// Compare this snippet from src/App.js:
function App() {
  const [todos, setTodos] = useState([])
  const todonameRef = useRef()

  function handleAddTodo(e) {
   const name = todonameRef.current.value
    if (name === '') return
    console.log(name)
    todonameRef.current.value = null
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))

  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleClearTodo() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function handleCompletedTodo() {
    const newTodos = todos.filter(todo => todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
    <TodoList todos ={todos} toggleTodo={toggleTodo}/>
    <input ref={todonameRef} type="text" placeholder="Add a new task" />
    <button onClick ={handleAddTodo}>Add Task</button>
    <button onClick ={handleClearTodo}>Clear Completed</button>
    <button onClick ={handleCompletedTodo}>Show Completed</button>
    <button>Show All</button>
    <div>{todos.filter(todo => !todo.complete).length} Left to Do </div>

    </>
  )
}

export default App;
