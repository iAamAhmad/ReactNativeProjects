import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { firebase } from '../db/firebase_config'




const Register = () => {
    const [text, onChangeText] = useState("");
    const [password, onChangePassword] = useState(null);
    const [Email, onChangeEmail] = useState(null);

}
return (
    <SafeAreaView style={styles.mainContainer}>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Enter Your Name"
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={Email}
            placeholder="Enter Your Email"
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Enter Your Password"
            keyboardType="numeric"
            secureTextEntry={true}
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Confirm Your Password"
            keyboardType="numeric"
            secureTextEntry={true}
        />
    </SafeAreaView>

);


export { Register }

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 8,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 15
    },
    mainContainer: {
        flex: 1,
        marginTop: 20
    }
})