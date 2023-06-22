import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserEditCourse = ({route}) => {

  const courseId = route.params.courseId
  
  return (
    <View>
      <Text>Modifier / créer une formation</Text>
    </View>
  )
}

export default UserEditCourse

const styles = StyleSheet.create({})