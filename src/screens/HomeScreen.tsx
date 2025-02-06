import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface PropsType {
    navigation: any
}
export default function HomeScreen({ navigation }: PropsType) {
    const studentData = useSelector((state: RootState) => state.student);
    const handleDeepLink = () => {
        const studentUser = studentData.user;
        const link = `myapp://student/${studentUser}`;

        Linking.openURL(link)
            .catch(err => console.error('Error al intentar abrir el enlace profundo:', err));
    };
    return (
        <View>
            <Text>HomeScreen</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QrCode')}>
                <Text style={styles.buttonText}>Mostrar código QR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleDeepLink}>
                <Text style={styles.buttonText}>Ir a la Info del Estudiante</Text>
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