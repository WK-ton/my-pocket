import { useReducer, createContext } from "react";

const DUMMY_EXPENSE = [
    {
        id: 'e1',
        description: 'Lunch',
        amount: 149,
        date: new Date('2023-01-01'),
    },
    {
        id: 'e2',
        description: 'Movie',
        amount: 160,
        date: new Date('2023-01-03'),
    },
    {
        id: 'e3',
        description: 'A Computer Book',
        amount: 259,
        date: new Date('2023-01-05'),
    },
    {
        id: 'e4',
        description: 'Coffee',
        amount: 120,
        date: new Date('2023-02-10'),
    },
    {
        id: 'e5',
        description: 'A pair of shoes',
        amount: 399,
        date: new Date('2023-02-12'),
    }   
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date} ) => {},
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString()+ Math.random().toString() 
            return [{...action.payload, id: id}, ...state];         //payload ค่่าเดิม
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            )
            const updatableExpense = state[updatableExpenseIndex]
            const updatedItem = {...updatableExpense, ...action.payload.data}
            const updatedExpense  = [...state];
            updatedExpense[updatableExpenseIndex] = updatedItem;
            return updatedExpense;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}
function ExpenseContextProvider({children}) {
    const [expenseState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSE);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }
    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id});
    }
    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: {id: id, data: expenseData}});
    }

    const value = {
        expenses : expenseState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return (
        <ExpensesContext.Provider value = {value}> 
        {children} 
        </ExpensesContext.Provider>
    )
}
export default ExpenseContextProvider;