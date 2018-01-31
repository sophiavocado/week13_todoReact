import React, { Component } from 'react';

class InputBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handler}>
          <input name="task" type="text" />
          <input type="submit" value="ADD" />
        </form>
      </div>
    );
  }
}

export default InputBar;
