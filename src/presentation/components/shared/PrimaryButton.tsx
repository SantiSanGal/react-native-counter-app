import {
    // GestureResponderEvent,
    Platform, Pressable, StyleSheet, Text, View } from "react-native"

interface PrimaryButtonProps {
    label: string;
    onPress?: () => void;
    // onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
    onLongPress?: () => void;
    // onLongPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

export const PrimaryButton = ({ label, onPress, onLongPress }: PrimaryButtonProps) => {
    return (
        <Pressable
            onPress={() => onPress && onPress()}
            onLongPress={() => onLongPress && onLongPress()}
            style={({pressed}) => [
               styles.button,
               pressed && styles.buttonPressed 
            ]}
        >
            <Text style={{ color: Platform.OS === 'android' ? 'white' : '#4746AB' }}>
                {label}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonPressed: {
        backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white'
    }
})