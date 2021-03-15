import { View, FlatList, Dimensions, Text } from 'react-native';
import React from 'react';

import styles from './styles';

import DATA from '../../Data';

import CarItem from '../CarItem/index';

const CarList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarList;