import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoHeader from './components/TodoHeader';
import TodoItem from './components/TodoItem';
export default class TodoApp extends React.Component {
  render() {
    let main = (
      <ul className="list-group">
        <TodoItem></TodoItem>
      </ul>
    )
    return (
      <div className="container" style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <div className="panel-heading">
                <TodoHeader />
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

