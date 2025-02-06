import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useStudents } from '../hooks/useStudent';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


export default function InfoScreen() {
  const studentData = useSelector((state: RootState) => state.student); 
  const {student, loading} = useStudents(studentData.user);
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
