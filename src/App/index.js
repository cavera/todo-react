// import "./App.css";
import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";
// const defaultTodos = [
// 	{ text: "Cortar Cebolla", completed: false },
// 	{ text: "Tomar agua", completed: true },
// 	{ text: "Trickear a la IA", completed: false },
// 	{ text: "Que cosas no?", completed: false },
// ];

function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;
