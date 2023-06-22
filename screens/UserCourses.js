import React from 'react'
import { useSelector } from 'react-redux'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native'
import EmptyMsg from '../components/EmptyMsg'
import globalStyles from '../styles/globalStyles'

import { AntDesign } from '@expo/vector-icons';

const UserCourses = ({navigation}) => {

  const existingCourses = useSelector(state => state.courses.existingCourses)

  if (existingCourses.length > 0) {
    return (
      <FlatList 
        data={existingCourses}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.couseContainer}>
            <View style={styles.courseInfo}>
              <Text numberOfLines={1} style={styles.courseTitle}>{item.title}</Text>
              <Text style={styles.coursePrice}>{item.price}</Text>
            </View>
            <View style={styles.btnIcons}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Edit', {
                  courseId: item.id
                })}
                style={styles.touchableIcon}
              >
                  <AntDesign name="edit" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => alert('ici on efface le cours')}
                style={styles.touchableIcon}
              >
                  <AntDesign name="delete" size={24} color={globalStyles.green}/>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    )
  }
    return <EmptyMsg text="Pas de cours à afficher" />
}

export default UserCourses

const styles = StyleSheet.create({
  couseContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 17,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 9,
    paddingLeft: 9,
  },
  courseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9 ,
    paddingHorizontal: 9,
  },
  courseTitle: {
    width: '80%',
  },
  coursePrice: {  
    color: globalStyles.green,
  },
  btnIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9 ,
    paddingHorizontal: 9,
  },
  touchableIcon: {
    padding: 9,
  },
})