import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useStudents } from '../hooks/useStudent';

type InfoScreenRouteProp = {
  id: string;
};

export default function InfoScreen() {
  const route = useRoute<any>();
  const { id } = route.params; 
  const { student, loading } = useStudents(id); 

  if (loading === false) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{student?.nombre ?? 'Usuario no encontrado'}</Text>
      <Text>{student?.grado}</Text>
      <Text>{student?.aula}</Text>
      <Text>{student?.ciudad}</Text>
      <Text>{student?.usaBus ? 'Usa bus' : 'No usa bus'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
