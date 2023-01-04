import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Reports from "./Reports";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="content">
                <Home/>
                <div className="about">
                    <About/>
                    <div className="reports">
                        <Reports/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
