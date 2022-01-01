import React from 'react'
import { Dimensions, Text, View, ImageBackground, StyleSheet } from 'react-native';
import { Colors } from '../../assets/Constants';
import Carousel from 'react-native-reanimated-carousel';

interface Props {
    img?: any
    header?:string
    subText?:string
    textColor?:string
}
const Caro = ({img, header, subText, textColor }:Props) => {
    const width = Dimensions.get('window').width;
    return (
        <View style={styles.Container}>
          
            <ImageBackground style={styles.img} source={img} >
            <View style={styles.textWrap}>
            <Text style={{...styles.header, color:textColor}}>{header}</Text>
            <Text style={{color:textColor}}>{subText}</Text>
            </View>
            </ImageBackground> 
            {/* <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
                    </View>
                )}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        height: "25%",
        borderRadius: 10,
        overflow: 'hidden',
        // marginVertical: 10,
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
    textWrap:{
        width: "70%",
        height: "100%",
        justifyContent: "center",
        padding: 8
    },
    header:{
        fontSize: 30,
        fontWeight: "700",
        
    },
});

export default Caro