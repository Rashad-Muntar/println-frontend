/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {client} from './src/handlers/apolloClient';
import {ApolloProvider} from '@apollo/client';

const AppComponent = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <NavigationContainer>
        <GestureHandlerRootView style={{flex: 1}}>
          <App />
        </GestureHandlerRootView>
      </NavigationContainer>
    </Provider>
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => AppComponent);
