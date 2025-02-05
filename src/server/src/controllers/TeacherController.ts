import { Request, Response } from 'express';
import ServerService from '../services/ServerService';
import { Teacher } from '../entities/Teacher';

const serverService = ServerService.getInstance();

export const signupTeacherController = (req: Request, res: Response): void => {
  const { nombre, asignatura  }: Teacher = req.body;
  try {
    serverService.signUpTeacher({ nombre, asignatura});
    res.status(201).json({ mensaje: 'Profesor registrado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar al profesor'});
  }
};

export const getTeachersController = (req: Request, res: Response): void => {
  try {
    const teachers = serverService.getTeachers();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los profesores'});
  }
};

export const getTeachersByNameController = (req: Request, res: Response) => {
  const { nombre } = req.params;
  console.log("Buscando profesores con nombre:", nombre); 

  const estudiante = ServerService.getInstance().getTeacherById(nombre);

  if (estudiante) {
    res.status(200).json(estudiante);
  } else {
    res.status(404).json({ mensaje: 'Profesor no encontrado' });
  }
};

