import React, { FC } from 'react';
import { StyleSheet, View, Text, TextInput, ViewStyle, TextStyle } from 'react-native';

interface MaterialStackedLabelTextboxProps {
  style?: ViewStyle;
}

const MaterialStackedLabelTextbox: FC<MaterialStackedLabelTextboxProps> = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>StackedLabel</Text>
      <TextInput placeholder="Input" style={styles.inputStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent"
  } as ViewStyle,
  label: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.38,
    paddingTop: 16
  } as TextStyle,
  inputStyle: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 8
  } as TextStyle
});

export default MaterialStackedLabelTextbox;