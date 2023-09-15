import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { firebase } from '../../db/firebase_config'


const SignUpForm = ({ navigation }) => {
    const SignUpFormSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        name: Yup.string().required('Name is required'),
        userName: Yup.string().required('User Name is required'),

        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters long')
    })
    const onSignUp = async (email, password, name, userName) => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password, name, userName)
            console.log('okayyyyyyyy')
        }
        catch (error) {
            Alert.alert('my Lord', error.message)
        }
    }


    return (
        <View>
            <Formik
                initialValues={{ email: '', password: '', name: '', userName: '' }}
                onSubmit={values => {
                    onSignUp(values.email, values.password, values.name, values.userName)
                }}
                validationSchema={SignUpFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) =>
                (
                    <>
                        <View style={styles.input}>
                            <TextInput
                                placeholder='Phone Number Or Email '
                                placeholderTextColor={'#444'}
                                autoCapitalize='none'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}

                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder='Full Name '
                                placeholderTextColor={'#444'}
                                keyboardType='default'
                                textContentType='name'
                                autoCapitalize='none'
                                autoCorrect={false}
                                autofocus={true}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}

                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder='UserName '
                                placeholderTextColor={'#444'}
                                keyboardType='default'
                                textContentType='emailAddress'
                                autoCapitalize='none'
                                autoCorrect={false}
                                autofocus={true}
                                onChangeText={handleChange('userName')}
                                onBlur={handleBlur('userName')}
                                value={values.userName}

                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder='Enter Password'
                                placeholderTextColor={'#444'}
                                textContentType='password'
                                secureTextEntry={true}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}

                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginBottom: 14 }}>
                            <Text style={{ color: '#6888F5' }}> Forgot Password?</Text>
                        </View>
                        <Button title='Sign Up' onPress={handleSubmit} />
                        <View style={styles.signUpContainer}>
                            <Text>Don't Have an Account?</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("LoginScreen")
                            }}>
                                <Text style={{ color: '#6888F5' }}> Log In </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

export { SignUpForm }

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: '#444',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#FAFAFA',
        justifyContent: 'center'
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
    }
})