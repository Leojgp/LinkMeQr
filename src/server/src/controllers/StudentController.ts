import { Request, Response } from 'express';
import ServerService from '../services/ServerService';
import { Student } from '../entities/Student';


export const signupStudentController = async (req: Request, res: Response): Promise<void> => {
  const { user, password, nombre, grado, aula, ciudad ,usaBus, ordenador }: Student = req.body;

  try {
    const serverService = await ServerService.getInstance(); 
    await serverService.signUpStudent({ user, password, nombre, grado, aula, ciudad, usaBus, ordenador});
    res.status(201).json({ mensaje: 'Estudiante registrado con éxito' });
  } catch (error:any) {
    if (error.code === 11000) { 
     res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
    }
    console.error(error);
    res.status(500).json({ mensaje: 'Error al registrar al estudiante' });
  }
  
};

export const getStudentsController = async (req: Request, res: Response): Promise<void> => {
  try {
    const serverService = await ServerService.getInstance(); 
    const estudiantes = await serverService.getStudents();
    res.status(200).json(estudiantes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los estudiantes' });
  }
};

export const getStudentsByNameController = async (req: Request, res: Response): Promise<void> => {
  const { user } = req.params;
  console.log("Buscando estudiante con nombre de usuario:", user);

  try {
    const serverService = await ServerService.getInstance(); 
    const estudiante = await serverService.getStudentById(user);

    if (estudiante) {
      res.status(200).json(estudiante);
    } else {
      res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener al estudiante', error: Error });
  }
};
