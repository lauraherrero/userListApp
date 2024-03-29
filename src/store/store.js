import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from "./users/userSlice";


export const store = configureStore({

  reducer: {
    users: userSlice.reducer,
  }
})