import React, { Component } from 'react';
import Note from './note.jsx';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  nextId() {
    this.uniqueId = this.uniqueId || 0;

    return this.uniqueId++;
  }

  add(text) {
    let array = this.state.notes;

    array.push({
      id: this.nextId(),
      note: text
    });
    this.setState({ notes: array });
  }

  componentWillMount() {
    const self = this;

    if (this.props.count) {
      $.getJSON(
        'https://baconipsum.com/api/?type=all-meat&sentences=' +
        this.props.count +
        '&start-with-lorem=1&callback=?',
        results => {
          results[0]
            .split('. ')
            .forEach(sentence => self.add(sentence.substring(0, 40)));
        }
      );
    }
  }

  update = (newText, i) => {
    let array = this.state.notes;
    array[i].note = newText;
    this.setState({ notes: array });
  };

  remove = i => {
    let array = this.state.notes;
    array.splice(i, 1);
    this.setState({ notes: array });
  };

  eachNote = (note, i) => {
    return (
      <Note
        key={note.id}
        index={i}
        onChange={this.update}
        onRemove={this.remove}
      >
        {note.note}
      </Note>
    );
  };

  render() {
    return (
      <div className="board">
        {this.state.notes.map(this.eachNote)}
        <button
          className="btn btn-sm btn-success glyphicon glyphicon-plus"
          onClick={this.add.bind(null, 'New note')}
        />
      </div>
    );
  }
}
