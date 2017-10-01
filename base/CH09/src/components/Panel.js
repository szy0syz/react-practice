import React, { Component } from 'react';
import PanelHeader from './PanelHeader';
import PanelBody from './PanelBody';
import PanelFooter from './PanelFooter';

export default class Panel extends Component {
  constructor() {
    super();
    this.state = {
      color: 'black'
    };
  }

  render() {
    return (
      <div className="panel panel-default">
        <input className="btn btn-primary" onClick={() => this.setState({ color: 'blue' })} type="button" value="变蓝"></input>
        <input className="btn btn-warning" onClick={() => this.setState({ color: 'orange' })} type="button" value="变橙"></input>
        <PanelHeader color={this.state.color} header={this.props.header}></PanelHeader>
        <PanelBody body={this.props.body}></PanelBody>
        <PanelFooter footer={this.props.footer}></PanelFooter>
      </div>
    );
  };
}