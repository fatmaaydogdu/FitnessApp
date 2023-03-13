/* eslint-disable prettier/prettier */
import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

import Button from '../components/Button';


function Welcome({navigation}){

    function goToMemberSign (){
        navigation.navigate('MemberSignScreen');
    }
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Welcome</Text>
            <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    header:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        color:'black',
        margin:5,
    }
})

export default Welcome;