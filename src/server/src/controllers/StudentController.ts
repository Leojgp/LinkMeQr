import { Request, Response } from 'express';
import ServerService from '../services/ServerService';
import { Student } from '../entities/Student';

export const signupStudentController = async (req: Request, res: Response): Promise<void> => {
  const { nombre, grado, aula, ciudad ,usaBus }: Student = req.body;

  try {
    const serverService = await ServerService.getInstance(); 
    await serverService.signUpStudent({ nombre, grado, aula, ciudad, usaBus });
    res.status(201).json({ mensaje: 'Estudiante registrado con éxito' });
  } catch (error) {
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
  const { nombre } = req.params;
  console.log("Buscando estudiante con nombre:", nombre);

  try {
    const serverService = await ServerService.getInstance(); 
    const estudiante = await serverService.getStudentById(nombre);

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
