import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import globalStyles from '../styles/globalStyles'
import { MaterialIcons } from '@expo/vector-icons';

const CoursesInCart = (props) => {
  const price = props.price !== undefined ? props.price.toFixed(2) : '';

  return (
    <View style={styles.coursesContainer}>
      <Text numberOfLines={1} style={styles.courseTitle}>{props.title}</Text>
      <Text style={styles.coursePrice}>{price} €</Text>
      <TouchableOpacity 
        onPress={props.onDelete}
      >
        <MaterialIcons name="delete-sweep" size={24} color={globalStyles.green} />
      </TouchableOpacity>
    </View>
  )
}


export default CoursesInCart

const styles = StyleSheet.create({
    coursesContainer: {
        backgroundColor: globalStyles.white,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 9,

    },
    courseTitle: {
        width: '60%',
        backgroundColor: 'yellow',
    },
    coursePrice: {
        textAlign: 'right',
        paddingRight: 9,
        width: '30%',
    },
})