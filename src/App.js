import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import AddToDo from './components/AddToDo/AddToDo'
import ToDos from './components/ToDos/ToDos'

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
		<div className='App'>
			<AddToDo onAdd={onAddDataHandler} />
			<ToDos data={data} setData = {setData}/>
		</div>
	)
}

export default App
