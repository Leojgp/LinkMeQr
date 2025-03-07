import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";

interface MaterialButtonPrimaryProps {
  style?: ViewStyle;
  name:string;
  nav?:any;
  textStyle?:TextStyle;
}

const MaterialButtonPrimary: React.FC<MaterialButtonPrimaryProps> = ({name,style,nav,textStyle}) => {

    
  return (
    <TouchableOpacity style={[styles.container, style]}
    onPress={()=>{
        nav.navigate({name})
    }}>
      <Text style={textStyle}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  caption: {
    color: "#000000",
    fontSize: 14
  }
});

export default MaterialButtonPrimary;

