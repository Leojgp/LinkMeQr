import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { createStudent } from '../redux/states/studentSlice';
import { Fetch } from '../fetch/Fetch';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

interface PropsType{
  navigation: any
}
export default function LoginComponent({navigation}:PropsType) {
  const dispatch = useDispatch();
  const fetch = new Fetch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const studentData = await fetch.getStudentByUser(username);
      
      if (studentData && studentData.password === password) {
        dispatch(createStudent(studentData)); 
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Usuario o contraseña incorrectos');
      }
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Error al iniciar sesión');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bienvenidoDeVuelta}>Bienvenido de vuelta</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
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
  bienvenidoDeVuelta: {
    fontFamily: 'roboto-700',
    color: '#121212',
    height: 58,
    fontSize: 30,
    marginLeft: 6,
  },
  input: {
    height: 60,
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
