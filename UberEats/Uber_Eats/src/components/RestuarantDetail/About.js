import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { ViewCart } from './ViewCart'
// import { Divider } from 'react-native-paper'
const image = "https://cdn.vox-cdn.com/thumbor/a9RsFUZjVZ-7ll3Rr2XWjbhUtx8=/47x0:772x544/920x613/filters:focal(47x0:772x544):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/38811448/threegreat9lahoreexterior-1.0.jpg"
const title = "Al Khan Restuarant and Fast Food Point"
const description = "Comfort Meal -$$ 🤷‍♂️✨5"
const About = (props) => {
    return (
        <View>

            <RestuarantImage image={image} />
            <RestuarantTitle title={title} />
            <RestuarantDescription description={description} />
            <Divider />
        </View>
    )
}
const RestuarantImage = (props) => (
    <Image
        source={{ uri: props.image }}
        style={{ width: '100%', height: 200 }}
    />
)
const RestuarantTitle = (props) => (
    <Text
        style={{
            fontSize: 20,
            fontWeight: "800",
            marginTop: 10,
            marginHorizontal: 10
        }}
    >{props.title}</Text>
)
const RestuarantDescription = (props) => (
    <View>
        <Text
            style={{
                fontSize: 15,
                fontWeight: "400",
                marginTop: 5,
                marginHorizontal: 10
            }}
        >{props.description}</Text>

    </View>
)
const Divider = () => (
    <View style={{
        height: 1,
        backgroundColor: "#ddd",
        marginTop: 20,
        marginHorizontal: 1
    }}>
    </View>
)


export { About }

const styles = StyleSheet.create({})