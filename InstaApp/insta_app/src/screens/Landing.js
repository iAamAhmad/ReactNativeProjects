import { StyleSheet, Text, View, Button } from 'react-native'
import React, { startTransition } from 'react'

const Landing = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.button}>
                <Button
                    title="Register"

                    onPress={() => {
                        navigation.navigate("Register")
                    }}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Log In"

                    onPress={() => {
                        navigation.navigate("SignIn")
                    }}
                />
            </View>
        </View>
    )
}

export { Landing }

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        width: '80%',
        alignSelf: 'center'


    }



})