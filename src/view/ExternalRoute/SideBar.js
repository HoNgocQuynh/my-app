import React from 'react';
import { Link, BrowserRouter as Router, NavLink } from 'react-router-dom';
class SideBar extends React.Component {
    render() {
        return (<div><h2>SideBar</h2>

            <NavLink to="/abc">go to abc</NavLink>
            <NavLink to="/qqq">go to qqq</NavLink>
            <NavLink to="/xyz">go to xyz</NavLink>
        </div>
        )
    }
}

export default SideBar;