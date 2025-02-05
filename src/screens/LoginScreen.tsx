import React, { Component, FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import FormComponent from "../components/FormComponent";


interface LoginScreenProps {
  navigation:any
}

const LoginScreen: FC<LoginScreenProps> = (props:LoginScreenProps) => {
const navigation = props.navigation
  return (
    <View style={styles.container}>
      <FormComponent style={styles.formComponent} nav={navigation}></FormComponent>
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