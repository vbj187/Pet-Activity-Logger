import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to="/" className='navbar-brand'>Pet Activity Logger</Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <Link to="/" className="nav-link">Activities</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/create" className="nav-link">Create Activity Log</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/user" className="nav-link">Add Pet</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
