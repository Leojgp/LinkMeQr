async function recogerDatos() {
    const student = {
        nombre: "Juan Pérez",
        grado: "10°",
        aula: "A2",
        ciudad: "Madrid",
        usaBus: true,
    };

    try {
        const response = await fetch('http://localhost:3000/api/registro', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(student),
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log("Usuario registrado correctamente:", data);
    } catch (error) {
        console.error("Error al registrar estudiante:", error);
    }
}

recogerDatos();
