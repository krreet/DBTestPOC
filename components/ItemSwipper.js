import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import Chart from './Chart'

const ItemSwipper = props => {
    return (
        <View style={styles.container}>
            <Swiper style={styles.wrapper} showsButtons={false}>

                <View style={styles.slide1}>

                    <View style={styles.innerview}>
                        <View style={styles.box}>
                            <Text style={styles.upperText}>ISIN</Text>
                            <Text style={styles.lowerText}>US00000000</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.upperText}>Price Date</Text>
                            <Text style={styles.lowerText}>Mar 20, 2018</Text>
                        </View>
                    </View>
                    <View style={styles.innerview}>
                        <View style={styles.box}>
                            <Text style={styles.upperText}>Ticker</Text>
                            <Text style={styles.lowerText}>AAPL</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.upperText}>RIC Code</Text>
                            <Text style={styles.lowerText}>US1234567890</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.slide2}>
                           {/* here i will put my chart */}
                   <Chart />
                </View>
                <View style={styles.slide2}>
     
                    <Text style={styles.text}>Beautiful 3rd</Text>
                </View>
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkblue'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerview: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'navy'
    },
    upperText: {
        color: '#E2DDDC'
    },
    lowerText: {
        color: 'white',
        fontWeight: "bold"
    }
});

export default ItemSwipper;