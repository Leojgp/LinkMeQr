import { Request, Response } from 'express';
import ServerService from '../services/ServerService';
import { Teacher } from '../entities/Teacher';

export const signupTeacherController = async (req: Request, res: Response): Promise<void> => {
  const { nombre, asignatura }: Teacher = req.body;

  try {
    const serverService = await ServerService.getInstance(); 
    await serverService.signUpTeacher({ nombre, asignatura });
    res.status(201).json({ mensaje: 'Profesor registrado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al registrar al profesor' });
  }
};

export const getTeachersController = async (req: Request, res: Response): Promise<void> => {
  try {
    const serverService = await ServerService.getInstance(); 
    const teachers = await serverService.getTeachers();
    res.status(200).json(teachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los profesores' });
  }
};

export const getTeachersByNameController = async (req: Request, res: Response): Promise<void> => {
  const { nombre } = req.params;
  console.log("Buscando profesor con nombre:", nombre);

  try {
    const serverService = await ServerService.getInstance(); 
    const teacher = await serverService.getTeacherById(nombre);

    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.status(404).json({ mensaje: 'Profesor no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener al profesor', error: Error});
  }
};
