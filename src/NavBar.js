import React from 'react'
//import logo from './logo192.png'
import './navbar.scss'
export default function NavBar () {
    return (
        <nav className ="navbar">
            <img src='./logo192.png' alt="city tours company"/>
            <ul>
                <li>
                    <a href = "/" className="nav-link">
                        home
                    </a>
                </li>
                <li>
                    <a href = "/" className="nav-link">
                        about
                    </a>
                </li>
                <li>
                    <a href = "/" className="nav-link active">
                        tours
                    </a>
                </li>
            </ul>
        </nav>
    )
}