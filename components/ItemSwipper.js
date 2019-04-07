import React from 'react';

import {View,StyleSheet,Text} from 'react-native';
import Swiper from 'react-native-swiper';

const ItemSwipper = (props) => {
    return (
        <View style={styles.container}>
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful 2</Text>
                </View>
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
        container:{
            flex:1,
            padding:10,
        },
    wrapper:{
    },
    slide1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default ItemSwipper;