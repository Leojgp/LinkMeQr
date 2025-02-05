import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ServerService from './services/ServerService';
import { signupStudentController, getStudentsController, getStudentByNameController } from './controllers/StudentController';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const serverService = ServerService.getInstance();

app.post('/signup', signupStudentController);
app.get('/students', getStudentsController);
app.get('/students/:name', getStudentByNameController);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
