import React, { useReducer } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import Modal from '../UI/Modal'
import './AddToDo.css'

const inputReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return {
			value: action.value,
			isValid: action.value.trim().length > 0,
			date: action.date,
		}
	}
	if (action.type === 'INPUT_BLUR') {
		return {
			value: state.value,
			isValid: state.value.trim().length > 0,
			date: state.date,
		}
	}
	if (action.type === 'Error') {
		return {
			value: state.value,
			isValid: state.value.trim().length > 0,
			date: state.date,
			error: {
				title: 'Error',
				message: 'Please,fill the blank',
			},
		}
	}
	if (action.type === 'Alright') {
		return {
			value: state.value,
			isValid: state.value.trim().length > 0,
			date: state.date,
			error: null,
		}
	}
	return {
		value: '',
		isValid: false,
		date: state.date,
		error: null,
	}
}

function AddToDo(props) {
	const [inputData, dispatchInput] = useReducer(inputReducer, {
		value: '',
		isValid: false,
		date: '',
		error: null,
	})
	const inputChangeHandler = (e) => {
		dispatchInput({
			type: 'USER_INPUT',
			value: e.target.value,
			date: new Date().toLocaleDateString(),
		})
	}
	const validateInputHandler = (e) => {
		dispatchInput({ type: 'INPUT_BLUR' })
	}
	const onSubmitHandler = (e) => {
		e.preventDefault()
	
		if (inputData.isValid === false) {
			dispatchInput({ type: 'Error' })
            return
		}
	
            const data = {
                value: inputData.value,
                date: inputData.date,
                isValid: inputData.isValid,
                id: Math.random().toString(),
                completed : false
            }
			props.onAdd(data)
		
	}
	const errorHandler = () => {
		dispatchInput({ type: 'Alright' })
	}
	return (
		<Card>
			{inputData.error && (
				<Modal
					message={inputData.error.message}
					title={inputData.error.title}
					onConfirm={errorHandler}
				/>
			)}
			<form className='form' onSubmit={onSubmitHandler}>
				<label className='title'>Add your todos</label>
				<div className='main'>
					<input
						className='input'
						placeholder='ToDo'
						value={inputData.value}
						type='text'
						onBlur={validateInputHandler}
						onChange={inputChangeHandler}
					/>
					<Button type='submit'>ADD</Button>
				</div>
			</form>
		</Card>
	)
}

export default AddToDo
