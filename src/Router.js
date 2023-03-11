/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './pages/Welcome';

const Stack = createNativeStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="WelcomeScreen" component={Welcome} options={{
                    headerShown: false,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;