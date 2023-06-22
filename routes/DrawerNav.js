
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CoursesNavigator } from './CoursesStackNav';
import { CartNavigator } from './CartStackNav';
import { PaymentNavigator } from './PaymentStackNav';

import { MaterialIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Home" 
                component={CoursesNavigator} 
                options={{
                    title: 'Catalogue',
                    drawerIcon: () => <MaterialIcons name="menu-book" size={24}/>
                }}
            />
            <Drawer.Screen 
                name="Cart" 
                component={CartNavigator} 
                options={{
                    title: 'Panier',
                    drawerIcon: () => <MaterialIcons name="shopping-cart" size={24}/>
                }}
            />
            <Drawer.Screen 
                name="Payments" 
                component={PaymentNavigator} 
                options={{
                    title: 'Achats',
                    drawerIcon: () => <MaterialIcons name="credit-card" size={24}/>
                }}
            />
        </Drawer.Navigator>
    );
}