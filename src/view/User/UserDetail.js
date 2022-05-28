import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';



class UserDetail extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        let id = this.props.match.params.id;
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        res && res.data && this.setState({
            user: res.data
        })
    }
    handleBack = () => {
        this.props.history.push(`/user`)
    }
    render() {
        let { user } = this.state
        let isEmpty = user && Object.keys(user).length === 0 && Object.getPrototypeOf(user) === Object.prototype
        return (
            <div>
                <div>User Detail</div>
                {!isEmpty && <>
                    <div className="id">Id: {user.id}</div>
                    <div className="name">Name: {user.name}</div>
                    <div className="email">Email: {user.email}</div>
                    <button type="button" onClick={() => this.handleBack()}>Back</button></>
                }
            </div>
        )
    }
}

export default withRouter(UserDetail);