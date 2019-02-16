import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  render() {
    const { onAddItem } = this.props;
    return (
      <form className="item-add-form">
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="Whats need to be done?"
        />
        <button
          className="btn btn-warning"
          onClick={() => onAddItem("Hello World")}
        >
          Add item
        </button>
      </form>
    );
  }
}
