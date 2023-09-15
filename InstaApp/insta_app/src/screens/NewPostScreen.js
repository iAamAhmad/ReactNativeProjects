import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { AddNewPost } from '../components/NewPost/AddNewPost'
import { FormicPostUploader } from '../components/NewPost/FormicPostUploader'


const NewPostScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
            <StatusBar />
            <AddNewPost navigation={navigation} />
            <FormicPostUploader />
        </SafeAreaView>
    )
}

export { NewPostScreen }
const styles = StyleSheet.create({

}) 