async function recogerDatos() {
    const students = {
        "nombre": "Pitres",
        "grado": "4to",          
        "aula": "A4",            
        "ciudad": "Madrid",      
        "usaBus": true,          
        "ordenador": 1          
    };

    try {
        const response = await fetch('http://localhost:3000/signupStudent', {  
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
        console.error("Error al registrar alumno:", error);
    }
}

recogerDatos();
