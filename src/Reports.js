import React, { useState , useEffect} from 'react';

const Reports = () => {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [expenses, setExpenses] = useState([]);
    const [totalExpenses, setTotalExpenses] = useState(0);

    // Fetch the expenses from local storage
    useEffect(() => {
        const inputsFromLocalStorage = JSON.parse(localStorage.getItem('inputs'));
        if (inputsFromLocalStorage) {
            setExpenses(inputsFromLocalStorage);
        }
    }, []);

    // Filter the expenses by the selected year and month
    const filteredExpenses = expenses.filter(expense => {
        const expenseDate = new Date(expense.date);
        return expenseDate.getFullYear() === selectedYear && expenseDate.getMonth() === selectedMonth;
    });

    // Calculate the total expenses for the filtered expenses
    const calculateTotalExpenses = () => {
        let total = 0;
        filteredExpenses.forEach(expense => {
            total += expense.price;
        });
        setTotalExpenses(total);
    }

    return (
        <div>
            <h1>Expense Report</h1>
            <div>
                <label>Year:</label>
                <select value={selectedYear} onChange={e => setSelectedYear(e.target.value)}>
                    <option value="" disabled>Select a year</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
            <div>
                <label>Month:</label>
                <select value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)}>
                    <option value="" disabled>Select a month</option>
                    <option value="0">January</option>
                    <option value="1">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                    ...
                </select>
            </div>
            <div>
                <button onClick={calculateTotalExpenses}>Show expenses</button>
            </div>
            {filteredExpenses.length > 0 && (
                <table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredExpenses.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.date}</td>
                            <td>{expense.item}</td>
                            <td>{expense.price}</td>
                            <td>{expense.category}</td>
                            <td>{expense.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
            <div>
                <p>Total expenses for selected period: {totalExpenses}</p>
            </div>
        </div>
    )
}

export default Reports;
