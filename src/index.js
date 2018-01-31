import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputBar from './components/input_bar';
import TaskList from './components/task_list';

//const App = () => <h1>Hello World</h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: []
    };
    this.getInput = this.getInput.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
  }

  getInput(event) {
    event.preventDefault();
    this.setState({ task: [...this.state.task, event.target.task.value] });
    event.target.task.value = '';
  }

  deleteInput(index) {
    const newTaskList = this.state.task.filter((a, i) => {
      return index !== i;
    });
    this.setState({ task: newTaskList });
  }

  render() {
    return (
      <div>
        <h1>To-Do App</h1>
        <InputBar handler={this.getInput} />
        <TaskList delete={this.deleteInput} task={this.state.task} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
