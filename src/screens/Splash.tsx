import React from 'react'
import { Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import splash from '../assets/splash.json'

const Splash = () => {
    const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
        <LottieView source={require("../assets/splash.json")} autoPlay loop={false} resizeMode='cover' onAnimationFinish={() => navigation.navigate("Signup")}/>
    </View>
  )
}

export default Splash