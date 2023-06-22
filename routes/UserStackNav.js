import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderIcon from '../components/CustomHeaderIcon';
import UserCourses from '../screens/UserCourses';
import UserEditCourse from '../screens/UserEditCourse';
import globalStyles from '../styles/globalStyles';

const UserStackNavigator = createStackNavigator();

export const UserNavigator = () => {
    return (
        <UserStackNavigator.Navigator
            screenOptions={{
                headerStyle: {  backgroundColor: globalStyles.green },
                headerTitleStyle: {fontWeight: 'bold'},
                headerTintColor: globalStyles.white,
            }}
        >
            <UserStackNavigator.Screen 
                name="Courses" 
                component={UserCourses} 
                options={({navigation}) => (
                    {
                        title: 'Mes formations',
                        headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
                        <Item
                            title="Editer"
                            iconName="add-to-photos"
                            onPress={() => navigation.navigate('Edit', {
                                title: 'Créer une formation',
                            })}
                        />
                    </HeaderButtons>
                ),
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
                        <Item
                            title="Menu"
                            iconName="menu"
                            onPress={() => navigation.openDrawer()}
                            style={{marginLeft: 10}}
                        />
                    </HeaderButtons>
                ),
                    }
                )}
            />
             <UserStackNavigator.Screen 
                name="Edit" 
                component={UserEditCourse} 
                options={({ route }) => ({
                    title: route.params.title ? route.params.title : 'Créer une formation',
                })}

            />
           
        </UserStackNavigator.Navigator>
    );
}
