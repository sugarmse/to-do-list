import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
	id: number;
	text: string;
	completed: boolean;
}
interface TodoState {
	todos: Todo[];
}
const initialState: TodoState = {
	todos: [],
};
const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			state.todos.push({
				id: state.todos.length + 1,
				text: action.payload,
				completed: false,
			});
		},
	},
});
export const {addTodo}=todoSlice.actions;
export default todoSlice.reducer;
