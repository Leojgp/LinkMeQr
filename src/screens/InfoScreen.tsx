import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStudents } from '../hooks/useStudent'
import QRCode from 'react-native-qrcode-svg';


export default function InfoScreen() {
    const { student, loading } = useStudents('Pitres');
    if (loading===false) {
        return <Text>Loading...</Text>;
    }
    const studentInfo = JSON.stringify({
        nombre: student?.nombre ?? 'Usuario no encontrado',
        grado: student?.grado,
        aula: student?.aula,
        ciudad: student?.ciudad,
        usaBus: student?.usaBus,
      });   
  return (
    <View>
      <Text>{student?.nombre??'Usuario no encontrado'}</Text>
      <Text>{student?.grado}</Text>
      <Text>{student?.aula}</Text>
      <Text>{student?.ciudad}</Text>
      <Text>{student?.usaBus}</Text>
      <QRCode
      value={studentInfo} 
    />
    </View>
  )
}

const styles = StyleSheet.create({})