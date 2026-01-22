import { globalStyles } from '../theme/global.styles';
import { Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import React, { useState } from 'react'

import Icon from 'react-native-vector-icons/Ionicons';


export const CounterM3Screen = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={globalStyles.centerContainer}>
            <Text style={globalStyles.title}>
                {count}
            </Text>

            <Icon name="accessibility-outline"/>

            <FAB
                icon="add"
                style={globalStyles.fab}
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
            />
        </View>
    )
}