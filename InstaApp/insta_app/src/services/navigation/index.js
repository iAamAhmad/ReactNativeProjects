import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../screens/Home';
import { Landing } from '../../screens/Landing';
import { LoginScreen } from '../../screens/LoginScreen';
import { NewPostScreen } from '../../screens/NewPostScreen';
import { SignIn } from '../../screens/SignIn';
import { SignUpScreen } from '../../screens/SignUpScreen';
const NavContainer = () => {
    const screenOptions = {
        headerShown: false
    }

    // this will help us to register stack type screens
    const Stack = createNativeStackNavigator();
    return (

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='LoginScreen'
                screenOptions={screenOptions}
            >
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="SignIn" component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
    )


}

export { NavContainer }