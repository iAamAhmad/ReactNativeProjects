import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { TouchableOpacity } from 'react-native-web'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A Url is required Here'),
    caption: Yup.string().max(2200, 'Too Long')
})
const placeHolder_img = 'https://cdn.pixabay.com/photo/2022/06/07/09/55/buildings-7247956_960_720.jpg'

const FormicPostUploader = () => {
    const [thumbNailUrl, setThumbNailUrl] = useState(placeHolder_img)
    return (

        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => { console.log(values) }}
            validationSchema={uploadPostSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) =>
            (
                <>
                    <View style={styles.mainContainer}>
                        <Image
                            source={{ uri: thumbNailUrl ? thumbNailUrl : placeHolder_img }}
                            style={{ width: 100, height: 100 }}
                        />
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <TextInput
                                style={{ color: 'white', fontSize: 20, marginBottom: 10 }}
                                placeholder='Write a caption'
                                placeholderTextColor='grey'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>


                    </View>
                    {/* <Separator /> */}
                    <View style={styles.lineStyle} />
                    <TextInput
                        onChange={e => {
                            setThumbNailUrl(e.nativeEvent.text)
                        }}
                        style={{ color: 'white', fontSize: 20, marginBottom: 15 }}
                        placeholder='Put Image Url'
                        placeholderTextColor='grey'
                        multiline={true}
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {/* {errors.imageUrl ? (
                        <Text style={{ fontSize: 10, color: 'red' }}>
                            {errors.imageUrl}
                        </Text>
                    ) : null} */}
                    <View style={{
                        width: '80%',
                        marginLeft: '10%',

                    }}>
                        <Button title='Submit'
                            onPress={handleSubmit}

                        />
                    </View>
                </>

            )

            }

        </Formik>

    )
}

export { FormicPostUploader }

const styles = StyleSheet.create({
    lineStyle: {
        borderWidth: 0.17,
        borderColor: '#6a6a6a',
        marginVertical: 2,
    },
    mainContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',




    }
})