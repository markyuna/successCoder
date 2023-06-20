import React, { useEffect }  from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const CourseInfos = ({navigation, route}) => {
    const courseId = route.params.courseId;

    const selectedCourse = useSelector(state => state.courses.existingCourses.find(course => course.id === courseId))

    useEffect(() => {
      selectedCourse.setOptions({
        title: selectedCourse.title
      })
    }, [navigation])

  return (
    <View>
      <Text>CourseInfo</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CourseInfos
