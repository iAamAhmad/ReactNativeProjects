import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';

const OrderComplete = () => {
    const { items, restuarantName } = useSelector((state) => state.cartReducer.selectedItems)
    const total = items.map((item => Number(item.price
        .replace('$', ''))))
        .reduce((prev, curr) => prev + curr, 0)
    const totalUSD = total.toLocaleString('en', { style: 'currency', currency: 'USD' });
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <LottieView
                style={{
                    height: 150,
                    width: 150,
                    alignSelf: 'center',
                    marginTop: 50,
                    marginBottom: 50
                }}
                autoPlay={true}
                loop={false}
                speed={0.7}
                source={require('../.././assets/lottie/check-green.json')}
            />
            <Text style=
                {{ textAlign: 'center' }}
            >Your Order at {restuarantName} is completed for ${totalUSD}
            </Text>
            <LottieView
                style={{
                    height: 150,
                    width: 150,
                    alignSelf: 'center',
                    marginTop: 10,
                    marginBottom: 50
                }}
                autoPlay={true}
                // loop={false}
                speed={0.5}
                source={require('../.././assets/lottie/drums.json')}
            />
        </SafeAreaView>
    )
}

export { OrderComplete }

const styles = StyleSheet.create({

})