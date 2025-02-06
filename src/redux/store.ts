import { Student } from '../entities/Student';
import { studentSlice } from './states/studentSlice';
import { configureStore } from '@reduxjs/toolkit';

export interface AppStore {
  student: Student;
}

const store = configureStore({
  reducer: {
    student: studentSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
