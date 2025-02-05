import React, { Component } from "react";
import { StyleSheet, View, Text, ViewStyle, TextStyle } from "react-native";
import MaterialButtonPrimary from "./MaterialButtonPrimary";
import MaterialStackedLabelTextbox from "./MaterialStackedLabelTextbox";
import MaterialRightIconTextbox from "./MaterialRightIconTextBox";

interface FormComponentProps {
  style?: ViewStyle;
}

const FormComponent: React.FC<FormComponentProps> = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.bienvenidoDeVuelta}>Bienvenido De Vuelta</Text>
      <MaterialStackedLabelTextbox
        style={styles.materialStackedLabelTextbox}
      />
      <MaterialRightIconTextbox
        style={styles.materialRightIconTextbox}
      />
      <MaterialButtonPrimary
        style={styles.submitButton}
        name={'Submit'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  bienvenidoDeVuelta: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 58,
    width: 299,
    fontSize: 30,
    marginLeft: 6
  } ,
  materialStackedLabelTextbox: {
    height: 60,
    width: 272,
    marginLeft: 6
  } ,
  materialRightIconTextbox: {
    height: 43,
    width: 272,
    marginTop: 31,
    marginLeft: 6
  } ,
  submitButton: {
    height: 45,
    width: 311,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,1)",
    marginTop: 427
  }
});

export default FormComponent;

