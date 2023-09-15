import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import React from 'react'
import { Ionicons } from '@expo/vector-icons'
export const localRestuarants = [
    {
        name: 'Yasir broast Lahore Restaurant',
        address: 'Lahore',
        image: "https://propakistani.pk/wp-content/uploads/2022/05/expensive-restaurants.jpg",
        rating: 4.4,
        distance: '30-40 minutes',
        price: '$',
        id: 1,
        reviews: 1200
    },

    {
        name: 'Gull Bajour  Lahore Restaurant',
        address: 'Lahore',
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/53/7d/b9/deira-front-view-at-night.jpg",
        rating: 4.5,
        distance: '30-40 minutes',
        price: '$',
        id: 1,
        reviews: 1200
    },

    {
        name: 'Butt Karahi Lahore Restaurant',
        address: 'Lahore',
        image: "https://www.haveli.com.pk/wp-content/uploads/2019/08/29.jpg",
        rating: 4.3,
        distance: '30-40 minutes',
        price: '$',
        reviews: 1200
    },

    {
        name: 'Charsii tikkaaa Lahore Restaurant',
        address: 'Lahore',
        image: "https://i.dawn.com/primary/2015/01/54b3ff950cc4a.gif",
        rating: 4.7,
        distance: '30-50 minutes',
        price: '$',
        reviews: 1200
    },

    {
        name: 'Bhaji k Payee Lahore Restaurant',
        address: 'Lahore',
        image: "https://www.smallcrazy.com/wp-content/uploads/2019/12/lahorerestaurants-8.jpg",
        rating: 4.2,
        distance: '30-40 minutes',
        price: '$',
        reviews: 1200
    },



]



const RestaurantImage = (props) => (
    <View style={{
        marginTop: 5,
        backgroundColor: 'white',
        padding: 10,

    }}>

        <Image
            source={{ uri: props.image }}
            style={{ width: '100%', height: 180 }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 5, margin: 25 }}>
            <Ionicons name="heart-outline" size={20} color='white' />
        </TouchableOpacity>

    </View>
)
const RestuarantInfo = (props) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
        alignItems: 'center',
        marginHorizontal: 10,

    }}>
        <View>
            <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
            }}>{props.name}</Text>
            <Text
                style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'grey',
                }}
            >30-40 minutes</Text>
        </View>
        <View style={{
            height: 30,
            width: 30,
        }}>
            <Text>{props.rating}</Text>
        </View>
    </View>

)

const RestuarantItems = ({ navigation, ...props }) => {
    return (
        <>
            {props.restuarantData.map((restaurant, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={0.7} style={{ marginTop: 10, padding: 1, backgroundColor: 'white' }}
                    onPress={() => navigation.navigate('RestuarantDetailScreen',
                        {
                            name: restaurant.name,
                            address: restaurant.address,
                            image: restaurant.image,
                            rating: restaurant.rating,
                            distance: restaurant.distance,
                            price: restaurant.price,
                            id: restaurant.id,
                            reviews: restaurant.reviews



                        })}>

                    <View>

                        <RestaurantImage image={restaurant.image} />
                        <RestuarantInfo name={restaurant.name} rating={restaurant.rating} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}

export { RestuarantItems }




const styles = StyleSheet.create({




})