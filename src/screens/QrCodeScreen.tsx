import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import {useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function QrCodeScreen() {
  const studentData = useSelector((state: RootState) => state.student);
  
  const generateQRCode = () => {
    const studentName = studentData.user;
    const link = `myapp://student/${studentName}`;
    return <QRCode value={link} size={240} />;
  };

  return (
    <View style={styles.container}>
      {generateQRCode()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
});
