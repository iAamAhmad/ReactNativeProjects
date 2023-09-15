import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../src/screens/HomeScreen';
import { LoginScreen } from '../src/screens/LoginScreen';
import { RegisterScreen } from '../src/screens/RegisterScreen';


const NavContainer = () => {
    const screenOptions = {
        headerStyle: {
            backgroundColor: '2C6BED',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: 'white',
        },
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
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export { NavContainer }