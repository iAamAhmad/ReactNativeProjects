import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, ListItem } from '@rneui/base'

const CustomChat = () => {
    return (
        <ListItem>
            <Avatar
                source={{ uri: 'https://play-lh.googleusercontent.com/jCln_XT8Ruzp7loH1S6yM-ZzzpLP1kZ3CCdXVEo0tP2w5HNtWQds6lo6aLxLIjiW_X8=w240-h480-rw' }}
                size={40}
                rounded
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "700" }}>
                    <Text>
                        John Doe
                    </Text>
                </ListItem.Title>
                <ListItem.Subtitle
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    <Text>
                        Lorem ipsum dolor sit good, consectetur closet cooling.
                    </Text>
                </ListItem.Subtitle>
            </ListItem.Content>

        </ListItem>
    )
}

export { CustomChat }

const styles = StyleSheet.create({})