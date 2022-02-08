import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import AddToDo from './components/AddToDo/AddToDo'
import ToDos from './components/ToDos/ToDos'
import todoContex from './store/todo-contex'

function App() {
	const [data, setData] = useState([])
	const onAddDataHandler = (newData) => {
		setData([...data, newData])
	}

	useEffect(() => {
		const todo = localStorage.getItem('data')
		setData(JSON.parse(todo) || [])
	}, [])
	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(data))
	}, [data])
	return (
		<todoContex.Provider value={{onAddDataHandler,data,setData}} >
			<div className='App'>
				<AddToDo />
				<ToDos />
			</div>
		</todoContex.Provider>
	)
}

export default App
