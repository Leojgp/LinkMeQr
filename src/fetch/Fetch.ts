import { Student } from "../entities/Student";

export class Fetch{
  async getStudentByName(name:string):Promise<Student>{
    const data = await fetch(`http:192.168.1.140:3000/students/${name}`)
    const student = await data.json();
    console.log(student)
    return student;
  }
}