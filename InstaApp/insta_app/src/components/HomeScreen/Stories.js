import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { USERS } from '../../database/Users'
const Stories = () => {
    return (
        <View style={{ marginBottom: 12 }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <View key={index}
                        style={{ alignItems: 'center' }}>
                        <Image source={{ uri: story.image }}
                            style={styles.story}
                        />
                        <Text style={{ color: 'white' }}>
                            {story.user.length > 10
                                ? story.user.slice(0, 10).toLowerCase() + '...'
                                : story.user.toLowerCase()}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export { Stories }

const styles = StyleSheet.create({
    story: {
        width: 60,
        height: 60,
        marginLeft: 7,
        borderWidth: 1.5,
        borderRadius: 50,
        borderColor: 'yellow',
        resizeMode: 'contain'

    }


})