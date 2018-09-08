import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.css';
import { Route } from 'react-router-dom';
import Home from './home/home';
import Chat from './chat/chat';
import SetName from './home/set_name';

const App = () => (
    <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/set-name" component={SetName} />
    </div>
);

export default App;
