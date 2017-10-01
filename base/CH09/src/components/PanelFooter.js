import React, { Component } from 'react';

export default class PanelFooter extends Component {

  render(){
    return(
      <div className="panel-footer">
        <h2>{this.props.footer}</h2>
      </div>
    );
  };
}