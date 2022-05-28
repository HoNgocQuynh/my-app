import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
class UserList extends React.Component {

    state = {
        listUsers: []
    }



    async componentDidMount() {
        let res = await axios.get('https://jsonplaceholder.typicode.com/users');
        res && res.data && this.setState({ listUsers: res.data })
    }

    handleViewUserDetail = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }





    render() {
        let { listUsers } = this.state;
        return (<>
            <div className="list-user-container">
                <div className="title">List Users</div>
                <div className="content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return <div className="child" key={item.id} onClick={() => this.handleViewUserDetail(item)}>
                                <div>Name: {item.name}</div>

                            </div>
                        })
                    }
                </div>
            </div>

        </>);
    }
}
export default withRouter(UserList);