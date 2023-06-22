import { TouchableOpacity, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import globalStyles from '../styles/globalStyles';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

const PaidItems = ({ totalPrice, date, courseDetails }) => {

  const [isShowing, setIsShowing] = useState(false);

  const handleShow = (isShowing) => {
    setIsShowing(prevState => !prevState);
  }

  return (
    <ScrollView style={styles.paidCoursesContainer}>
      <View style={styles.paidCourses}>
        <Text style={styles.totalPaid}>{parseFloat(totalPrice).toFixed(2)} €</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <TouchableOpacity
        onPress={() => handleShow(!isShowing)}
        style={styles.iconBtn}

      >
        <AntDesign 
          name={ isShowing ? "minuscircleo" : "pluscircleo" }
          size={24} 
          color="black" 

        />
      </TouchableOpacity>

    {
      isShowing && (
        <View style={styles.detailsPaidCourses}>
          <Text>Titre: {courseDetails.title}</Text>
          <Text>Prix: {courseDetails.price}</Text>
          <Text>Id: {courseDetails.id}</Text>
        </View>
      )
    }

    </ScrollView>
  );
};

export default PaidItems;

const styles = StyleSheet.create({
  paidCoursesContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    margin: 20,
    padding: 15,
  },
  paidCourses: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  totalPaid: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  datePaid: {
    fontSize: 18,
  },
  date: {
    fontSize: 18,
  },
  iconBtn: {
    alignSelf: 'flex-end',
  },
  detailsPaidCourses: {
    marginTop: 10,
    borderTopColor: globalStyles.green,
    borderTopWidth: 1,
  },
});
