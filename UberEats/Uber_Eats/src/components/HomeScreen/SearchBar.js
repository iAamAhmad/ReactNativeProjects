import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                query={{ key: 'AIzaSyCpYI8IPnJvAUTe1POiiYE2BoacxV5VxOE' }}
                placeholder='Search'
                autoFocus={true}
                returnKeyType={'search'}
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 25,
                        fontWeight: "700",
                        marginTop: 2,

                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        marginLeft: 5,
                        alignItems: 'center',
                        flexDirection: 'row',
                    }
                }}
                renderLeftButton={() =>
                    <View style={{
                        marginLeft: 7
                    }}>
                        <Ionicons name="location-sharp" size={23} color="black" />
                    </View>
                }
                renderRightButton={() =>
                    <View style={styles.rightButton}>
                        <AntDesign name="clockcircle" size={20} color="black"
                        />
                        <Text style={styles.innerText}>Search</Text>
                    </View>
                }
            />
        </View>
    )
}

export { SearchBar }

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
    },
    rightButton: {
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 6,
        padding: 7,
        backgroundColor: 'white',
        borderRadius: 25,
    },
    innerText: {
        fontSize: 15,
        color: 'black',
        fontWeight: '700',
        marginLeft: 8,
    },



})