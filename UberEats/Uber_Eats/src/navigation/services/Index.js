import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../screens/Home';
import { RestuarantDetailScreen } from '../../screens/RestuarantDetailScreen';
import { Provider as ReduxProvider } from 'react-redux'
import store from '../../../redux/store';
import { OrderComplete } from '../../screens/OrderComplete';


const NavContainer = () => {
    const screenOptions = {
        headerShown: false
    }

    // this will help us to register stack type screens
    const Stack = createNativeStackNavigator();
    return (
        <ReduxProvider store={store()}>

            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Home'
                    screenOptions={screenOptions}
                >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestuarantDetailScreen" component={RestuarantDetailScreen} />
                    <Stack.Screen name="OrderComplete" component={OrderComplete} />

                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )


}

export { NavContainer }