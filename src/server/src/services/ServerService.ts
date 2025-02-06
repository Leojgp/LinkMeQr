import { Alumno, Profesor } from '../db/users';
import { Student } from '../entities/Student';
import { Teacher } from '../entities/Teacher';
import { connectDB } from '../db/dbClient';

class ServerService {
  private static instance: ServerService;

  private constructor() {}

  public static async getInstance(): Promise<ServerService> {
    if (!this.instance) {
      this.instance = new ServerService();
      await connectDB();
    }
    return this.instance;
  }

  async signUpStudent(student: Student) {
    try {
      const newStudent = new Alumno(student);
      await newStudent.save();
    } catch (error:any) {
      throw new Error("No se pudo guardar el estudiante: " );
    }
  }

  async getStudents() {
    try {
      return await Alumno.find();
    } catch (error:any) {
      throw new Error("Error al obtener los estudiantes: ");
    }
  }

  async getStudentById(user: string) {
    try {
      return await Alumno.findOne({ user });
    } catch (error:any) {
      throw new Error("Error al obtener el estudiante: ");
    }
  }

  async signUpTeacher(teacher: Teacher) {
    try {
      const newTeacher = new Profesor(teacher);
      await newTeacher.save();
    } catch (error:any) {
      throw new Error("No se pudo guardar el profesor: ");
    }
  }

  async getTeachers() {
    try {
      return await Profesor.find();
    } catch (error:any) {
      throw new Error("Error al obtener los profesores: ");
    }
  }

  async getTeacherById(nombre: string) {
    try {
      return await Profesor.findOne({ nombre });
    } catch (error:any) {
      throw new Error("Error al obtener el profesor: " );
    }
  }
}

export default ServerService;
