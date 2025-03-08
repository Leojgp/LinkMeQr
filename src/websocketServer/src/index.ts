import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

interface Student {
  studentId: string;
  studentName: string;
  ciudad: string;
}

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

const students: Record<string, Student> = {
  "1": { studentId: "1", studentName: "Juan", ciudad: "Madrid" },
  "2": { studentId: "2", studentName: "Pedro", ciudad: "Barcelona" },
  "3": { studentId: "3", studentName: "Ana", ciudad: "Madrid" },
};

io.on("connection", (socket) => {
  console.log("Cliente conectado");

  socket.emit("students", Object.values(students));
  socket.emit("cities", getCities());

  socket.on("studentLogin", (data: Student) => {
    console.log("Datos recibidos de studentLogin:", data); 
  
    if (!data.studentId || !data.studentName || !data.ciudad) {
      console.log(`Error: Datos incompletos para el estudiante. studentId: ${data.studentId}, studentName: ${data.studentName}, ciudad: ${data.ciudad}`);
      return;
    }
    
    if (!students[data.studentId]) {
      students[data.studentId] = data;
      console.log(`Nuevo estudiante registrado: ${data.studentName}, Ciudad: ${data.ciudad}`);
    }
  
    io.emit("cityData", getCityStats());
    io.emit("cities", getCities());
  });
  

  socket.on("newCity", () => {
    console.log("Recibido evento newCity");
    io.emit("cities", getCities());
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});

const getCityStats = (): Record<string, number> => {
  const stats = Object.values(students).reduce((acc: Record<string, number>, student) => {
    acc[student.ciudad] = (acc[student.ciudad] || 0) + 1;
    return acc;
  }, {});
  console.log("Estadísticas de ciudades:", stats);
  return stats;
};

const getCities = (): string[] => {
  const cities = [...new Set(Object.values(students).map((student) => student.ciudad))];
  const filteredCities = cities.filter((city) => city != null && city !== undefined);
  console.log("Ciudades actualizadas:", filteredCities);
  return filteredCities;
};

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
