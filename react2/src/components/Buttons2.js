import React, { Component } from 'react'
import Card from './Card'

export default class Buttons2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list: [
                 {id: 1, status: false, taskContent: "Lorem ipsum1", name:"Task is not done", button:"Mark as done", color:"btn btn-danger"},
                 {id: 2, status: false, taskContent: "Lorem ipsum2", name:"Task is not done", button:"Mark as done", color:"btn btn-danger"},
                 {id: 3, status: false, taskContent: "Lorem ipsum3", name:"Task is not done", button:"Mark as done", color:"btn btn-danger"}
             ]
        }
    }

    taskDone = (id) =>{
        const index = this.state.list.findIndex(element => element.id === id )
        let data = [...this.state.list];
        data[index] = {...data[index], status:"true", name:"Task is done", button:"Done", color:"btn btn-success" }
        this.setState({
            list: data
        });
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.list.map(item => {return <Card name={item.name} taskContent={item.taskContent}
                        taskDone={() => this.taskDone(item.id)} button={item.button} color={item.color} />; })}
                </div>
            </div>
        )
    }
}
