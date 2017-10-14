import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoHeader from './components/TodoHeader';
import TodoItem from './components/TodoItem';
import TodoFooter from './components/TodoFooter';
import * as FilterTypes from './filterTypes';
export default class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: Math.floor(Math.random() * 1000000), title: '吃药了吗', completed: false },
        { id: Math.floor(Math.random() * 1000000), title: '吃饭了吗', completed: true },
        { id: Math.floor(Math.random() * 1000000), title: '吃水了吗', completed: false }
      ],
      filterType: FilterTypes.ALL
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

  toggleTodo = (id) => {
    let todos = this.state.todos;
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }); // 注意：这里会返回一个新的todos的数组，正好忙住redux的不克可变要求
    this.setState({ todos });
  }

  removeTodo = (id) => {
    let todos = this.state.todos;
    let index = todos.findIndex(todo => todo.id === id);
    todos.splice(index, 1);
    this.setState({ todos });
  }

  toggleAll = (e) => {
    let checked = e.target.checked;
    let todos = this.state.todos;
    todos = todos.map(todo => {
      todo.completed = checked;
      return todo;
    });
    this.setState({ todos });
  }

  changeFilterType = (filterType) => {
    this.setState({ filterType });
  }

  clearCompleted = () => {
    let todos = this.state.todos;
    todos = todos.filter(todo => todo.completed === false);
    this.setState({ todos });
  }

  render() {
    let todos = this.state.todos;
    let activeTodoCount = todos.reduce((count, todo) => count + (todo.completed ? 0 : 1), 0);
    let completedTodoCount = todos.length - activeTodoCount;
    let showTodos = todos.filter((todo) => {
      switch (this.state.filterType) {
        case FilterTypes.ACTIVE:
          return todo.completed === false;
        case FilterTypes.COMPLETED:
          return todo.completed === true;
        default:
          return true;
      }
    });
    let main = (
      <ul className="list-group">
        {
          todos.length > 0 ? <li className="list-group-item">
            <input
              onChange={this.toggleAll}
              checked={activeTodoCount === 0}
              type="checkbox"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{activeTodoCount === 0 ? '全部取消' : '全部选中'}
          </li> : null
        }
        {// this.state.todos.map((todo, index) => <TodoItem
          showTodos.map((todo, index) => <TodoItem
            key={index}
            todo={todo}
            toggle={this.toggleTodo}
            remove={this.removeTodo}
          />)
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
                <TodoFooter
                  completedTodoCount={completedTodoCount}
                  clearCompleted={this.clearCompleted}
                  filterType={this.state.filterType}
                  changeFilterType={this.changeFilterType}
                  activeTodoCount={activeTodoCount}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

