import React from 'react';
import './Todos.scss';
import AddTodos from './AddTodos';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';

class Todos extends React.Component {

    state = {
        listTodo: [{ id: 'todo1', title: 'Read book' },
        { id: 'todo2', title: 'Sleep' },
        { id: 'todo3', title: 'Wake up' }]
    }

    handleAddTodos = (todo) => {

        let { listTodo } = this.state;
        listTodo = [...listTodo, todo];
        this.setState({ listTodo: listTodo });
        toast.success('WOW Create success')
    }

    handleDelete = () => {
        alert('Delete')
    }

    handleDeleteUser = (user) => {
        console.log(user)
        this.props.deleteUserRedux(user)
    }

    render() {
        let listUsers = this.props.dataRedux;
        console.log(listUsers);
        let listTodo = this.state.listTodo;
        return <div className="todos-list-container">
            <AddTodos addTodos={this.handleAddTodos} />

            <div className="todo-list">
                {listTodo && listTodo.length > 0 &&
                    listTodo.map(function (item, index) {
                        return <div className="todo-child" id={item.id}>
                            <span>{item.title}</span>
                            <button className='btn-edit'>Edit</button>
                            <button className='btn-delete' onClick={() => this.handleDelete()}>Delete</button>
                        </div>

                    })}
            </div>
            <div>
                {
                    listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                        return <div key={index}>
                            {index + 1} - {item.name}<span onClick={() => this.handleDeleteUser(item)}>x</span>
                        </div>
                    })

                }
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
