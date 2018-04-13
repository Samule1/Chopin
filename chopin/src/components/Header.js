import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './../App.css';

class Header extends Component {
    render() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>Chopin</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/login'}>Log in</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to={'/top'}>Get Top!</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to={'/playground'}>Playground</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
    }
}

export default Header;