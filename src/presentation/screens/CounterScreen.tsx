import { PrimaryButton } from '../components/shared/PrimaryButton';
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import React, { useState } from 'react'


export const CounterScreen = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Button
                onPress={() => { setCount(count - 1) }}
                onLongPress={() => { setCount(0) }}
            >
                Decrementar
            </Button>
            <PrimaryButton
                label={"-1"}
                onPress={() => { setCount(count - 1) }}
                onLongPress={() => { setCount(0) }}
            ></PrimaryButton>
            {/* <Button
                title='-1'
                onPress={() => setCount(count - 1)}
            ></Button> */}
            <Text style={styles.tile}>
                {count}
            </Text>
            <PrimaryButton
                label={"+1"}
                onPress={() => { setCount(count + 1) }}
                onLongPress={() => { setCount(0) }}
            ></PrimaryButton>
            <Pressable
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
            >
                <Text>+ 1</Text>
            </Pressable>
            {/* <Button
                title='+1'
                onPress={() => setCount(count + 1)}
            ></Button> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tile: {
        fontSize: 80,
        color: 'black',
        fontWeight: 300
    }
})