import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';

export default function QrCodeScreen() {
    const generateQRCode = () => {
        const studentName = "Pitres"; 
        const link = `myapp://student/${studentName}`;
        
        return <QRCode value={link} />;
      };
      
  return (
    <View>
      <Text>QrCodeScreen</Text>
      {generateQRCode()}
    </View>
  )
}

const styles = StyleSheet.create({})