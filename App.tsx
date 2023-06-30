/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MainNavigation from './Navigation/mainNavigation';
import {SafeAreaView,StyleSheet,useColorScheme,} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/screens/Signup';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
     <SafeAreaView style={{flex: 1}}>
        <MainNavigation />
      </SafeAreaView>
  );
}
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

{/* <StatusBar
barStyle={isDarkMode ? 'light-content' : 'dark-content'}
backgroundColor={backgroundStyle.backgroundColor}
/> */}

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;