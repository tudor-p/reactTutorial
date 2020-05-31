import React from 'react'

// an issue with the <a> tags below is that they reload the page whenever clicked. Therefore we use link and navlink
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = props => {
    // setTimeout(() => {
    //     props.history.push('/about') //this is how you make a redirect after 3 seconds for example
    // }, 3000)
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li> {/*This gives an 'active' class to the tab */}
                <li><Link to="/About">About</Link></li> {/*This is a better way of linking stuff, because page is not reloaded*/}
                <li><Link to="/Contact">Contacts</Link></li>
            </ul>
        </nav>
    )
}

// withRouter is a higher order component (basically a wrapper class, that grants all the props of that class to another class)
// we use it here because Navbar's props could not beneft from <BrowserRouter> tag in the App.js file
export default withRouter(Navbar)