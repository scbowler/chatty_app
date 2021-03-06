import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Chat from './chat';
import Home from './home';
import Nav from './nav';
import NotFound from './404';
import SetName from './set_name';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/chat" component={Chat} />
                <Route path="/set-name" component={SetName}/>
                <Route component={NotFound}/>
            </Switch>
            
        </div>
    </div>
);

export default App;
