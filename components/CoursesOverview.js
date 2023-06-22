import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles/globalStyles'

const CoursesOverview = (props) => {
  return (
    <View style={styles.courseContainer}>
      <Text numberOfLines={1} style={styles.title}>{props.title} €</Text>
      <Text style={styles.price}>{props.price} €</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    courseContainer: {
        backgroundColor: globalStyles.white,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        padding: 10,
        marginTop: 9,
    },
    title: {
        width: '60%',
        backgroundColor: 'yellow',
    },
    price: {
        color: globalStyles.dimGray,
    },
})


export default CoursesOverview