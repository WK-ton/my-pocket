import { View, StyleSheet,Text  } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../constants/styles";

function ExpensesOutput ({expenses, expensesPeriod, fallbackText}) {
    let content = <Text style={styles.infoText}> {fallbackText} </Text>

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />
    }
    return (
        <View style ={styles.container}>
            {/* ส่ง Dummy_EXPENSE กับ expensePeriod ไป ExpenseSummary*/}
            <ExpensesSummary expenses= {expenses} periodName = {expensesPeriod}/> 
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,  //แนวนอน
        paddingTop: 24, //ข้างบน
        paddingBottom: 0, //ข้างล่าง
        backgroundColor: GlobalStyles.colors.primary700,
    },
    infoText: {
        color: "#FFFF",
        textAlign: 'center',
        fontSize: 16,
        marginTop: 32,
    },
})

export default ExpensesOutput;
