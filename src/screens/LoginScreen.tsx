import React, { Component, FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import FormComponent from "../components/FormComponent";


interface LoginScreenProps {
  // Define any props if needed
}

const LoginScreen: FC<LoginScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <FormComponent style={styles.formComponent}></FormComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  } as ViewStyle,
  formComponent: {
    height: 664,
    width: 311,
    marginTop: 61,
    marginLeft: 45
  } as ViewStyle
});

export default LoginScreen;