import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from '../../assets/Constants';
interface Props {
  title: string;
  arrow: any;
  icon?: any;
  backgroundColor?: string;
  marginBottom?: number;
  isIcon?: boolean;
  font?: number;
  color?: string;
  weight?: string;
}

const Bar = ({
  title,
  icon,
  arrow,
  backgroundColor,
  marginBottom,
  font,
  color,
  isIcon,
  weight,
}: Props) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: backgroundColor,
        marginBottom: marginBottom,
      }}>
      <View style={styles.imgWrap}>
        {isIcon && <Image style={styles.img} source={icon} />}
        <Text style={{fontSize: font, color: color, fontWeight: weight}}>
          {title}
        </Text>
      </View>
      <View>{arrow}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //   backgroundColor: "#fff",
    width: '100%',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#00000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  imgWrap: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Bar;
