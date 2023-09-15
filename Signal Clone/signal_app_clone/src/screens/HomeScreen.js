import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CustomChat } from '../components/homeScreen/CustomChat'
import { Avatar } from '@rneui/base'
import { auth } from '../db/firebase_config'
import { TouchableOpacity } from 'react-native'
// import { auth } from '../db/firebase_config'

const HomeScreen = ({ navigation }) => {
    const signOutUser = () => {
        auth.signOut()
            .then(() => {
                navigation.navigate('LoginScreen')
            }
            )
            .catch(error => {
                console.log(error)
            }
            )
    }



    useLayoutEffect(() => {
        // Hide the status bar
        navigation.setOptions({
            title: 'Signal',
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: 'black',
                headerLeft: () => (
                    <View style={{ marginLeft: 20 }}>
                        <TouchableOpacity onPress={signOutUser}>
                            <Avatar
                                source={{
                                    uri: auth?.currentUser?.photoURL
                                }}
                                size={20}
                                rounded
                            />
                        </TouchableOpacity>
                    </View>
                ),
            },
        })


    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomChat />
            </ScrollView>
        </SafeAreaView>
    )
}

export { HomeScreen }

const styles = StyleSheet.create({


})