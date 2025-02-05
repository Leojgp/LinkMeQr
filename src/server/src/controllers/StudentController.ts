import { Request, Response } from 'express';
import ServerService from '../services/ServerService';
import { Student } from '../entities/Student';

const serverService = ServerService.getInstance();

export const signupStudentController = (req: Request, res: Response): void => {
  const { nombre, grado, aula, ciudad, usaBus }: Student = req.body;
  try {
    serverService.signUpStudent({ nombre, grado, aula, ciudad, usaBus });
    res.status(201).json({ mensaje: 'Estudiante registrado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar al estudiante'});
  }
};

export const getStudentsController = (req: Request, res: Response): void => {
  try {
    const estudiantes = serverService.getStudents();
    res.status(200).json(estudiantes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los estudiantes'});
  }
};

export const getStudentByNameController = (req: Request, res: Response): void => {
  const { nombre } = req.params;
  try {
    const estudiante = serverService.getStudentById(nombre);
    if (estudiante) {
      res.status(200).json(estudiante);
    } else {
      res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener al estudiante'});
  }
};
