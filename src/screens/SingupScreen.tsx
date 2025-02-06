import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUpComponent from '../components/SignUpComponent'

interface PropsType{
    navigation: any
}

export default function SingupScreen({navigation}:PropsType) {
  return (
    <View>
      <SignUpComponent navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({})