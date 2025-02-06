import { Student } from "../entities/Student";

export class Fetch {
  async getStudentByUser(user: string): Promise<Student> {
    const data = await fetch(`http:192.168.1.68:3000/students/${user}`)
    const student = await data.json();
    return student;
  }
  async signupStudent(studentData: any): Promise<any> {
    try {
      const response = await fetch('http://192.168.1.68:3000/signupStudent', {
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
  async getStudents(studentData: any): Promise<any> {
    try {
      const response = await fetch('http://192.168.1.68:3000/students');
      const students = await response.json();
    } catch (error) {
      throw error;
    }
  }
  //En un futuro añadiré la línea de bus con el horario del estudiante
  /*async getBuses(city: string) {
    try {
      const response = await fetch(`http://api.ctan.es/v1/Consorcios/3/modostransporte/1/lineas`);
      const buses = await response.json();
    } catch (error) {
      throw error;
    }
  }*/
}