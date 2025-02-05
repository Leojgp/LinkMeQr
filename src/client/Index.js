async function recogerDatos() {
    const students = 
        {
            nombre: "Pepe",
            grado: "2DAM",
            aula: "211",
            ciudad: "Otura",
            usaBus: false,
        };

    try {
        const response = await fetch('http://localhost:3000/signup', {
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
        console.log("Usuarios registrados correctamente:", data);
    } catch (error) {
        console.error("Error al registrar estudiantes:", error);
    }
}

recogerDatos();
