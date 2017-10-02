import React, { Component } from 'react';

export default class PanelHeader extends Component {

  render(){
    return(
      <div style={{color: this.props.color}} className="panel-heading">
        <h2>{this.props.header}</h2>
      </div>
    );
  };
}