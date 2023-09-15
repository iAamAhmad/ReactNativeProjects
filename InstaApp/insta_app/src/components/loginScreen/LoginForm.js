import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { firebase } from '../../db/firebase_config'



const LoginForm = ({ navigation }) => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters long')

    })
    const onLogin = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log('Hey Man login is successful', email, password);

        }
        catch (error) {
            Alert.alert(error.message)
        }
    }

    return (
        <View>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => {
                    onLogin(values.email, values.password)
                }}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) =>
                (
                    <>
                        <View style={[styles.input,
                        {
                            borderColor: values.email.length > 0 ||
                                Validator.validate(values.email)
                                ? 'green'
                                : 'red'
                        }]

                        }>
                            <TextInput
                                placeholder='Username,Phone Number Or Email '
                                placeholderTextColor={'#444'}
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoCapitalize='none'
                                autoCorrect={false}
                                autofocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}

                            />
                        </View>
                        <View style={[styles.input,
                        {
                            borderColor: values.password.length > 0 ||
                                Validator.validate(values.password)
                                ? 'green'
                                : 'red'

                        }
                        ]}>
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
                        <Button
                            onPress={() => {
                                navigation.navigate("Home")
                            }}
                            title='Log In' />
                        <View style={styles.signUpContainer}>
                            <Text>Don't Have an Account?</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("SignUpScreen")
                                }}
                            >
                                <Text style={{ color: '#6888F5' }}> Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

export { LoginForm }

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