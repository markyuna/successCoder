import React from 'react'
import { TouchableOpacity, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/actionAddToCart';
import globalStyles from '../styles/globalStyles';
import { MaterialIcons } from '@expo/vector-icons';

const CourseInfos = ({navigation, route}) => {
    const courseId = route.params.courseId;

    const dispatch = useDispatch();

    const selectedCourse = useSelector(state => state.courses.existingCourses.find(course => course.id === courseId))

    const handleAddToCart = () => {
        dispatch(addToCart(selectedCourse));
        navigation.goBack();
        alert('Cours ajouté au panier')

    }

  return (
    <View>

      <ScrollView style={styles.scroll}>
          <Image 
            source={{uri: selectedCourse.image}}
            style={styles.courseImage}
          />

          <View style={styles.courseDetails}>
            <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
            <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
            <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
            <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
            <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
          </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footerTop}>
          <View style={styles.coursePriceWrapper}>
            <Text style={styles.coursePrice}>{selectedCourse.price.toFixed(2)} €</Text>
          </View>
        </View>
        <View style={styles.footerBottom}>
        <MaterialIcons 
            name="arrow-back-ios" 
            size={24}
            color={globalStyles.white}
            onPress={() => navigation.goBack()}
        />
        <TouchableOpacity 
            onPress={() => handleAddToCart(selectedCourse)}
        >

        <View style={styles.addToCart}>
            <Text style={styles.addToCartText}>Ajouter</Text>
        </View>

        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: globalStyles.lightGrey,
        height: '80%',
    },
    courseImage: {
        width: '100%',
        height: 200,
    },
    courseDetails: {
        padding: 20,
        alignItems: 'center',
    },
    courseDescription: {
        fontSize: 20,
        textAlign: 'center',
        color: globalStyles.darkGrey,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    footerContainer: {
        height: '20%',
    },
    footerTop: {
        height: '40%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    coursePriceWrapper: {
      paddingRight: 40,
    },
    coursePrice: {
        fontSize: 22,
        fontWeight: 'bold',
        color: globalStyles.green,
    },
    footerBottom: {
      backgroundColor: globalStyles.green,
        height: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
    },
    addToCart: {
        width: 120,
        height: 40,
        backgroundColor: globalStyles.lightOrange,
        borderRadius: 10,
    },    
    addToCartText: {
      fontSize: 18,
      color: globalStyles.white,
      textAlign: 'center',
      fontWeight: 'bold',
      paddingVertical: 10,
    },
})

export default CourseInfos
