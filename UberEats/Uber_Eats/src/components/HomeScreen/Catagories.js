import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
const Catagories = () => {
  return (
    <View style={styles.upperContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2014/04/02/16/16/bag-306740_960_720.png' }}
            style={styles.image}
          />
          <Text style={styles.text}>
            Pick-up
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD7LKEJYN-CcATq2l7p8zo7mrE6UDyec1bKw&usqp=CAU' }}
            style={styles.image}
          />
          <Text style={styles.text}>
            Soft Drinks
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://5.imimg.com/data5/SELLER/Default/2020/8/UF/OY/WJ/2410371/bakery-products-500x500.png' }}
            style={styles.image}
          />
          <Text style={styles.text}>
            Bakery-items
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://cdn.imgbin.com/21/12/18/imgbin-hamburger-fast-food-restaurant-junk-food-kfc-cartoon-french-fries-burger-potato-fries-and-disposable-cup-illustration-uHRUkm6h8f8k9a84UFG2rXSnH.jpg' }}
            style={styles.image}
          />
          <Text style={styles.text}>
            Fast-Foods
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://www.clipartmax.com/png/small/252-2520512_thumbnails-thumbnails-cake-pops.png' }}
            style={styles.image}
          />
          <Text style={styles.text}>
            Sweets-eats
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://e7.pngegg.com/pngimages/242/176/png-clipart-bird-s-eye-chili-tabasco-pepper-serrano-pepper-cayenne-pepper-chili-pepper-tabasco-pepper-thumbnail.png' }}
            style={styles.image}
          />
          <Text style={styles.text}>
            Spicy-meal
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export { Catagories }

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain'

  },
  text: {
    fontSize: 13,
    fontWeight: "800",
    color: '#000'
  },
  container: {
    alignItems: 'center',
    marginRight: 10,
    marginTop: 3,

  },
  upperContainer: {
    marginTop: 7,
    paddingVertical: 7,
    paddingLeft: 5,
    backgroundColor: 'white',
  }



})