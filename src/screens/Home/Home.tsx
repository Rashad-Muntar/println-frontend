import React, { useEffect } from 'react';
import {Colors} from '../../assets/Constants';
import { useSelector } from "react-redux";
import {View, Text, StyleSheet} from 'react-native';
import Navbar from '../../components/Navbar/Navbar';
import Bar from '../../components/share/Bar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CookieManager from '@react-native-cookies/cookies';
import Caro from './Caro';

const Home = () => {
  const user = useSelector((state:any) => state.user.currentUser)
  console.log(user)

useEffect(() => {
  try {
    CookieManager.get('http://localhost:8080/query')
    .then((cookies) => {
      console.log('CookieManager.get =>', cookies.token.value);
    });
  } catch (error) {
    
  }
})


  return (
    <View style={styles.container}>
      <Navbar username={user.username}/>
      <Caro />
      <View style={styles.iconArea}>
        <Bar
          isIcon={true}
          icon={require('../../assets/images/orders.png')}
          backgroundColor="white"
          marginBottom={20}
          title="You have 0 active order"
          arrow={<AntDesign name="right" size={20} />}
        />
        <Bar
          isIcon={true}
          icon={require('../../assets/images/price.png')}
          title="Check pricing"
          backgroundColor="white"
          arrow={<AntDesign name="right" size={20} />}
        />
      </View>
      <View style={styles.orderWrap}>
        <Bar
          color="white"
          isIcon={false}
          title="Make New Order"
          backgroundColor={Colors.light.primary}
          weight="700"
          arrow={
            <Ionicons
              name="arrow-forward-circle-outline"
              size={30}
              color="white"
            />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17,
    backgroundColor: '#FDF7FF',
    position: 'relative',
  },
  nav: {
    padding: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '80%',
  },
  iconArea: {
    height: '20%',
    justifyContent: 'center',
    marginVertical: 20,
  },
  orderWrap: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    padding: 15,
    justifyContent: 'center',
    backgroundColor: Colors.light.Primary10,
    height: 80,
  },
});

export default Home;
