import { View, Text } from 'react-native';
import React from 'react';

const CarItem = (props) => {

    const { name } = props.car

    return (
        <View>
            <Text>{name}</Text>    
        </View>
    )
}


export default CarItem;