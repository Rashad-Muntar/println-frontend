/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { client } from './src/handlers/apolloClient';
import { ApolloProvider } from '@apollo/client';



const AppComponent = () => (
    <ApolloProvider client={client}>
    <NavigationContainer>
        <App />
    </NavigationContainer>
    </ApolloProvider>
)

AppRegistry.registerComponent(appName, () => AppComponent);

