import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isLoading: false,
    albums: [],
    photos: [],
    todos: [],
  },
  reducers: {
    startLoadingUsers: (state) => {
      state.isLoading = true;
    },
    setUsers: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.users;
    },
    onDeleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoadingUsers,
  setUsers,
  onDeleteTodo,
} = userSlice.actions;
