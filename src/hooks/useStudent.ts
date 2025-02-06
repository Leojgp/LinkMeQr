import { useEffect, useState } from "react"
import { Student } from "../entities/Student";
import { Fetch } from "../fetch/Fetch";


export const useStudents = (name: string) => {
    const fetch = new Fetch();
    const [student, setStudents] = useState<Student | null>(null);

    const [loading, setLoading] = useState(false);

    const loadStudent = async () => {
        const student = await fetch.getStudentByUser(name);
        if (student != null) {
            console.log(student);
            setStudents(student);
            setLoading(true);
        }
    }

    useEffect(() => {
        loadStudent();
    }, [])

    return {
        student, loading
    }
}