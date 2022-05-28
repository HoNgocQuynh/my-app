import React from 'react';
import {  toast } from 'react-toastify';

class AddTodos extends React.Component {
    state = {
        title: ''
    }
    handleClickAdd = () =>{
        if(!this.state.title){
            toast.error('Wow missing')
            return;
        }
        let todo ={id:Math.floor(Math.random() * 10) + 1, title:this.state.title}
        this.props.addTodos(todo); 
        this.setState({title:''})
    }
    handleChangeInput=(event)=>{
        this.setState({title:event.target.value})
    }


    render(){
        return <div className="todo-input">
                <input type='text' value={this.state.title} onChange={(event)=>this.handleChangeInput(event)}  />
                <button className='btn-add' onClick={()=>this.handleClickAdd()}>Add</button>
            </div>
    }
}

export default AddTodos;