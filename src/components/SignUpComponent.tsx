import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createStudent } from '../redux/states/studentSlice';
import { Fetch } from '../fetch/Fetch';
import { RootState } from '../redux/store';
import { useState } from 'react';

interface PropsType {
  navigation: any;
}

export default function SignUpComponent({ navigation }: PropsType) {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [classRoom, setClass] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [computer, setComputer] = useState('');  
  const [bus, setBus] = useState('');  
  const dispatch = useDispatch();
  const fetch = new Fetch();
  
  const handleRegister = async () => {
    const newStudentData = {
      user: username,
      password,
      nombre: name,
      grado: grade,
      aula: classRoom,
      ciudad: city,
      usaBus: bus === 'Si' ? true : false,  
      ordenador: computer, 
    };
    dispatch(createStudent(newStudentData));
    try {
      const response = await fetch.signupStudent(newStudentData);
      if (response != null) {
        Alert.alert('Registro exitoso', 'El usuario ha sido registrado en la base de datos');
        navigation.navigate('Login');
      }
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Error al registrar el estudiante');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bienvenidoDeVuelta}>Registrese para empezar</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Grado"
        value={grade}
        onChangeText={setGrade}
      />
      <TextInput
        style={styles.input}
        placeholder="Aula"
        value={classRoom}
        onChangeText={setClass}
      />
      <TextInput
        style={styles.input}
        placeholder="Ciudad"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Ordenador"
        keyboardType='numeric'
        value={computer}
        onChangeText={(text)=> setComputer(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Bus (Si/No)"
        value={bus}
        onChangeText={setBus}
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
    marginTop: 10,
  },
  bienvenidoDeVuelta: {
    fontFamily: 'roboto-700',
    color: '#121212',
    height: 58,
    fontSize: 30,
    marginLeft: 6,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    width: '100%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'rgba(74,144,226,1)',
    padding: 25,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
