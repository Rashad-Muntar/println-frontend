import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors} from '../../assets/Constants';
import UploadSteps from './uploadSteps';
import Caro from '../Home/Caro';

const Print = () => {
  return (
    <View style={styles.container}>
      <Caro
        header="We print everything"
        subText="With jus few steps you are good to go"
        textColor={Colors.light.primary}
        img={require('../../assets/images/printBg.webp')}
      />
      <UploadSteps />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17,
  },
});

export default Print;
