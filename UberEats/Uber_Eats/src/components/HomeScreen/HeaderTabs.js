import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const HeaderTabs = () => {
    const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <View style={styles.mainContainer}>
            <HeaderButton
                text="Delivery"
                btnColor="black"
                textColor="white"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text="Pickup"
                btnColor="white"
                textColor="black"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    )
}
const HeaderButton = (props) => (
    <View >
        <TouchableOpacity style={{
            paddingHorizontal: 18,
            paddingVertical: 8,
            borderRadius: 28,
            backgroundColor: props.activeTab === props.text ? "black" : "white",
        }}
            onPress={() => props.setActiveTab(props.text)}>
            <Text
                style={{
                    color: props.activeTab === props.text ? "white" : "black",
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
            >
                {props.text}</Text>
        </TouchableOpacity>

    </View>
)

export { HeaderTabs }

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
    },



})