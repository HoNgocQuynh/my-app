import React from 'react';
import ChildComponent from './ChildComponent';
import FormComponent from './FormComponent';
import { withRouter } from 'react-router-dom';



class Hello extends React.Component {
    state = {
        jobArray: [{ id: 1, title: 'Dev', salary: 3000 },
        { id: 2, title: 'Pm', salary: 1000 }
        ]
    }
    componentDidMount() {

    }
    handleRedirect = () => {
        this.props.history.push("/todo");
    }

    addNewJob = (job) => {
        this.setState({
            jobArray: [...this.state.jobArray, job]
        }
        )
        console.log('message from child', job);
    }



    deleteJob = (job) => {
        let currentJob = this.state.jobArray;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            jobArray: currentJob
        })
    }
    render() {


        return (
            <>
                <button onClick={() => this.handleRedirect()}>redirect todos</button>
                <FormComponent addNewJob={this.addNewJob} />

                <ChildComponent name={'child one'} jobArray={this.state.jobArray} deleteJob={this.deleteJob} />

            </>
        )
    }
}





export default withRouter(Hello);