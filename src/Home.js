import React from 'react';
import './Home.css';

const Home = () => {

    return (
        <div className="Home">
            <h1>Add your expanse here</h1>
            <div className="form-container">


                <div className="inputGroup">
                    <label htmlFor='name'>Date</label>
                    <input type="date" required="" autoComplete={'off'}/>
                </div>

                <div className="inputGroup">
                    <label>Item: </label><input type="text"/>
                </div>

                <div className="inputGroup">
                    <label>Price: </label><input type="text"/>
                </div>

                <div className="inputGroup">
                    <label>Category:</label>
                    <select id>
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
                    <label>Description: </label><textarea placeholder="Enter description"></textarea>
                </div>

                <div className="submit">
                    <button id="plus">Add cost</button>
                </div>
            </div>

        </div>
    );
}
export default Home;
