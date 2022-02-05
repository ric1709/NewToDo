import React from 'react';
import ReactDOM from 'react-dom'
import classes from'./Modal.module.css'
import Card from './Card.js'
import Button from './Button';
const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onCancel} />
}
const ModalOverlay = (props) => {
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={classes.content}>
				<p>{props.message}</p>
			</div>
			<footer className={classes.actions}>
				<Button onClick={props.onConfirm}>Confirm</Button>
			</footer>
		</Card>
	)
}
function Modal(props) {
    return (
        <>
        {ReactDOM.createPortal(
            <Backdrop onCancel={props.onConfirm} />,
            document.getElementById('backdrop-root'),
        )}
        {ReactDOM.createPortal(
            <ModalOverlay
                onConfirm={props.onConfirm}
                title={props.title}
                message={props.message}
            />,
            document.getElementById('modal-root'),
        )}
    </>
        
    );
}

export default Modal;