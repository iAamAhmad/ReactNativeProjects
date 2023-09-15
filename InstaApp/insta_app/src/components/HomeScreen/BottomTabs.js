import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const BottomTabs = () => {
    return (

        <View style={styles.ContainerIcon}>
            <TouchableOpacity>
                <Ionicons name="home-outline" size={35} color='white'
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="search-outline" size={35} color='white'
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="add-circle-outline" size={35} color='white'
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather name="shopping-cart" size={35} color='white'
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="person-circle-outline" size={35} color='white'
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>

    )
}

export { BottomTabs }

const styles = StyleSheet.create({

    ContainerIcon: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        height: 65,
        borderTopWidth: 1,
        borderTopColor: '#6a6a6a'


    },
    icon: {

        marginLeft: 10,


    }
})