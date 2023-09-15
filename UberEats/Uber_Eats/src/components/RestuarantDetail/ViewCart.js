import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from './OrderItem';
import { firebase } from '../../db/firebase_config';

const ViewCart = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    // here we are making these functions for calculating and summing up the cost
    // plus we will be making viewCart button a conditional apparently by using ternary operator
    const { items, restuarantName } = useSelector((state) => state.cartReducer.selectedItems)
    const total = items.map((item => Number(item.price
        .replace('$', ''))))
        .reduce((prev, curr) => prev + curr, 0)
    const totalUSD = total.toLocaleString('en', { style: 'currency', currency: 'USD' });

    const addOrderToFirebase = () => {
        const db = firebase.firestore();
        db.collection('orders').add({
            items: items,
            restuarantName: restuarantName,
            total: totalUSD,
            date: new Date(),
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),

        })
        setModalVisible(false);
        navigation.navigate('OrderComplete');
    };
    const checkOutModelContent = () => {
        return (
            <View style={styles.modalContainer}>
                <View style={styles.checkOutModelContent}>
                    <Text
                        style={styles.checkOutModelContentText}>
                        {restuarantName}
                    </Text>
                    {items.map((item, index) => {
                        return (
                            <OrderItem key={index} item={item}
                                style={styles.checkOutModelContentText2}
                            />
                        )
                    })}
                    <View style={styles.subTotalContainer}>
                        <Text style={styles.subTotalText}>
                            Subtotal
                        </Text>
                        <Text style={styles.subTotalText}>${totalUSD}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'black',
                                padding: 10,
                                borderRadius: 26,
                                margin: 10,
                                width: 300,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 20,
                                position: 'relative',


                            }}
                            onPress={() => addOrderToFirebase()}
                        >
                            <Text style={styles.modelCheckOutButton}>CheckOut</Text>
                            <Text style={{
                                position: 'absolute',
                                right: 20,
                                color: 'white',
                                fontSize: 15,
                                top: 14,
                            }}>${total ? totalUSD : " "}</Text>
                        </TouchableOpacity>
                    </View>



                </View>
            </View>
        )
    };

    return (
        <>
            <Modal
                animationType='slide'
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => {
                    setModalVisible(false);
                }
                }>
                {checkOutModelContent()}
            </Modal>
            {total ? (
                <View style={{

                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    zIndex: 99,
                    position: 'absolute',
                    bottom: 10,


                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '100%',

                    }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'black',

                                borderRadius: 30,
                                marginTop: 20,
                                padding: 12,
                                alignItems: 'center',
                                flexDirection: 'row',
                                // marginRight: 50,
                                justifyContent: 'flex-end',
                                width: 260,
                                position: "relative",


                            }}
                            onPress={() => {
                                setModalVisible(true);
                            }
                            }>

                            <Text style={{ color: 'white', fontSize: 20, marginRight: 30 }}>View Cart</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginRight: 20 }}>${totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
                :
                (
                    <></>
                )}
        </>
    )
}

export { ViewCart }

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'flex-end',

    },
    checkOutModelContent: {
        padding: 16,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        height: 500
    },
    checkOutModelContentText: {
        color: 'black',
        fontSize: 20,
        fontWeight: "700",
        textAlign: 'center',
        alignItems: 'center',
    },
    checkOutModelContentText2: {
        color: 'black',
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 10,

    },
    modelCheckOutButton: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',


    },
    subTotalContainer: {
        flexDirection: 'row',
        padding: 10,
        borderColor: 'black',
        justifyContent: 'space-between',
    },
    subTotalText: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: 'center',
        marginBottom: 10,
    }





})