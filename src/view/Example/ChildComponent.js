import React from 'react';
import './Child.scss';
class ChildComponent extends React.Component {
  state = {
    status: false
  }
  handleChangeStatus = () => {
    this.setState({ status: !this.state.status });
  }
  handleOnClickElement = (element) => {
    this.props.deleteJob(element)
  }

  render() {
    let jobArray = this.props.jobArray;
    let { status } = this.state;
    return (
      <>
        {status === false ? <div><button className="btn-show" onClick={() => this.handleChangeStatus()}>Show</button></div>
          : <><div className='list-job'>{jobArray.map((item, index) => {
            return <div key={item.id}>Job is: {item.title} - Salary: {item.salary} <></>
              <span onClick={(element) => this.handleOnClickElement(item)}>x</span>
            </div>
          }
          )}
          </div>
            <div><button onClick={() => this.handleChangeStatus()}>Hide</button> </div></>}

      </>
    )
  }
}

export default ChildComponent;