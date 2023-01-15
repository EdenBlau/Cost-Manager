import React from 'react';
import './Home.css';
import { useState ,useEffect} from 'react';


const Home = () => {


    useEffect(() => {
        const inputsFromLocalStorage = JSON.parse(localStorage.getItem('inputs'));
        if (inputsFromLocalStorage) {
            setInputs(inputsFromLocalStorage);
        }
    }, []);

    const [date, setDate] = useState('');
    const [item, setItem] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [inputs, setInputs] = useState([]);
    const [error, setError] = useState('');

    const today = new Date();
    const todayStr = today.toISOString().slice(0, 10);



    return (
        <div className="Home">
            <h1>Add your expense here</h1>
            <div className="form-container">


                <div className="inputGroup">
                    <label htmlFor='name'>Date</label>
                    <input type="date" value={date} onChange={e=>setDate(e.target.value)} required autoComplete={'off'} max={todayStr}/>
                </div>

                <div className="inputGroup">
                    <label>Item: </label><input type="text" value={item} onChange={e=>setItem(e.target.value)}/>
                </div>

                <div className="inputGroup">
                    <label>Price: </label><input type="text" pattern={"[0-9]*"} inputMode={"numeric"} value={price} onChange={e=>setPrice(e.target.value)}/>
                </div>

                <div className="inputGroup">
                    <label>Category:</label>
                    <select value={category} onChange={e=>setCategory(e.target.value)}>
                        <option value="food">Food</option>
                        <option value="personalSpending">Personal spending</option>
                        <option value="children">Children</option>
                        <option value="rent">Rent</option>
                        <option value="transportation">Transportation</option>
                        <option value="utilities">Utilities</option>
                        <option value="medical">Medical</option>
                        <option value="insurance">Insurance</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <div className="inputGroup">
                    <label>Description: </label><textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Enter description"></textarea>
                </div>

                <div className="submit">
                    <button className={"add-cost"} id="plus" onClick={() => {
                        if (!date || !item || !price) {
                            alert("please enter all field")
                            return;
                        }
                        setError('');
                        setInputs([...inputs, { date, item, price, category, description }]);
                        localStorage.setItem('inputs', JSON.stringify([...inputs, { date, item, price, category, description }]));
                        setDate(''); // Clear the date input
                        setItem(''); // Clear the item input
                        setPrice(''); // Clear the price input
                        setCategory('food'); // Reset the category to default
                        setDescription(''); // Clear the description input
                    }}>Add cost</button>
                    {error && <p className="error">{error}</p>}
                </div>

            </div>


            {/*The component then maps over the items in the inputs state variable and displays them in a list*/}
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Delete item</th>
                </tr>
                </thead>
                <tbody>
                {inputs.map((input, index) => (
                    <tr key={index}>
                        <td>{input.date}</td>
                        <td>{input.item}</td>
                        <td>{input.price}</td>
                        <td>{input.category}</td>
                        <td>{input.description}</td>
                        <td>
                            <button
                                className={'delete-button'}
                                onClick={() => {
                                    inputs.splice(index, 1);
                                    setInputs([...inputs]);
                                    localStorage.setItem('inputs', JSON.stringify(inputs));
                                }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>


        </div>

    );
}
export default Home;
