import React, { FC, useEffect } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import FormComponent from "../components/FormComponent";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { createStudent } from "../redux/states/studentSlice";

interface LoginScreenProps {
  navigation: any;  
}

const LoginScreen: FC<LoginScreenProps> = ({ navigation }: LoginScreenProps) => {
  const testStudent = {
    nombre: "Jesús",
    grado: "5to",
    aula: "A1",
    ciudad: "Madrid",
    usaBus: true
  };

  const studentState = useSelector((store: AppStore) => store.student);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createStudent(testStudent));
  }, [dispatch]);

  console.log(studentState);

  return (
    <View style={styles.container}>
      <FormComponent style={styles.formComponent} />
      <Text>{testStudent.nombre}</Text>
    </View>
  );
};

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
