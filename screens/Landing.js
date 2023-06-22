import { StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/actionAddToCart'
import CourseItem from '../components/CourseItem'
import EmptyMsg from '../components/EmptyMsg'

const Landing = ({navigation}) => {

  const dispatch = useDispatch()

  const handleAddToCart = (course) => {
    dispatch(addToCart(course));
    alert('Cours ajouté au panier');
  }

  const existingCourses = useSelector(state => state.courses.existingCourses);
  const coursesToDisplay = existingCourses.filter(course => course.selected === false);

  if (coursesToDisplay.length) {
    return (
      <FlatList 
        data={coursesToDisplay}
        renderItem={({item}) => (
          <CourseItem 
            image={item.image}
            title={item.title}
            price={item.price}
            viewDetails={() => navigation.navigate('Details', {
                courseId: item.id,
                title: item.title,
            })}
            onAddToCart={() => handleAddToCart(item)}
          />
        )}
      />
    )
  } 
  return <EmptyMsg text="Pas de cours a afficher" />

}

export default Landing

const styles = StyleSheet.create({})