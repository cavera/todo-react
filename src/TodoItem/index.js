import React from "react";
import "./TodoItem.css";
import { TodoIcon } from "../TodoIcon";

function TodoItem(props) {
	const checkClass = `Icon Icon-check ${props.completed && "Icon-check--active"}`;
	const paragraphClass = `TodoItem-p ${props.completed && "TodoItem-p--complete"}`;
	const todoItemClass = `TodoItem ${props.completed && "TodoItem--complete"}`;
	return (
		<li className={todoItemClass}>
			<span
				className={checkClass}
				onClick={props.onComplete}>
				<TodoIcon type='check' />
			</span>
			<p className={paragraphClass}>{props.text}</p>
			<span
				className='Icon Icon-delete'
				onClick={props.onDelete}>
				<TodoIcon type='delete' />
			</span>
		</li>
	);
}

export { TodoItem };
