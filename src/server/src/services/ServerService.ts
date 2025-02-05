import { Student } from '../entities/Student';
import { Teacher } from '../entities/Teacher';

class ServerService {
  private static students: Student[] = [];
  private static teachers: Teacher[] = [];
  private static instance: ServerService;

  private constructor() {}

  public static getInstance(): ServerService {
    if (!this.instance) {
      this.instance = new ServerService();
    }
    return this.instance;
  }

  public signUpStudent(student: Student): void {
    ServerService.students.push(student);
  }

  public getStudents(): Student[] {
    return ServerService.students;
  }

  public getStudentById(name: string): Student | undefined {
    for (let i = 0; i < ServerService.students.length; i++) {
      if (ServerService.students[i].nombre === name) {
        return ServerService.students[i];
      }
    }
    return undefined; 
  }
  

public signUpTeacher(teacher: Teacher): void {
  ServerService.teachers.push(teacher);
}

public getTeachers(): Teacher[] {
  return ServerService.teachers;
}

public getTeacherById(name: string): Teacher | undefined {
  for (let i = 0; i < ServerService.teachers.length; i++) {
    if (ServerService.teachers[i].nombre === name) {
      return ServerService.teachers[i];
    }
  }
  return undefined; 
}

}

export default ServerService;
