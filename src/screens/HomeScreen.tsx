import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert } from "react-native";
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: FC<HomeScreenProps> = ({ navigation }: HomeScreenProps) => {
  const studentData = useSelector((state: RootState) => state.student);

  const handleProfilePress = () => {
    navigation.navigate("Info");
  };

  const handleCameraPress = () => {
    Alert.alert('Cámara','Aún no he implementado cámara')
  };

  const handleQRCodePress = () => {
    navigation.navigate("QrCode");
  };

  const handleLogoutPress = () => {
    navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <View style={styles.rect2}>
        <TouchableOpacity onPress={handleLogoutPress}>
          <Image
            source={require("../assets/images/logout.png")} 
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.centerContent}>
        <Text style={styles.bienvenidoDeVuelta1}>Conoce más sobre alguien</Text>
        <Image
          source={require("../assets/images/detective.png")}
          resizeMode="contain"
          style={styles.image}
        />
      </View>

      <View style={styles.rect}>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={handleProfilePress}>
            <Image
              source={require("../assets/images/profile.png")} 
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCameraPress}>
            <Image
              source={require("../assets/images/camera.png")}
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleQRCodePress}>
            <Image
              source={require("../assets/images/qrcode.png")} 
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  rect: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 69,
    backgroundColor: "rgba(74,144,226,1)",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  rect2: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: 76,
    backgroundColor: "rgba(74,144,226,1)",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20,
  },
  bienvenidoDeVuelta1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 30,
    marginBottom: 20,
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 50,
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 50,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  iconImage: {
    width: 40,
    height: 40,
  },
});

export default HomeScreen;