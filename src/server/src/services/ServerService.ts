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
    return ServerService.students.find(est => est.nombre === name);
  }
}

export default ServerService;
