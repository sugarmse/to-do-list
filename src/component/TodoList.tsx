import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../state/TodoSlice";
import { RootState } from "../state/store";

const todolist = () => {
	const [newTodo, setNewTodo] = useState("");
	const dispatch = useDispatch();
	const handleAddTodo = () => {
		if (newTodo !== "") {
			dispatch(addTodo(newTodo));
			console.log(newTodo);
			setNewTodo("");
		}
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
				{todos.map((task,index)=>(<li key={index}>{task.text}</li>))}
			</ol>
		</>
	);
};

export default todolist;