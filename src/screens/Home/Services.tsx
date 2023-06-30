import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Card from '../../components/share/Card'

const Services = () => {
  const navigation =  useNavigation()

  const navigationHander = (loc: never) => {
    navigation.navigate(loc)
  }
  return (
    <View style={styles.container}>
        <Card onPress={() => navigationHander("Print")} title='Printing' width={"25%"}   icon={require("../../assets/images/print.png")}/>
        <Card title='Graphic Design' width={"25%"}   icon={require("../../assets/images/design.png")}/>
        <Card title='Typesetting' width={"25%"}   icon={require("../../assets/images/type.png")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: "center",
      width: "100%"
    },
     
  })
export default Services
