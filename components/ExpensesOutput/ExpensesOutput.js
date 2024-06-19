import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constans/styles';

const DUMMY_EXPENSES = [
   {
    id: 'e1',
    description: 'Table spoon',
    amount: 1.99,
    date: new Date('2023-02-23')
   },
   {
    id: 'e2',
    description: 'New computer screen',
    amount: 1000.99,
    date: new Date('2023-11-01')
   },
   {
    id: 'e3',
    description: 'Levis Jeans',
    amount: 199.99,
    date: new Date('2023-10-17')
   },
   {
    id: 'e4',
    description: 'Ikea kontor stol',
    amount: 234.99,
    date: new Date('2024-01-03')
   },
   {
    id: 'e5',
    description: 'PLL LOT ticket',
    amount: 899.99,
    date: new Date('2024-03-28')
   },
   {
    id: 'e6',
    description: 'Jabra headphones',
    amount: 1333.99,
    date: new Date('2024-03-29')
   },
   {
    id: 'e7',
    description: 'McDonalds meal',
    amount: 43.99,
    date: new Date('2024-03-30')
   },
];

const ExpensesOutput = ({expenses, expensesPeriod}) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES}/>
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  container:{
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  }
})