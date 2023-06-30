import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../assets/Constants'
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

interface Props {
  username: string
}
const Navbar = ({username}:Props) => {
  return (
    <View style={styles.nav}>
<View style={styles.menu}>
<Entypo
    name='menu'
    size={35}
    color={Colors.light.primary}
/>
</View>
<View style={styles.iconArea}>
<FontAwesome5
style={{marginRight: 15}}
    name='fingerprint'
    size={45}
    color={Colors.light.primary}
/>
<View>
    <Text style={styles.user}>Hi, {username}</Text>
    <Text style={styles.services}>Printing | Graphic Design | Typesetting</Text>
</View>
</View>

</View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1
    },
      nav: {
          width: '100%',

      },
      menu:{
            width: "100%",
            alignItems: "flex-end"
      },
      iconArea:{
        flexDirection: "row",
        paddingVertical: 10, 
      },
      user:{
            color: Colors.light.primary,
            fontSize: 20,
            fontWeight: "bold"
      },
      services:{
        color: Colors.light.Primary80,
      }
  });

export default Navbar