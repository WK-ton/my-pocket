import { Text,View } from "react-native"
import { StyleSheet } from "react-native";
import { useLayoutEffect, useContext } from "react"; //แก้หน้า page 
import { GlobalStyles } from "../constants/styles";
import IconButton from "../UI/IconButton";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpense({route,navigation}){
    const expensesCtx = useContext(ExpensesContext)
    const editedExpenseId = route.params?.expenseId;

    const selectedExpense = expensesCtx.expenses.find(
        (expense) => expense.id === editedExpenseId
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            title: editedExpenseId ? 'Update Expense': 'Add Expense',
        })
    }, [navigation, editedExpenseId,]);

    function cancelHandler() {
        navigation.goBack();
    }
    function confirmHandler(expenseData) {
        if (editedExpenseId) {
            //update
            expensesCtx.updateExpense(editedExpenseId, expenseData);
        } else {
            //add
            expensesCtx.addExpense(expenseData);
        }
        navigation.goBack();    
    }
    function deleteExpenseHandler(){
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <ExpenseForm 
                cancelHandler = {cancelHandler}
                confirmHandler = {confirmHandler}
                editedExpenseId = {editedExpenseId ? 'Update' : 'Add'}
                selectedExpense= {selectedExpense}
            />
            <View style ={styles.deleteContainer}>
                <IconButton
                    icon='ios-trash-bin'
                    color={GlobalStyles.colors.error500}
                    size={36}
                onPress={deleteExpenseHandler}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center",
    }
})
export default ManageExpense;