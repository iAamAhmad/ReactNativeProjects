import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { About } from '../components/RestuarantDetail/About'
import { Menu } from '../components/RestuarantDetail/Menu'
import { ViewCart } from '../components/RestuarantDetail/ViewCart'

// import { Divider } from 'react-native-paper'
const foods = [
    {
        title: 'Pasta Recipe ',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&resize=556,505',
        description: 'Delicious pasta dishes from classic spaghetti Bolognese to lasagne and linguine. Find the perfect pasta recipe for midweek meals as well as easy pasta dishes you can rustle up using your storecupboard.',
        rating: 4.5,
        price: '$78',
        location: 'Lahore'
    },
    {
        title: 'Special Shawarma',
        image: 'https://www.pinkvilla.com/imageresize/cover-image_1_5.jpg?width=752&format=webp&t=pvorg',
        description: 'Sit back and tuck into a big bowl of pasta alla vodka, a creamy tomato pasta with – as you can guess – vodka, which balances out the intense flavours',
        rating: 4.5,
        price: '$200',
        location: 'Lahore'
    },
    {
        title: 'Lahori Fish',
        image: 'https://media.self.com/photos/57d8952946d0cb351c8c50c9/1:1/w_855,h_855,c_limit/DELICIOUS-1-POT-Lentil-and-Black-Bean-Chili-Smoky-hearty-PROTEIN-and-fiber-packed-vegan-glutenfree-lentils-chili-healthy-recipe2.jpg',
        description: 'Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad',
        rating: 4.5,
        price: '$100',
        location: 'Lahore'
    },
    {
        title: 'Lasani Pizza',
        image: 'https://recipe52.com/wp-content/uploads/2020/10/Pakistani-recipes-pin-it-1.jpg',
        description: 'Make this creamy mushroom pasta dish on days when you need a big bowl of comfort. Cream, parmesan, white wine, lemon zest and parsley make this a rich and flavourful dinner',
        rating: 4.5,
        price: '$70',
        location: 'Lahore'
    },
    {
        title: 'Pasta ',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&resize=556,505',
        description: 'Delicious pasta dishes from classic spaghetti Bolognese to lasagne and linguine. Find the perfect pasta recipe for midweek meals as well as easy pasta dishes you can rustle up using your storecupboard.',
        rating: 4.5,
        price: '$78',
        location: 'Lahore'

    },
    {
        title: 'Pizzaaaaaa',
        image: 'https://www.pinkvilla.com/imageresize/cover-image_1_5.jpg?width=752&format=webp&t=pvorg',
        description: 'Sit back and tuck into a big bowl of pasta alla vodka, a creamy tomato pasta with – as you can guess – vodka, which balances out the intense flavours',
        rating: 4.5,
        price: '$200',
        location: 'Lahore'
    },
    {
        title: ' Burger',
        image: 'https://media.self.com/photos/57d8952946d0cb351c8c50c9/1:1/w_855,h_855,c_limit/DELICIOUS-1-POT-Lentil-and-Black-Bean-Chili-Smoky-hearty-PROTEIN-and-fiber-packed-vegan-glutenfree-lentils-chili-healthy-recipe2.jpg',
        description: 'Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad',
        rating: 4.5,
        price: '$100',
        location: 'Lahore'
    },
    {
        title: 'Mint',
        image: 'https://recipe52.com/wp-content/uploads/2020/10/Pakistani-recipes-pin-it-1.jpg',
        description: 'Make this creamy mushroom pasta dish on days when you need a big bowl of comfort. Cream, parmesan, white wine, lemon zest and parsley make this a rich and flavourful dinner',
        rating: 4.5,
        price: '$70',
        location: 'Lahore'
    },
];

const RestuarantDetailScreen = ({ route, navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <About route={route} />
            <Menu restuarantName={route.params.name} />
            <ViewCart navigation={navigation} restuarantName={route.params.name} />
        </View>

    )
}


export { RestuarantDetailScreen }

const styles = StyleSheet.create({




})