import React from "react";
import { useState } from 'react'
import { useEffect } from 'react'

const todoContex=React.createContext()

export const TodoContexProvider=(props)=>{
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
        <todoContex.Provider value={{onAddDataHandler,data,setData}}>
            {props.children}
        </todoContex.Provider>
    )
}

export default todoContex;