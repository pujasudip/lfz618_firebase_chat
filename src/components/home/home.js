import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default props => (
    <div>
        <h1 className="center chatHead"><div className="fire">🔥</div>Chat On Fire<div className="fire">🔥</div></h1>
        <div className="home-container">
            <Link className="btn btn-large red darken-2 chatBtn" to="/chat">Start Chat</Link>
        </div>
    </div>
)