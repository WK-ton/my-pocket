import {View, Text, StyleSheet, TouchableOpacity} from 'react-native' 
import { GlobalStyles } from '../constants/styles'

function Button({children, style, mode, onPress}) {
    return (
        <View style={style}>
        <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
            <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
        </View>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: GlobalStyles.colors.primary500,
        borderRadius: 4,
        padding: 8,
    },
    buttonText: {
        color: '#FFFF',
        textAlign: 'center',
        //fontSize: 16,
    },
    flat: {
        backgroundColor: 'transparent',
    },
    flatText: {
        color: GlobalStyles.colors.primary200,
    }
})

export default Button