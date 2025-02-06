import { Request, Response } from 'express';
import ServerService from '../services/ServerService';
import { Teacher } from '../entities/Teacher';

export const signupTeacherController = async (req: Request, res: Response): Promise<void> => {
  const { user, password, nombre, asignatura }: Teacher = req.body;

  try {
    const serverService = await ServerService.getInstance(); 
    await serverService.signUpTeacher({ user, password, nombre, asignatura});
    res.status(201).json({ mensaje: 'Profesor registrado con éxito' });
  } catch (error:any) {
    if (error.code === 11000) { 
      res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
     }
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
  const { user } = req.params;

  try {
    const serverService = await ServerService.getInstance(); 
    const teacher = await serverService.getTeacherById(user);

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
