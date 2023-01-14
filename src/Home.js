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
    const [category, setCategory] = useState('food');
    const [description, setDescription] = useState('');
    const [inputs, setInputs] = useState([]);



    return (
        <div className="Home">
            <h1>Add your expanse here</h1>
            <div className="form-container">


                <div className="inputGroup">
                    <label htmlFor='name'>Date</label>
                    <input type="date" value={date} onChange={e=>setDate(e.target.value)} required="" autoComplete={'off'}/>
                </div>

                <div className="inputGroup">
                    <label>Item: </label><input type="text" value={item} onChange={e=>setItem(e.target.value)}/>
                </div>

                <div className="inputGroup">
                    <label>Price: </label><input type="text" value={price} onChange={e=>setPrice(e.target.value)}/>
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
                    <button id="plus" onClick={()=>{
                        setInputs([...inputs,{date,item,price,category,description}]);
                        localStorage.setItem('inputs', JSON.stringify([...inputs,{date,item,price,category,description}]));
                    }}>Add cost</button>
                </div>

            </div>

            {/*The component then maps over the items in the inputs state variable and displays them in a list*/}
            {inputs.map((input, index) => (
                <li className={'list-item'} key={index}>
                    Date: {input.date} Item: {input.item} Price: {input.price} Category: {input.category} Description: {input.description}
                    <button onClick={()=>{
                        inputs.splice(index, 1);
                        setInputs([...inputs]);
                        localStorage.setItem('inputs', JSON.stringify(inputs));
                    }}>Delete</button>
                </li>
            ))}

        </div>

    );
}
export default Home;
