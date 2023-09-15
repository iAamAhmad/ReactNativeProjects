import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

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
const FoodInfo = (props) => (
    <View style={styles.container}>
        <Text style={styles.textStyling}>{props.foods.title}</Text>
        <Text style={styles.description}>{props.foods.description}</Text>
        <Text style={styles.rating}>{props.foods.rating}</Text>
        <Text style={styles.price}>{props.foods.price}</Text>
        <Text >{props.foods.location}</Text>
    </View>
)

const FoodImage = (props) => (
    <View style={styles.imageContainer}>
        <Image source={{ uri: props.foods.image }} style={{
            width: 90,
            height: 90,
            borderRadius: 8,
            resizeMode: 'contain',
            marginLeft: 10,
            marginRight: 10

        }} />
    </View>
)

const Menu = ({ restuarantName }) => {
    const disPatch = useDispatch();
    const selectItem = (item, checkBoxValue) => {
        disPatch({
            type: 'ADD_TO_CART',
            payload: item,
            restuarantName: restuarantName,
            checkBoxValue: checkBoxValue,
        })
    };
    const cartItems = useSelector(state => state.cartReducer.selectedItems.items);
    const isFoodInCart = (food, cartItems) =>
        (Boolean(cartItems.find((item) => item.title === food.title)));
    return (
        <ScrollView showsVerticalScrollIndicator={true} >
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <BouncyCheckbox
                            iconStyle=
                            {{
                                width: 20,
                                height: 20,
                                borderRadius: 0,
                                borderColor: '',
                                borderWidth: 1,
                                marginHorizontal: 10,
                            }}
                            fillColor="green"
                            onPress={(checkBoxValue) => selectItem(food, checkBoxValue)}
                            isChecked={isFoodInCart(food, cartItems)}

                        />
                        <FoodInfo foods={food} />
                        <FoodImage foods={food} />
                    </View>
                    {/* this is for divider line as somehow my divider from react native elements is not working. */}
                    <View style={{
                        height: 1,
                        backgroundColor: "#ddd",
                        marginBottom: 1,
                    }}>
                    </View>

                </View>

            ))
            }
        </ScrollView >
    )
}


export { Menu }

const styles = StyleSheet.create({
    menuItemStyle: {
        margin: 12,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    textStyling: {
        fontSize: 19,
        fontWeight: '600',

        // marginVertical:,


    },
    description: {
        // fontSize: 12,
        // flexDirection: 'column',

    },
    rating: {
        // fontSize: 12,


    },
    price: {
        // fontSize: 12,
    },
    container: {
        justifyContent: 'space-evenly',
        width: 230,
        height: 180,

    },



})