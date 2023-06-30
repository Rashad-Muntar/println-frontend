import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../src/screens/Signup';
import Login from "../src/screens/Login"
import Splash from '../src/screens/Splash';
import Print from '../src/screens/Print/Print';
import Home from '../src/screens/Home/Home';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator
        initialRouteName="Splash">
            {/* <Stack.Screen name="Splash" options={{
                headerShown: false
            }} component={Splash} /> */}
            <Stack.Screen name="Signup" options={{
                headerShown: false
            }} component={Signup} />
               <Stack.Screen name="Login" options={{
                headerShown: false
            }} component={Login} />
             <Stack.Screen name="Home" options={{
                headerShown: false
            }} component={Home} />
                <Stack.Screen name="Print" options={{
                headerShown: true
            }} component={Print} />
        </Stack.Navigator>
    )
}

export default MainNavigation