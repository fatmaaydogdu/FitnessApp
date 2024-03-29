/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';

const Stack = createNativeStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown : false,
            }}>
                <Stack.Screen name="WelcomeScreen" component={Welcome}/>
                <Stack.Screen name='MemberSignScreen' component={MemberSign} />
                <Stack.Screen name='MemberResultScreen' component={MemberResult}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;