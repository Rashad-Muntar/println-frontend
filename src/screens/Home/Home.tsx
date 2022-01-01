import React, { useEffect, useCallback, useRef, useMemo } from 'react';
import {Colors} from '../../assets/Constants';
import { useSelector } from "react-redux";
import {View, Text, StyleSheet} from 'react-native';
import Navbar from '../../components/Navbar/Navbar';
import Bar from '../../components/share/Bar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CookieManager from '@react-native-cookies/cookies';
import BottomSheetDrawer from '../../components/share/sheet';

import Services from './Services';
import BottomSheet from '@gorhom/bottom-sheet'
import Caro from './Caro';

const Home = () => {
  const user = useSelector((state:any) => state.user.currentUser)
  const sheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['1%', '35%', '50%'], [])

useEffect(() => {
  try {
    CookieManager.get('http://localhost:8080/query')
    .then((cookies) => {
      console.log('CookieManager.get =>', cookies.token.value);
    });
  } catch (error) {
    
  }
})

const handlePresentModalPress = useCallback((index:number) => {
  sheetRef.current?.snapToIndex(index)
}, [])



  return (
    <View style={styles.container}>
      <Navbar username={user.username}/>
      <Caro textColor={Colors.light.primary} header=' Printing made easer' subText='Just upload your document we will take care of the rest' img={require("../../assets/images/header.png")}/>
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
          onPress={() => handlePresentModalPress(1)}
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
      <BottomSheetDrawer onPandown={true} sheetRef={sheetRef} snaPoints={snapPoints} index={0}>
       <View style={styles.headerArea}>
        <Text style={styles.header}>Select Service</Text>
       </View>
       <View style={styles.sheetProducts}><Services /></View>
      </BottomSheetDrawer>

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
  sheetProducts:{
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  headerArea:{
    marginVertical: 20,
    alignItems: "flex-start",
    width: "100%",
    
  },
  header:{
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default Home;
