import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const AddNewPost = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Home")
            }}>
                <SimpleLineIcons name="arrow-left" size={23} color='white'
                    style={styles.icon}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>New Post</Text>
            <Text></Text>
        </View>
    )
}

export { AddNewPost }

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'space-between'

    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        marginRight: 20
    }



})