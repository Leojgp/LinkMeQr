import mongoose, { model, Schema } from 'mongoose';



const AlumnoSchema = new Schema({
    user: {type:String, required:true,unique: true},
    password:{type:String, required: true},
    nombre: { type: String, required: true },
    grado: { type: String, required: true },
    aula: { type: String, required: true },
    ordenador: {type: Number, required:false},
    ciudad: { type: String, required: true },
    usaBus: { type: Boolean, default: false, required: true  }
});

const ProfesorSchema = new Schema({
    user: {type:String, required:true,unique: true},
    password:{type:String, required: true},
    nombre: { type: String, required: true },
    asignatura: { type: String, required: true  }, 
    
});

const Alumno = mongoose.models.Alumno || model("Alumno", AlumnoSchema);
const Profesor = mongoose.models.Profesores || model("Profesores",ProfesorSchema);

export {Alumno, Profesor };
