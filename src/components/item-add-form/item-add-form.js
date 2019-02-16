import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state: {
    label: ""
  };
  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.state.label = "";
  };
  render() {
    return (
      <form className="item-add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="Whats need to be done?"
        />
        <button className="btn btn-warning">Add item</button>
      </form>
    );
  }
}
