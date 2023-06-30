import React from 'react';
import {Text, View, Button, Image, Pressable, StyleSheet} from 'react-native';
import {Colors} from '../../assets/Constants';

interface Props {
  title: string;
  height: string | number;
  width: string | number;
  subtext?: string;
  onPress?: () => void;

  icon?: any;
}
const Card = ({title, height, width, onPress, icon}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.img} source={icon} />
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: 100,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#00000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    backgroundColor: Colors.light.Primary10,
  },
  img: {
    width: '40%',
    height: '40%',
  },
});

export default Card;
