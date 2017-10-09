import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
// mapStateToProps 把store里的状态对象映射成组件属性
let connect = (mapStateToProps, mapDispatchToProps) => (PrivateComponent) => {
  class Proxy extends Component {
    constructor() {
      super();
      // 在构造函数里是拿不到this.context的！
      this.state = {}; //mapStateToProps(this.context.store.getState());
    }
    componentWillMount() {
      this.unsubscribe = this.context.store.subscribe(() => {
        this.setState(mapStateToProps(this.context.store.getState()));
      })
    }
    componentWillUnmount() {
      this.unsubscribe();
    }
    render() {
      return <PrivateComponent {...this.state} {...mapDispatchToProps(this.context.store.dispatch) } />
    }
  }

  Proxy.contextTypes = {
    store: PropTypes.object
  };

  return Proxy;
}

export default connect;