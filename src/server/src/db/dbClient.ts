import mongoose from 'mongoose';

const uri = 'mongodb+srv://lgarpau0908:zaidinlgarpau@projectzaidin.3f3zd.mongodb.net/zaidin?retryWrites=true&w=majority&appName=ProjectZaidin';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log('Conectado a la base de datos con Mongoose');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
};

export { connectDB };
