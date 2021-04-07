import { Component } from 'react'
import List from './List';

export default class NameForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          values:[],
          task: "",
          desc:""
        };
      }
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      handleForm = (event) => {
        event.preventDefault();
        const data = [...this.state.values, {id: Date.now(), task: this.state.task, desc: this.state.desc}]
        this.setState({
          values: data,
          task:"",
          desc:""
        });
      }

      deleteTask = (id) => {
        const data = this.state.values.filter(task => task.id !== id)
        this.setState({
          values: data
        });
      }
    
      render() {
        return (
        <div className="container">
        <div className="row">
            <div className="col-3">
                <form className="border p-3">
                    <div className="form-group">
                        <label htmlFor="task">Task</label>
                        <input
                         type="text"
                         className="form-control"
                         id="task"
                         placeholder="Task"
                         name="task"
                         value={this.state.task}
                         onChange={this.handleChange}
                         />
                    </div>
                    <div className="form-group">
                        <label htmlFor="desc">Description</label>
                        <input
                         type="text"
                         className="form-control"
                         id="desc"
                         placeholder="Description"
                         name="desc"
                         value={this.state.desc}
                         onChange={this.handleChange}
                         />
                    </div>
                    <button className="btn btn-info" type="submit" onClick={this.handleForm}>Submit</button>
                </form>
                <List values={this.state.values} deleteTask={this.deleteTask} />
            </div>
            </div>
            </div>
        );
      }
}
