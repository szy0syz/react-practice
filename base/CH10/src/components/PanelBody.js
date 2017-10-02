import React, { Component } from 'react';

export default class PanelBody extends Component {

  render(){
    return(
      <div className="panel-body">
        <h2>{this.props.body}</h2>
      </div>
    );
  };
}