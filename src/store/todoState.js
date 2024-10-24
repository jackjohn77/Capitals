import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux store for Todo items
const todoSlice = createSlice({
  name: "Todo", // Name of the slice
  initialState: {
    // Initial state of the slice
    list: [
      // List of tasks
      { content: "Content1", completed: false },
      { content: "Content2", completed: false },
    ],
    heading: "Todo App", // Heading of the Todo app
    total: 2, // Total number of tasks
    todo: 2, // Number of incomplete tasks
    complete: 0, // Number of completed tasks
  },
  reducers: {
    // Function to add a new task
    add: (state, action) => {
      state.list.push({ content: action.payload, completed: false }); // Add new task to the list
      state.total += 1; // Increment total task count
      state.todo += 1; // Increment incomplete task count
    },
    // Function to edit an existing task
    edit: (state, action) => {
      const { index, content } = action.payload;
      state.list[index].content = content; // Update task content
    },
    // Function to delete a task
    deletes: (state, action) => {
      state.list.splice(action.payload, 1); // Remove task from the list
      state.total -= 1; // Decrement total task count
      state.todo -= 1; // Decrement incomplete task count
    },
    // Function to toggle the completion status of a task
    completed: (state, action) => {
      const index = action.payload;
      state.list[index].completed = !state.list[index].completed; // Toggle task completion status
      if (state.list[index].completed === true) {
        state.todo -= 1; // Decrement incomplete task count
        state.complete += 1; // Increment complete task count
      } else {
        state.todo += 1; // Increment incomplete task count
        state.complete -= 1; // Decrement complete task count
      }
    },
  },
});

// Export the action functions to be used in components
export const { add, edit, deletes, completed } = todoSlice.actions;

// Export the reducer function to be used in the store
export default todoSlice.reducer;
