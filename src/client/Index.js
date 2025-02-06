async function recogerDatos() {
    const students = {
         "user": "AlbertoGamer",
         "password":"12345",
        "nombre": "Roberto",
        "grado": "2DAM",
        "aula": "211",
        "oredenador":16,
        "ciudad": "Otura",
        "usaBus": false    
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
        console.error("Error al registrar profesor:", error);
    }
}

recogerDatos();
