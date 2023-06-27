import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../src/screens/Signup';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator
        initialRouteName="Signup">
            <Stack.Screen name="Signup" options={{
                headerShown: false
            }} component={Signup} />
        </Stack.Navigator>
    )
}

export default MainNavigation