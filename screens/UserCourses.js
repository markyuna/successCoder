import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Alert, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native'
import EmptyMsg from '../components/EmptyMsg'
import globalStyles from '../styles/globalStyles'
import { deleteCourse} from '../redux/actions/actionDeleteCourse'

import { AntDesign } from '@expo/vector-icons';

const UserCourses = ({navigation}) => {

  const dispatch = useDispatch()

  const handleDeleteCourse = (courseId) => {
    Alert.alert(
      'Attention',
      'Voulez vous vraiment supprimer cette formation ?',
       [
        { text: 'NON'},
        { 
          text: 'OUI',
          onPress: () => dispatch(deleteCourse(courseId))
        }
       ]
    )
    
  }

  const loggedInmemberCourses = useSelector(state => state.courses.loggedInmemberCourses);

  if (loggedInmemberCourses.length > 0) {
    return (
      <FlatList 
        data={loggedInmemberCourses}
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
                onPress={() => handleDeleteCourse(item.id)}
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

export default UserCourses