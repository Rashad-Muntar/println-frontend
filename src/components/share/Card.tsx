import React from 'react';
import {Text, View, Button, Image, Pressable, StyleSheet} from 'react-native';
import {Colors} from '../../assets/Constants';

interface Props {
  title: string;
  height: string | number;
  width: string | number;
  subtext?: string;
  onPress?: () => void | undefined;

  icon?: any;
}
const Card = ({title, height, width, onPress, icon}: Props) => {
  return (
    <Pressable onPress={onPress} style={{...styles.container, width: width, height: height}}>
      <Image style={styles.img} source={icon} />
      <Text style={styles.cardtext}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#00000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    backgroundColor: Colors.light.Primary80,
  },
  img: {
    width: 50,
    height: 50,
  },
  cardtext:{
    color: "white",
    textAlign: "center"
  }
});

export default Card;
