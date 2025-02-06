async function recogerDatos() {
    const students = {
         "user": "Leojgp",
         "password":"Leojgp",
        "nombre": "Jesús",
        "asignatura":"Acceso a datos"        
    };

    try {
        const response = await fetch('http://localhost:3000/signupTeacher', {  
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(students)
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log("Usuario registrado correctamente:", data);
    } catch (error) {
        console.error("Error al registrar profesor:", error);
    }
}

recogerDatos();
