import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import Abc from './Abc';
import Qqq from './Qqq';
import Xyz from './Xyz';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
class Layout extends React.Component {
    render() {
        return (<div>

            <Header />
            <SideBar />
            <Switch>
                <Route path="/abc" component={Abc} />

                <Route path="/qqq" component={Qqq} />

                <Route path="/xyz" component={Xyz} />

            </Switch>
            <Footer />
        </div>



        )
    }
}
export default Layout;