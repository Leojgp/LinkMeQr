import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";


interface PaginaInicioProps {
  // Define any props if needed
}

const MainPage: React.FC<PaginaInicioProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.go2Class}>Go2Class</Text>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>
          No más vueltas, ve directo a clase.
        </Text>
        <MaterialButtonPrimary
          style={styles.loginButton}
          name={'Iniciar Sesión'}
        />
        <MaterialButtonPrimary
          style={styles.registerButton}
          name={'Registrarse'}
        />
      </View>
      <Image
        source={require("../assets/images/image_ozhE..png")}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  go2Class: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 44,
    width: 163,
    lineHeight: 45,
    fontSize: 34,
    marginTop: 71,
    alignSelf: "center"
  },
  rect: {
    width: 560,
    height: 504,
    backgroundColor: "rgba(74,144,226,1)",
    marginTop: 221,
    justifyContent: 'center'
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    fontWeight: 'bold',
    color: "rgba(218,236,250,1)",
    height: 173,
    width: 278,
    fontSize: 30,
    marginTop: 41,
    marginLeft: 49
  },
  loginButton: {
    height: 45,
    width: 311,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    marginTop: 51,
    marginLeft: 32
  },
  registerButton: {
    height: 45,
    width: 311,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,1)",
    marginTop: 34,
    marginLeft: 32
  },
  image: {
    height: 200,
    width: 200,
    marginTop: -706,
    alignSelf: "center"
  }
});

export default MainPage;

