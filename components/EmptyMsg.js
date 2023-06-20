import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles/globalStyles'

const EmptyMsg = ({text}) => {
  return (
    <View style={styles.container}>
      <Text>{styles.text}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    courseContainer: {
        padding: 20,
        alignItems: 'center',
    },
    text: {
        color: globalStyles.green,
        fontSize: 18,
    },
})

export default EmptyMsg