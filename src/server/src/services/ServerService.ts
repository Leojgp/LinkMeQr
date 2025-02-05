import { Student } from '../entities/Student';

class ServerService {
  private static students: Student[] = [];
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
  
}

export default ServerService;
