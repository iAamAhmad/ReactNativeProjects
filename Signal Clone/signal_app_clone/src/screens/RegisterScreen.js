import { StyleSheet, Text, View, StatusBar, Image, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from '@rneui/base'
import { auth } from '../db/firebase_config';


const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoUrl: imageUrl
                })
            }).catch(error => alert(error.message))
    }
    return (
        <View
            style={styles.container}>
            <View style={styles.input}>
                <StatusBar style="light" />
                <Text style={styles.headerText}>Create A Signal Account</Text>
                <Image
                    source={{ uri: 'https://play-lh.googleusercontent.com/jCln_XT8Ruzp7loH1S6yM-ZzzpLP1kZ3CCdXVEo0tP2w5HNtWQds6lo6aLxLIjiW_X8=w240-h480-rw' }}
                    style={styles.imageContainer}
                />
                <Input
                    placeholder='Full Name'
                    autoFocus type='Name'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder='Email'
                    autoFocus type='email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder='Password'
                    autoFocus type='password'
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                />
                <Input
                    placeholder='Provide Profile URl(Optional)'
                    autoFocus type='email'
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
                <Button title="Register" onPress={register}
                    containerStyle={styles.button}
                    raised
                />
                <View style={{ height: 39 }}></View>
            </View>


        </View>
    )
}
export { RegisterScreen }

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#white',
        padding: 10,
        marginTop: 30

    },
    input: {
        width: 300,
        flex: 1,


    },
    button: {
        width: 300,
        height: 50,
        borderRadius: 15,

    },
    imageContainer: {
        height: 80,
        width: 1670,
        resizeMode: 'contain',
        marginBottom: 2,
        alignSelf: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 20,
        alignSelf: 'center'
    }
})