import React from 'react';
import './Nav.scss';
import {

    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {

    render() {
        return <>
            <div class="topnav">
                <NavLink
                    to="/" exact={true}
                    activeClassName="active"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/layout"
                    activeClassName="active"
                >
                    Layout
                </NavLink>
                <NavLink
                    to="/todo"
                    activeClassName="active"
                >
                    Todos
                </NavLink>
                <NavLink
                    to="/demo"
                    activeClassName="active"
                >
                    Demo
                </NavLink>
                <NavLink
                    to="/user"
                    activeClassName="active"
                >
                    User
                </NavLink>
                {/* <a class="active" href="/">Home</a>
                <a href="/todo">Todos</a>
                <a href="/demo">About</a> */}
            </div>
        </>
    }


}

export default Nav;