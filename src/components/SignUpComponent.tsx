import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createStudent } from '../redux/states/studentSlice';
import { Fetch } from '../fetch/Fetch';
import { RootState } from '../redux/store';

export default function SignUpComponent() {
  const dispatch = useDispatch();
  const fetch = new Fetch();
  const studentData = useSelector((state: RootState) => state.student);
  console.log('Estado actual:', studentData);

  const handleInputChange = (field: string, value: string) => {
    let updatedValue:string| boolean = value;
  
    if (field === 'usaBus') {
      updatedValue = value === 'Sí' ? true : false;
    }
  
    dispatch(createStudent({ ...studentData, [field]: updatedValue }));
  };
  const handleRegister = async () => {
    try {
      console.log('Datos a enviar:', studentData); 
      const response = await fetch.signupStudent(studentData);
      if(response != null){
        console.log('Estudiante registrado con éxito');
      }
      console.log('Registro exitoso');
    } catch (error: any) {
      console.log('Error', error.message || 'Error al registrar el estudiante');
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={studentData.user}
        onChangeText={(text) => handleInputChange('user', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={studentData.password}
        onChangeText={(text) => handleInputChange('password', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={studentData.nombre}
        onChangeText={(text) => handleInputChange('nombre', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Grado"
        value={studentData.grado}
        onChangeText={(text) => handleInputChange('grado', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Aula"
        value={studentData.aula}
        onChangeText={(text) => handleInputChange('aula', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ciudad"
        value={studentData.ciudad}
        onChangeText={(text) => handleInputChange('ciudad', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ordenador"
        value={studentData.usaBus ? 'Sí' : 'No'}
        onChangeText={(text) => handleInputChange('usaBus', text)}
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
