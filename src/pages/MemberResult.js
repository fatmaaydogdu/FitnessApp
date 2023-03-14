/* eslint-disable prettier/prettier */
import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

function MemberResult({route}){

    const {user} = route.params;
    return(
        <View style={styles.container}>
            <Text style={styles.message}>Kayıt Tamamlandı!</Text>
            <Text style={styles.label}> Üye ismi: {user.userName}</Text>
            <Text style={styles.label}> Üye soyismi: {user.userSurname} </Text>
            <Text style={styles.label}> Üye yaşı: {user.userAge} </Text>
            <Text style={styles.label}> Üye e-maili: {user.userEmail} </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    label:{
        fontSize:20,
        fontWeight:'bold',
        margin:5,
    },
    message:{
        fontSize:30,
        fontWeight:'bold',
        color:'#FF8051',
        textAlign:'center',
        margin:10,
    },
    container:{
        margin: 5,
        borderRadius: 10,
        flex: 1, 
        justifyContent: 'center',
         alignItems: 'stretch' 
    }
})

export default MemberResult;