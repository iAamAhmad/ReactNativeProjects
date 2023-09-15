import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'

const BottomTabs = ({ navigation }) => {
    return (

        <View style={styles.ContainerIcon}>
            <View style={styles.tabsContainer}>
                <TouchableOpacity>
                    <Ionicons name="home-outline" size={30} color='grey'
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <Text style={styles.input}>Home</Text>
            </View>
            <View style={styles.tabsContainer}>
                <TouchableOpacity>
                    <Ionicons name="search-outline" size={30} color='grey'
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <Text style={styles.input}>Browse</Text>
            </View>
            <View style={styles.tabsContainer}>
                <TouchableOpacity>
                    <MaterialIcons name="local-grocery-store" size={30} color='grey'
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <Text style={styles.input}>Grocery</Text>
            </View>
            <View style={styles.tabsContainer}>
                <TouchableOpacity>
                    <Ionicons name="reorder-four" size={30} color='grey'
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <Text style={styles.input}>Orders</Text>
            </View>
            <View style={styles.tabsContainer}>
                <TouchableOpacity>

                    <Ionicons name="person" size={30} color='grey'
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <Text style={styles.input}>Account</Text>
            </View>
        </View>

    )

}

export { BottomTabs }

const styles = StyleSheet.create({

    ContainerIcon: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
        height: 60,
        borderTopWidth: 1,
        borderTopColor: '#6a6a6a'


    },
    icon: {

        marginLeft: 3,



    },
    tabsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})