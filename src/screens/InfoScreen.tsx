import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStudents } from '../hooks/useStudent'


export default function InfoScreen() {
    const { student, loading } = useStudents('Pitres');
    if (loading===false) {
        return <Text>Loading...</Text>;
    }
  return (
    <View>
      <Text>{student?.nombre??'Usuario no encontrado'}</Text>
      <Text>{student?.grado}</Text>
      <Text>{student?.aula}</Text>
      <Text>{student?.ciudad}</Text>
      <Text>{student?.usaBus}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})