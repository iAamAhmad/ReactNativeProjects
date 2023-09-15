import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../../screens/LoginScreen';

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

            </Stack.Navigator>
        </NavigationContainer>
    )


}

export { NavContainer }