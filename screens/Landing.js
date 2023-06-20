import { StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CourseItem from '../components/CourseItem'
import EmptyMsg from '../components/EmptyMsg'

const Landing = ({navigation}) => {

  const existingCourses = useSelector(state => state.courses.existingCourses)

  if (existingCourses.length) {
    return (
      <FlatList 
        data={existingCourses}
        renderItem={({item}) => (
          <CourseItem 
            image={item.image}
            title={item.title}
            price={item.price}
            viewDetails={() => navigation.navigate('Details', {
                courseId: item.id
            })}
            onAddToCart={() => navigation.navigate('add to cart')}
          />
        )}
      />
    )
  } 
  return <EmptyMsg text="Pas de cours a afficher" />

}

export default Landing

const styles = StyleSheet.create({})