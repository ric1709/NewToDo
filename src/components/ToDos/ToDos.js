import React, { Fragment } from 'react'
import './ToDos.css'

function ToDos(props) {
	const onChangeHandler = (e) => {
		props.setData(
			props.data.map((el) => {
				if (el.id === e.target.value) {
					el.completed = !el.completed
				}
				return el
			}),
		)
	}
	let dataRender = <h1>No Todos</h1>
	if (props.data.length > 0) {
		dataRender = props.data.map((el) => (
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
