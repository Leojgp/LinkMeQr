import { Student } from '../entities/Student';
import {studentSlice} from './states/studentSlice';
import { configureStore } from '@reduxjs/toolkit'

export interface AppStore{
  student: Student
}

export default configureStore({
  reducer: {
    student: studentSlice.reducer
  },
})