/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Alert } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';


function MemberSign({ navigation }) {
    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userEmail, setUserEmail] = useState(null);



    function handleSubmit() {
        if (!userName || !userSurname || !userAge || !userEmail) {
            Alert.alert('Lütfen boş alan bırakmayınız!');
            return;
        }

        const user = {
            userName,
            userSurname,
            userAge,
            userEmail,
        };

        navigation.navigate('MemberResultScreen', {user});
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
            <Input label={'İsim'} placeholder='Üyenin ismini giriniz...' onChangeText={setUserName} />
            <Input label={'Soyisim'} placeholder='Üyenin soyismini giriniz...' onChangeText={setUserSurname} />
            <Input label={'Yaş'} placeholder='Üyenin yaşını giriniz...' onChangeText={setUserAge} />
            <Input label={'E-posta'} placeholder='Üyenin e-posta adresini giriniz...' onChangeText={setUserEmail} />

            <Button text={'Kaydı Tamamla'} onPress={handleSubmit} />
        </View>
    )
}

export default MemberSign;