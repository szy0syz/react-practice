import React, { Component } from 'react';

const Profile = ({ user }) => (<div>username: {user.name}</div>);

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(err, info) {
    console.log(err, info);
    this.setState({ hasError: true });
    // send Error...
  }
  render() {
    if (this.state.hasError) {
      return <div>Oops, something went wrong!</div>;
    }
    return this.props.children;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { name: 'Jerry Shi' },
    };
  }
  handleClick = () => {
    this.setState({ user: null });
  }
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Profile user={this.state.user}></Profile>
        </ErrorBoundary>

        <button onClick={this.handleClick}>点我就出错</button>
      </div>
    );
  }
}

export default App;