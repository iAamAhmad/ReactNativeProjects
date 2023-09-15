import { View, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { Header } from '../components/HomeScreen/Header';
import { Stories } from '../components/HomeScreen/Stories';
import { PostComponent } from '../components/HomeScreen/PostComponent';
import { POSTS } from '../database/posts';
import { BottomTabs } from '../components/HomeScreen/BottomTabs';


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
                {POSTS.map((post, index) => (

                    <PostComponent post={post} key={index} />
                ))}
            </ScrollView>
            <BottomTabs />
        </View>


    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})

export { Home }