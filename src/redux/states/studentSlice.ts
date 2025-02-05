import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Student } from "../../entities/Student"

export const StudentEmptyState: Student = {
    nombre: '',
    grado: '',
    aula: '',
    ciudad:'',
    usaBus: false,

}

export const studentSlice = createSlice({
  name: 'student',
  initialState: StudentEmptyState,
  reducers: {
    createStudent: (state, action) => action.payload,
    modifyStudent: (state, action) => ({...state,...action.payload}),
    resetStudent: () => StudentEmptyState,
  },
});

export const {createStudent,modifyStudent} = studentSlice.actions;
export default studentSlice.reducer;