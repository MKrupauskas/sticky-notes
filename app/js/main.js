import React, { Component } from "react";
import ReactDOM from "react-dom";
import Note from "./note.js";

class Board extends Component {
  getNotes() {
    return {
      notes: ["Call Bill", "Email Lisa", "Finish Project"]
    };
  }
  update(newText, i) {
    var array = this.getNotes.notes;
    arr[i] = newText;
    this.setState({ notes: array });
  }
  remove() {
    var array = this.getNotes.notes;
    array.splice(i, 1);
    this.setState({ notes: array });
  }
  eachNote = (note, i) => {
    return (
      <Note
        key={i}
        index={i}
        onChange={this.update.bind(this)}
        onRemove={this.remove.bind(this)}
      >
        {note}
      </Note>
    );
  };
  render() {
    return <div className="board">{this.getNotes.note}</div>;
  }
}

ReactDOM.render(<Board />, document.getElementById("root"));
