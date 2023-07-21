import React, {useState} from "react";
import { View, Text, StyleSheet, Alert} from "react-native";
import Button from "../../UI/Button";
import Input from "./Input";
import { getFormattedDate } from "../../util/date";

const ExpenseForm = ({cancelHandler,confirmHandler,editedExpenseId,selectedExpense}) => {
    const [inputValues, setInputValues] = useState({
        amount: selectedExpense ? selectedExpense.amount.toString() : "", // ? ถ้ามี   : ถ้าไม่มี
        date: selectedExpense ? getFormattedDate (selectedExpense.date) : "",
        description: selectedExpense ? selectedExpense.description : "",
    })

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputValues((curInputValues) => {
            return{
                ...curInputValues,
                [inputIdentifier]: enteredValue,
            };
        });        
    }

    function submitHandler () {
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        }
        confirmHandler(expenseData);
    }
    
    return (
        <View style={styles.form}>
            <Text style = {styles.title}>Your Expense </Text>
            <View style = {styles.inputsRow}>
                <Input 
                    style={styles.rowInput}
                    Label = "Amount" 
                    TextInputConfig={{ 
                        //keyboardType: "number-pad",
                        value: inputValues.amount,
                        onChangeText: inputChangeHandler.bind(this, "amount"),
                    }} 
                />
                <Input 
                    style={styles.rowInput}
                    Label = "Date" 
                    TextInputConfig={{
                        placeholder: "YYYY-MM-DD", 
                        maxLength: 10,
                        value: inputValues.date,
                        onChangeText: inputChangeHandler.bind(this, "date"),
                    }} 
                />
            </View>
            <Input 
                Label = "Description"
                TextInputConfig={{ 
                    multiline : true,
                    value: inputValues.description,
                    onChangeText: inputChangeHandler.bind(this, "description"),
                }}                      
            />
            <View style ={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}> {editedExpenseId} </Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    form: {
        marginTop: 40,
    
    },
    title: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 24,
        textAlign: 'center'
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1,
        
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        minWeight: 125, //ขยายตามความยาว
        marginHorizontal: 8,
    },
})

export default ExpenseForm;