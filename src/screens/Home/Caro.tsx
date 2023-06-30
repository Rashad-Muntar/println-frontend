import React from 'react'
import { Dimensions, Text, View, ImageBackground, StyleSheet } from 'react-native';
import { Colors } from '../../assets/Constants';
import Carousel from 'react-native-reanimated-carousel';

const Caro = () => {
    const width = Dimensions.get('window').width;
    return (
        <View style={styles.Container}>
          
            <ImageBackground style={styles.img} source={require('../../assets/images/header.png')} >
            <View style={styles.textWrap}>
            <Text style={styles.header}>Printing made easer</Text>
            <Text style={styles.subText}>Just upload your document we will take care of the rest</Text>
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
        marginVertical: 10,
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
        color: Colors.light.primary
    },
    subText:{
        color: Colors.light.primary
    }
});

export default Caro