import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React from 'react'
import { SignUpForm } from '../components/signUpScreen/SignUpForm'

const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar />
            <View style={styles.logoContainer}>
                <Image
                    style={{ height: 130, width: 130 }}
                    source={{ uri: 'http://clipart-library.com/images_k/instagram-png-transparent/instagram-png-transparent-1.png' }} />
                <Text
                    style={styles.introInput}>
                    Sign up to see photos and videos from your friends and family
                </Text>
            </View>
            <SignUpForm navigation={navigation} />

        </View>
    )
}

export { SignUpScreen }

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

    },
    introInput: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#999999',
        marginTop: 10,
        marginBottom: 25,
        textAlign: 'center'
    }





})