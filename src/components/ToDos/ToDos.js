import React, { Fragment, useContext } from 'react'
import todoContex from '../../store/todo-contex'
import './ToDos.css'

function ToDos() {
	const { data, setData } = useContext(todoContex)
	const onChangeHandler = (e) => {
		setData(
			data.map((el) => {
				if (el.id === e.target.value) {
					el.completed = !el.completed
				}
				return el
			}),
		)
	}
	let dataRender = <h1>No Todos</h1>
	if (data.length > 0) {
		dataRender = data.map((el) => (
			<div className='main1' key={el.id}>
				<label className={el.completed ? 'done' : 'title'}>
					{el.value}
				</label>
				<label className='date'>{el.date}</label>

				<input
					value={el.id}
					className='check'
					type='checkbox'
					onChange={onChangeHandler}
					checked={el.completed}
				/>
			</div>
		))
	}
	return <Fragment>{dataRender}</Fragment>
}

export default ToDos
