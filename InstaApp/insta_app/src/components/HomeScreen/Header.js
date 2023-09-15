import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



const Header = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}
            >
                <Image source={{ uri: 'https://3.bp.blogspot.com/-gyfM-b0vook/XGVSggQTqvI/AAAAAAAAAzU/u66Ogz2Xm0oNDfA6M9xD_A0BaNyAdcURACLcBGAs/s1600/unnamed%2B%25281%2529.png' }}
                    style={styles.logo}
                />
            </TouchableOpacity>
            <View style={styles.ContainerIcon}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("NewPostScreen")
                    }}
                >
                    <Feather name="plus-square" size={23} color='white'

                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="heart" size={23} color='white'
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBatch}>
                        <Text style={styles.unreadBatchText}>11</Text>
                    </View>
                    <Fontisto name="messenger" size={23} color='white'
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>

    )
}

export { Header }

const styles = StyleSheet.create({
    mainContainer: {

        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'


    },
    logo: {
        width: 120,
        height: 60,
        resizeMode: 'contain'
    },
    icon: {

        marginHorizontal: 7,

    },
    input: {
        color: 'white'
    },
    ContainerIcon: {
        flexDirection: 'row'
    },
    unreadBatch: {
        backgroundColor: '#FF3250',
        left: 15,
        bottom: 18,
        width: 25,
        height: 18,
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 25,
        justifyContent: 'center',
        zIndex: 100


    },
    unreadBatchText: {
        color: 'white',
        fontWeight: '600'
    }




})