import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
// import { Divider } from 'react-native-elements'

const PostComponent = ({ post }) => {
    return (
        <View style={{ marginBottom: 10 }}>
            <View style={styles.lineStyle} />
            <PostHeader post={post} />
            <PostImage post={post} />
            <PostICons />
            <PostLikes post={post} />
            <PostCaptions post={post} />
            < CommentSection post={post} />
            < CommentsReal post={post} />

        </View>
    )
}
const PostHeader = ({ post }) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center'
    }}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Image
                style={styles.story}
                source={{ uri: post.profile_picture }}
            />
            <Text style={styles.inputText}> {post.user}</Text>
        </View>
        <Text style={{
            color: 'white',
            fontWeight: '600'
        }}>...</Text>
    </View>
)
const PostImage = ({ post }) => (
    <View style={{ width: '100%', height: 450 }}>
        <Image source={{ uri: post.profile_picture }}
            style={{ height: '100%', resizeMode: 'cover' }}
        />
    </View>
)
const PostICons = () => (
    <View style={styles.ContainerIcon}>
        <View style={styles.ContainerIcon}>
            <TouchableOpacity>
                <Feather name="heart" size={30} color='white'
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather name="message-circle" size={30} color='white'
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather name="send" size={30} color='white'
                    style={styles.icon}
                />
            </TouchableOpacity>

        </View>
        <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 10 }}>
            <TouchableOpacity>
                <Feather name="bookmark" size={30} color='white'
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    </View>

)
const PostLikes = ({ post }) => (
    <View style={styles.inputTextOne}>
        <Text style={styles.inputText}>
            {post.likes} Likes
        </Text>
    </View>
)
const PostCaptions = ({ post }) => (
    <View style={{ marginTop: 5, marginLeft: 7 }}>
        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '600' }}>{post.user}</Text>
            <Text> {post.caption}</Text>
            <Text></Text>
        </Text>
    </View>
)
const CommentSection = ({ post }) => (
    <View style={{ marginTop: 5, marginLeft: 7 }}>
        {/* this is double negation concept  */}
        {!!post.comments.length && (
            <Text style={{ color: 'grey' }}>
                View{post.comments.length > 1 ? 'All' : ''} {post.comments.length} {' '}
                {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>
        )}
    </View>
)
const CommentsReal = ({ post }) => (
    <View style={{ marginLeft: 7, flex: 1 }}>
        {post.comments.map((comment, index) =>
            <View
                key={index}
                style={{ flexDirection: 'row', marginTop: 5 }}
            >
                <Text style={{ color: 'white' }}>
                    <Text style={{ fontWeight: '600' }}> {comment.user}</Text>
                    {' '}
                    {comment.comment}
                </Text>
            </View>)}
    </View >
)

export { PostComponent }

const styles = StyleSheet.create({


    lineStyle: {
        borderWidth: 0.17,
        borderColor: '#6a6a6a',
        marginVertical: 2,
    },
    story: {
        width: 32,
        height: 32,
        margin: 3,
        borderWidth: 0.5,
        borderRadius: 50,
        borderColor: 'yellow',
        resizeMode: 'contain'

    },
    inputText: {
        color: 'white',
        marginLeft: 7,
        fontWeight: '600'
    },
    inputTextOne: {
        flex: 1,
        fontWeight: '500'
    },
    icon: {

        marginLeft: 10
    },
    input: {
        color: 'white'
    },
    ContainerIcon: {
        flexDirection: 'row',

    },

})