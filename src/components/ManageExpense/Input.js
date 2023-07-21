import { Text , View , TextInput , StyleSheet} from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Input = ({Label, TextInputConfig, style}) => {
    const inputStyles = [styles.input];

    TextInputConfig && TextInputConfig.multiline 
     ? inputStyles.push(styles.inputMultiline)  //ใส่ค่าไปใน inputStyles
     : null;
        
    return (
        <View style = {[styles.inputContainer, style]}>
        <Text style = {styles.label}>{Label}</Text>
        <TextInput style = {inputStyles}
            {...TextInputConfig}

        
        
        
        />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4,

    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    },
});
export default Input;