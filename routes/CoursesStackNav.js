import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../screens/Landing';
import CourseInfos from '../screens/CourseInfos';
import Cart from '../screens/Cart';
import globalStyles from '../styles/globalStyles';

const CoursesStackNavigator = createStackNavigator();

export const CoursesNavigator = () => {
    return (
        <CoursesStackNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <CoursesStackNavigator.Screen 
                name="Landing" 
                component={Landing} 

                />
            <CoursesStackNavigator.Screen 
                name="Details" 
                component={CourseInfos}
                options={({route}) => ({
                    title: route.params.title
                })}
            />
            <CoursesStackNavigator.Screen 
                name="Cart" 
                component={Cart} 

                />
        </CoursesStackNavigator.Navigator>
    );
}
