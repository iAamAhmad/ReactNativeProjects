import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderItem = ({ item }) => {
    const { title, price, } = item;
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            borderBottomWidth: 1,
            borderColor: 'black'
        }}>
            <Text style={{
                fontSize: 20,
                // fontWeight: 'bold',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',

            }}>{title}</Text>
            <Text style={{
                fontSize: 20,
                // fontWeight: '300',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
            }}>{price}</Text>
        </View>
    )
}

export { OrderItem }

const styles = StyleSheet.create({})