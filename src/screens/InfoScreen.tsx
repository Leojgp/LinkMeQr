import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useStudents } from '../hooks/useStudent';


export default function InfoScreen() {
  const route = useRoute<any>();
  const { id } = route.params; 
  const { student, loading } = useStudents(id); 

  if (loading === false) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Usuario: {student?.user}</Text>
      <Text>Nombre: {student?.nombre}</Text>
      <Text>Grado: {student?.grado}</Text>
      <Text>Aula: {student?.aula}</Text>
      <Text>Ciudad: {student?.ciudad}</Text>
      <Text>Ordenador: {student?.ordenador}</Text>
      <Text>{student?.usaBus ? 'Usa bus' : 'No usa bus'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
