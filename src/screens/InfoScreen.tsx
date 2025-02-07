import React, { FC } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useStudents } from '../hooks/useStudent';
import { useRoute } from '@react-navigation/native';

interface RouteParams {
  userId: string;
}

function InfoScreen() {
  const route = useRoute<any>();
  const { id } = route.params; 
  const { student, loading } = useStudents(id);
  if (loading === false) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de {student?.user}</Text>
      <Image source={require('../assets/images/profileInfo.png')} resizeMode="contain" style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Usuario:</Text>
        <Text style={styles.infoText}>{student?.user}</Text>

        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.infoText}>{student?.nombre}</Text>

        <Text style={styles.label}>Grado:</Text>
        <Text style={styles.infoText}>{student?.grado}</Text>

        <Text style={styles.label}>Aula:</Text>
        <Text style={styles.infoText}>{student?.aula}</Text>

        <Text style={styles.label}>Ciudad:</Text>
        <Text style={styles.infoText}>{student?.ciudad}</Text>

        <Text style={styles.label}>Nº Ordenador:</Text>
        <Text style={styles.infoText}>{student?.ordenador}</Text>

        <Text style={styles.label}>Transporte:</Text>
        <Text style={styles.infoText}>{student?.usaBus ? 'Usa bus' : 'No usa bus'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, 
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  image: {
    height: 170,
    width: 170,
    marginBottom: 15,
  },
  infoContainer: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#555',
  },
  infoText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  loadingText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  }
});

export default InfoScreen;
