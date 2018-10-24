import React, { Component } from 'react';

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  componentWillMount() {
    this.style = {
      right: `${this.randomBetween(0, window.innerWidth - 150)}px`,
      top: `${this.randomBetween(0, window.innerHeight - 150)}px`,
      transform: `rotate(${this.randomBetween(-15, 15)}deg)`
    };
  }

  componentDidMount() {
    $(this.refs.note).draggable();
  }

  randomBetween = (min, max) => {
    return min + Math.ceil(Math.random() * max);
  };

  edit = () => {
    this.setState({ editing: true });
  };

  save = () => {
    this.props.onChange(this.refs.newText.value, this.props.index);
    this.setState({ editing: false });
  };

  remove = () => {
    this.props.onRemove(this.props.index);
  };

  renderDisplay() {
    return (
      <div className="note" ref="note" style={this.style}>
        <p>{this.props.children}</p>
        <span>
          <button
            onClick={this.edit}
            className="btn btn-primary glyphicon glyphicon-pencil"
          />
          <button
            onClick={this.remove}
            className="btn btn-danger glyphicon glyphicon-trash"
          />
        </span>
      </div>
    );
  }

  renderForm() {
    return (
      <div className="note" style={this.style}>
        <textarea
          autoFocus
          ref="newText"
          defaultValue={this.props.children}
          className="form-control"
        />
        <button
          onClick={this.save}
          className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk"
        />
      </div>
    );
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}
