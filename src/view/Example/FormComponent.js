import React from 'react';

class FormComponent extends React.Component {
    state ={
        title: '',
        salary: ''
    }
    handleChangeJob = (event) => {
        this.setState({ title: event.target.value})
    }
    handleChangeSalary = (event) => {
        this.setState({ salary: event.target.value})
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        console.log(this.state)
        if(!this.state.title||!this.state.salary){
            alert('Missing required');
            return;
        }
        this.props.addNewJob({id:Math.floor(Math.random() * 10) + 1, title:this.state.title, salary:this.state.salary})
        this.setState({title:'',salary:''})
    }
    render() {

        return (<>
            <h1>Form in React</h1>
            <div>
            <form>
                <label htmlFor="fname">First name:</label><br/>
                <input type="text" value={this.state.title} onChange={(event)=>this.handleChangeJob(event)}/><br/>
                <label htmlFor="lname" >Last name:</label><br/>
                <input type="text" value={this.state.salary} onChange={(event)=>this.handleChangeSalary(event)}/><br/><br/>
                <input type="submit" value="Submit" onClick={(event)=>this.handleSubmit(event)}/>
            </form> 
            </div>
        </>)
    }
}

export default FormComponent;