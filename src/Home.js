import React from 'react';

const Home = () => {

    return (
        <div className="Home">
            <label>Date: </label><br/><input type="date" min="2000-01-01" max="2024-01-01"/>
            <br/><br/>
            <label>Item: </label><input type="text"/>
            <br/><br/>
            <label>Price: </label><input type="number"/>
            <br/><br/>
            <label>Category:</label><br/>
            <select id>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="2">3</option>
            </select>
            <br/><br/>
            <label>Description: </label><textarea placeholder="Enter description"></textarea>
            <br/><br/>
            <button id="plus">submit</button>

        </div>

    );
}
export default Home;