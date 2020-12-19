import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
    constructor(props) {
      super(props);
      console.log(props)
      this.state = {
          todoList: [
              {isDone: true, value:"Quet nha "},
              {isDone: false, value:"Quet nha "}],
        };
      this.addNewTodo = this.addNewTodo.bind(this);
      this.clickCheckBox = this.clickCheckBox.bind(this);
    }

    addNewTodo() {
        this.setState({
            todoList: [...this.state.todoList,
            {isDone: false, value: 'new todo'}
        ]
        })
    }

    clickCheckBox() {
        this.setState({
            todoList: [...this.state.todoList, 
                {isDone: false, value: 'new todo'}
            ]
        })
    }

    render() {
        console.log(this.state)
        const myTodoList = (myItem, index, arr) => {
            return <div>
                        <input type="checkbox" onclick="clickCheckBox"></input>
                    {
                        !myItem.isDone ?
                        <div>{myItem.value}</div> :
                        <div className="is-done">{myItem.value}</div>
                    }
                </div>
        }
      return (
        <div>    
            <div className="todoapp">
                <div class="header">TODO LIST</div>
                <div class="todoList">
                    {this.state.todoList.map(myTodoList)}
                </div>
                <input type="button" value="Add" onclick="msg()" onClick={this.addNewTodo}></input>
            </div>
        </div>
      );
}
}

  export default Demo;