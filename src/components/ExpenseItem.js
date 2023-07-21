import { TouchableHighlight } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { getFormattedDate } from "../util/date";


function ExpenseItem({description, date, amount, id}) { //การรับค่าจาก ExpenseList
    const navigation = useNavigation();

    function expensePressHandler() { //ตัวรับค่า และ ส่งค่าไปอีกหน้า 
        navigation.navigate("ManageExpenses",{
            expenseId: id,
        });
    }
    return (
        <TouchableHighlight onPress= {expensePressHandler} underlayColor = "">
        <View style = {styles.expenseItem}>
            <View>
            <Text style = {[styles.textBase, styles.description]}> {description} </Text>
            <Text style = {styles.textBase}> {getFormattedDate(date)} </Text>
            </View>
        <View style = {styles.amountContainer}>
            <Text style = {styles.amount}> {amount.toFixed(2)}฿ </Text>
        </View>
        </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    expenseItem: {
        backgroundColor: GlobalStyles.colors.primary500,
        padding: 8, //ระยะขอบใน
        marginVertical: 5,
        borderRadius: 6, 
        justifyContent: "space-between", //เว้นระยะ ตัวหนังสือ
        flexDirection: "row",
        
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: "bold",
    },
    amountContainer: {
        backgroundColor: "#FFFF",
        paddingHorizontal: 12,
        paddingVertical: 4,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 4,
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontSize: "bold",
    }
});

export default ExpenseItem;