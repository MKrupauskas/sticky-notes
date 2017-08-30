import Note from "note.js";
class Board extends React.Component() {
  render() {
    return (
      <div className="Board">
        {props.propName}
      </div>
    );
  }
}

ReactDOM.render(<Board />, document.getElementById("root"));
