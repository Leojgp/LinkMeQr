import { Student } from "../entities/Student";

export class Fetch{
  async getStudentByName(name:string):Promise<Student>{
    const data = await fetch(`http:192.168.1.140:3000/students/${name}`)
    const student = await data.json();
    console.log(student)
    return student;
  }
  async signupStudent(studentData: any): Promise<any> {
    try {
      const response = await fetch('http://192.168.1.140/signupStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al registrar al estudiante');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}