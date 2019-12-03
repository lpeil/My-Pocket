import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Routes from './routes';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="body">
                <Switch>
                    <Routes />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
