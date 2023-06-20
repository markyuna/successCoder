import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { CoursesNavigator } from './CoursesStackNav';
import { StyleSheet, Text, View } from 'react-native'

const AppNav = () => {
  return (
    <NavigationContainer>
      <CoursesNavigator />
    </NavigationContainer>
  )
}

export default AppNav

const styles = StyleSheet.create({})