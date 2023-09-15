import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React from 'react'
import { LoginForm } from '../components/loginScreen/LoginForm'

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar />
            <View style={styles.logoContainer}>
                <Image
                    style={{ height: 130, width: 130 }}
                    source={{ uri: 'http://clipart-library.com/images_k/instagram-png-transparent/instagram-png-transparent-1.png' }} />
            </View>
            <LoginForm navigation={navigation} />

        </View>
    )
}

export { LoginScreen }

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,

    }
})