import { Button, requireNativeComponent, StyleSheet, Text, View, Image, FlatList, Modal, TouchableHighlight, TouchableOpacity} from 'react-native';
import { GlobalStyles } from '../constants/styles';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
    return <ExpenseItem {...itemData.item}/> //... ใช้แทน itemData = ได้
}

function ExpensesList({expenses}) {
    return <FlatList 
        data = {expenses}
        keyExtractor = {item => item.id} 
        renderItem = { renderExpenseItem }
        />
    
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.primary50,
        padding: 8, //ระยะขอบใน
        marginTop: 10, //ระยะขอบนอก
        borderRadius: 6, 
        flexDirection: "row", //ทำให้อยู่ บรรทัด เดียวกัน
        justifyContent: "space-between", //เว้นระยะ ตัวหนังสือ
        alignContent: "center", //อยู่ตรงกลาง
    },
    period: {
        fontSize : 12,
        color: GlobalStyles.colors.primary400,
    },
    amount: {
        fontSize: 16,
        fontWeight: "bold",
        color: GlobalStyles.colors.primary500,
    },
})

export default ExpensesList;