import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from './constans/styles';
import {Ionicons} from '@expo/vector-icons'

import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
      headerTintColor: 'white',
      tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor: 'orange',
      tabBarInactiveTintColor: 'white'
    }}>
      <BottomTabs.Screen 
        name="RecentExpenses" 
        component={RecentExpenses} 
        options={{
          title: 'Recent Expenses',
          tabBarIcon: ({color, size}) => <Ionicons name='hourglass' size={size} color={color}/>
          }}/>
      <BottomTabs.Screen 
        name="AllExpenses" 
        component={AllExpenses} 
        options={{
          title: 'All Expenses',
          tabBarIcon: ({color, size}) => <Ionicons name='calendar' size={size} color={color}/>
          }} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={{headerShown: false}} />
          <Stack.Screen name="ManageExpense" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}