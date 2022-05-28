import React from 'react';
import AddTodos from './AddTodos';
import { toast } from 'react-toastify';
import RatingStar from '../RatingStar';


class Demo extends React.Component {
    state = {
        list: [{ id: 'id01', title: 'Demo 01' },
        { id: 'id02', title: 'Demo 02' },
        { id: 'id03', title: 'Demo 03' }],
        editTodo: {}
    }
    handleDelete = (todo) => {
        console.log(todo)
        let currentList = this.state.list;
        currentList = currentList.filter((item => item.id !== todo.id))

        // currentList = currentList.push(todo);
        this.setState({ list: currentList });
        toast.success('Delete success')
    }
    handleAdd = (todo) => {
        let { list } = this.state;
        list = [...list, todo]
        this.setState({ list: list })
        toast.success('Wow success!')
    }
    handleEdit = (todo) => {
        let { editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        let listEdited = [...this.state.list]
        if (isEmptyObj === false && todo.id === editTodo.id) {
            let objIndex = listEdited.findIndex((item => item.id === todo.id));
            listEdited[objIndex].title = editTodo.title;
            this.setState({ list: listEdited })
            this.setState({ editTodo: {} })
            toast.success('Edit success')
            return;
        }
        //editTodo is empty
        if (editTodo.title = '') {
            toast.error('missing title');
            return;
        }
        this.setState({ editTodo: todo })
    }
    handleOnChangeTodo = (event) => {
        let editTodoCoppy = { ...this.state.editTodo };
        editTodoCoppy.title = event.target.value;
        this.setState({ editTodo: editTodoCoppy })
        console.log(editTodoCoppy)
    }

    render() {
        let { list } = this.state;
        let editTodo = this.state.editTodo;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log(this.props)

        return <>
            <div className="container">

                <AddTodos addTodos={this.handleAdd} />
                {

                    list.map((item, index) => {
                        return <div className="child" id={item.id}>
                            {
                                isEmptyObj ?
                                    <span>{item.title}</span> :
                                    <span><>
                                        {editTodo.id === item.id ? <span><textarea value={editTodo.title} onChange={(event) => this.handleOnChangeTodo(event)} /></span> :
                                            <span>{item.title}</span>
                                        }
                                    </></span>
                            }

                            {/* <input value={item.title}/> */}
                            <button className='btn-edit' onClick={() => this.handleEdit(item)}>
                                {
                                    isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'
                                }
                            </button>
                            <button className='btn-delete' onClick={() => this.handleDelete(item)}>Delete</button>
                        </div>
                    })
                }
            </div>
        </>
    }
}




export default Demo;