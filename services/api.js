// All of our endpoints
import axios from 'axios'
const baseURL = 'http://localhost:3030/api/transactions'

// Show all Expenses
export const getExpenses = () => {
    const URL = baseURL // our base url
    const response = axios.get(URL) // using axios's get functionality to grab our Expenses
    return response
}

// Show a Expense
export const getExpense = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

// Edit the Expense
export const editExpense = (id, updatedExpense) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedExpense)
    return response
}
// Create the Expense
export const createTodo = (Expense) => {
    const URL = baseURL
    const response = axios.post(URL, Expense)
    return response
}
// Delete the Expense
export const deleteNote = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}