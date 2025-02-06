import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createStudent } from '../redux/states/studentSlice';

export default function SignUpComponent() {
  const dispatch = useDispatch();

  const handleRegister = () => {
    const studentData = {
      user: 'nuevoUsuario',
      password: 'password123',
      nombre: 'Leonardo',
      grado: '2DAM',
      aula: '211',
      ciudad: 'Otura',
      usaBus: false,
    };

    dispatch(createStudent(studentData));

    Alert.alert('Registro exitoso', 'Estudiante registrado con éxito');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
      />
      <TextInput
        style={styles.input}
        placeholder="Grado"
      />
      <TextInput
        style={styles.input}
        placeholder="Aula"
      />
      <TextInput
        style={styles.input}
        placeholder="Ciudad"
      />
      <TextInput
        style={styles.input}
        placeholder="Ordenador"
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: 40,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    width: '100%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
