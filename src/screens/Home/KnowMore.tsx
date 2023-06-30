import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import Card from '../../components/share/Card'

const KnowMore = () => {
  return (
    <View style={styles.container}>
        <Card title='Easy start' width={"50%"} height={"80"} icon={require("../../assets/images/easy.png")}/>
        <Card title='Faster service' width={"30%"} height={80} icon={require("../../assets/images/fast.png")}/>
        <Card title='Quick delivery' width={"30%"} height={80} icon={require("../../assets/images/deliver.png")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      width: "100%",
      height: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    buttonText:{
        height: 100,
        
    }
     
  })
export default KnowMore
