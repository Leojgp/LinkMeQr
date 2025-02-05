import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { signupStudentController, getStudentsController, getStudentsByNameController } from './controllers/StudentController';
import { signupTeacherController, getTeachersController, getTeachersByNameController } from './controllers/TeacherController';
import { connectDB } from './db/dbClient';

const app = express();
const port = 3000;

app.use(cors({
  credentials: true
}));
app.use(bodyParser.json());

connectDB().then(() => {
  app.post('/signupStudent', signupStudentController);
  app.get('/students', getStudentsController);
  app.get('/students/:nombre', getStudentsByNameController);

  app.post('/signupTeacher', signupTeacherController);
  app.get('/teachers', getTeachersController);
  app.get('/teachers/:nombre', getTeachersByNameController);

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
