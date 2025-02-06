import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface PropsType{
    navigation:any
}
export default function HomeScreen({navigation}:PropsType) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('QrCode')}>
              <Text style={styles.buttonText}>Mostrar código QR</Text>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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
})