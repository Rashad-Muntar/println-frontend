/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

// import {client} from './src/handlers/apolloClient';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import User from './src/components/User';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const client = new ApolloClient({
  uri: "http://localhost:8080/query",
  cache: new InMemoryCache(),
});



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ApolloProvider client={client}>
   <SafeAreaView>
   <StatusBar
  barStyle={isDarkMode ? 'light-content' : 'dark-content'}
  backgroundColor={backgroundStyle.backgroundColor}
/>
      <User />
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

{/* <SafeAreaView style={backgroundStyle}>
<StatusBar
  barStyle={isDarkMode ? 'light-content' : 'dark-content'}
  backgroundColor={backgroundStyle.backgroundColor}
/>
<ScrollView
  contentInsetAdjustmentBehavior="automatic"
  style={backgroundStyle}>
  {/* <Header /> */}
//   <View
//     style={{
//       backgroundColor: isDarkMode ? Colors.black : Colors.white,
//     }}>
//     <Section title="Step One">
//       Edit <Text style={styles.highlight}>PRINT</Text> Print with ease
//     </Section>
//   </View>
// </ScrollView>
// </SafeAreaView> */}


// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }
