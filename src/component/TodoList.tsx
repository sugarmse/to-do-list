import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../state/TodoSlice";
import { RootState } from "../state/store";

const todolist = (

) => {
	const [newTodo, setNewTodo] = useState("");
	const dispatch = useDispatch();
	const handleAddTodo = () => {
		if (newTodo !== "") {
			dispatch(addTodo(newTodo));
			console.log(newTodo);
			setNewTodo("");
		}
	};
	const handleRemoveTodo = (todoId: number) => {
		dispatch(removeTodo(todoId));
	};
	  const handleToggleTodo = (todoId: number) => {
			dispatch(toggleTodo(todoId));
		};
	const todos = useSelector((state: RootState) => state.todos);

	return (
		<>
			<h1>TO DO LIST</h1>

			<input
				type="text"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
				placeholder="Add new"
			/>
			<button className="add" onClick={handleAddTodo}>
				+
			</button>
			<ol>
				{todos.map((task) => (
					<div className="todos" key={task.id}>
						<li
							style={{
								textDecoration: task.completed ? "line-through" : "none",
							}}
							onClick={() => handleToggleTodo(task.id)}
						>
							{task.text}
						</li>
						<button onClick={() => handleToggleTodo(task.id)}>✓</button>
						<button onClick={() => handleRemoveTodo(task.id)}>Remove</button>
					</div>
				))}
			</ol>
		</>
	);
};

export default todolist;
