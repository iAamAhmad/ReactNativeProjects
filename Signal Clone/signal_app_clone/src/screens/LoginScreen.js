
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Input } from '@rneui/base'
import { auth } from '../db/firebase_config';
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser)
            if (authUser) {
                navigation.navigate('HomeScreen')
            }
        }
        )
        return unsubscribe
    }, [])
    const signIn = () => {

    }
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <Image
                source={{ uri: 'https://play-lh.googleusercontent.com/jCln_XT8Ruzp7loH1S6yM-ZzzpLP1kZ3CCdXVEo0tP2w5HNtWQds6lo6aLxLIjiW_X8=w240-h480-rw' }}
                style={styles.imageContainer}
            />
            <View style={styles.input}>
                <Input

                    placeholder='Email'
                    autoFocus type='email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    style={styles.input}
                    placeholder='Password'
                    autoFocus type='Password'
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Button title="Login"
                    onPress={() =>
                        navigation.navigate('HomeScreen')
                    }
                    containerStyle={styles.button}
                />
                <Button title="Register" type="outline"
                    containerStyle={styles.button}
                    onPress={() => navigation.navigate('RegisterScreen')}
                />
            </View>
        </View>
    )
}

export { LoginScreen }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#white',
        padding: 10,
        marginTop: 30
    },
    imageContainer: {
        height: 130,
        width: 300,
        resizeMode: 'contain',
        marginBottom: 20
    },
    input: {
        width: 300,
        flex: 1
    },
    button: {
        width: 300,
        height: 50,
        borderRadius: 15,
        marginBottom: 10,
    }

})