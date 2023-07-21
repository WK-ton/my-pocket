import { StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from './src/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './src/UI/IconButton';
import { FontAwesome } from '@expo/vector-icons';

import AllExpenses from './src/screens/AllExpenses';
import ManageExpenses from './src/screens/ManageExpense';
import RecentExpenses from './src/screens/RecentExpenses';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExpenseContextProvider from './src/store/expenses-context';
const Stack = createNativeStackNavigator(); 
const BottomTabs = createBottomTabNavigator();

function BottomTabsOverview () {
    return (
      <BottomTabs.Navigator 
        screenOptions={({ navigation }) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500}, //สีด้านบน
        headerTintColor: "#FFFF", //สีตัวหนังสือ
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500}, // สีด้านล่าง
        tabBarActiveTintColor: GlobalStyles.colors.accent500, //สี icon
        headerRight: ({ tintColor }) => (
        <IconButton 
        icon = 'ios-add-circle-outline' 
        size = {28} 
        color = {tintColor} 
        onPress = {() => {
          navigation.navigate("ManageExpenses");
        }} 
        />
      ),
      })}
      >
        <BottomTabs.Screen 
          name= "RecentExpenses"  
          component={RecentExpenses}
          options = {{
            title: "Recent Expense", // หัวเรื่อง
            tabBarLabel: "Recent", //ตัวหนังสือ ปุ่มกด
            tabBarIcon: ({ color, size}) => (
              <Ionicons name = "hourglass" size={size} color={color} />
            )
          }}
           />
        <BottomTabs.Screen 
          name= "AllExpense" 
          component={AllExpenses} 
          options = {{
            title: "All Expense",
            tabBarLabel: "All",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="calendar" size={size} color={color} />
            ),
          }}
        />
      </BottomTabs.Navigator>
    );
}

export default function App () {
  return (
    <>
      <StatusBar style='auto' />
      <ExpenseContextProvider>
      <NavigationContainer>
          <Stack.Navigator         
          screenOptions = {{
          headerStyle: {backgroundColor: GlobalStyles.colors.primary500}, //สีด้านบน
          headerTintColor: "#FFFF", //สีตัวหนังสือ>
          }}
          >
            <Stack.Screen 
              name = "BottomTabsOverview" 
              component={BottomTabsOverview} 
              options={{ headerShown: false}} // ไม่ให้ BottomtabsOverview Show ด้านบน
              />
            <Stack.Screen name= "ManageExpenses" component={ManageExpenses} />
          </Stack.Navigator>
          </NavigationContainer>
          </ExpenseContextProvider>
   </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});