import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoHeader from './components/TodoHeader';
import TodoItem from './components/TodoItem';
export default class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: Date.now(), title: '吃药了吗', completed: false },
        { id: Date.now(), title: '吃饭了吗', completed: false },
        { id: Date.now(), title: '吃水了吗', completed: false }
      ]
    };
  };

  addTodo = (todo) => {
    //  todo.id = Date.now();
    //  todo.completed = false;  // 这种写法太土，不时尚。
    // 时尚点的写法，fashion！ 但这个只是ES5
    //todo = Object.assign({}, { id: Date.now(), completed: false }, todo);
    // 来个更时尚点的，ES6的。
    todo = { id: Date.now(), completed: false, ...todo };
    let todos = this.state.todos;
    todos.push(todo);
    // 体现redux的state的不可变性
    this.setState({ todos });
  }

  render() {
    let main = (
      <ul className="list-group">
        {
          this.state.todos.map((todo, index) => <TodoItem key={index} todo={todo} />)
        }
      </ul>
    )
    return (
      <div className="container-fluid" style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <div className="panel-heading">
                <TodoHeader addTodo={this.addTodo} />
              </div>
              <div className="panel-body">
                {main}
              </div>
              <div className="panel-footer">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

