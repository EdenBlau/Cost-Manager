import Navbar from './navbar';
import Home from './home';
import Reports from "./reports";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./about";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/report">
                            <Reports/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;
