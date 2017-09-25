import Note from "note.js";

class Board extends React.Component() {
  getInitialState() {
    return {
      notes: ["Call Bill", "Email Lisa", "Finish Project"]
    };
  }
  update(newText, i) {
    var array = this.getInitialState.notes;
    arr[i] = newText;
    this.setState({ notes: array });
  }
  remove() {
    var array = this.getInitialState.notes;
    array.splice(i, 1);
    this.setState({ notes: array });
  }
  eachNote(note, i) {
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
  }
  render() {
    return (
      <div className="board">
        {this.getInitialState.note.map(this.eachNote.bind(this))}
      </div>
    );
  }
}

ReactDOM.render(<Board />, document.getElementById("root"));
