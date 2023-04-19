// import "./App.css";
import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoHeader } from "../TodoHeader";

function App() {
	const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal, totalTodos, completedTodos, searchValue, setSearchValue, addTodo } = useTodos();

	return (
		<>
			<TodoHeader>
				<TodoCounter
					totalTodos={totalTodos}
					completedTodos={completedTodos}
				/>
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			</TodoHeader>

			<TodoList
				error={error}
				loading={loading}
				searchedTodos={searchedTodos}
				onError={(error) => <TodosError error={error} />}
				onLoading={() => <TodosLoading />}
				onEmptyTodos={() => <EmptyTodos />}
				render={(todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				)}
			/>

			{!!openModal && (
				<Modal>
					<TodoForm
						addTodo={addTodo}
						setOpenModal={setOpenModal}
					/>
				</Modal>
			)}

			<CreateTodoButton
				setOpenModal={setOpenModal}
				openModal={openModal}
			/>
		</>
	);
}

export default App;
