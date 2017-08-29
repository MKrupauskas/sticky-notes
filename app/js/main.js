class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  edit = () => {
    this.setState({ editing: true });
  };

  save = () => {
    var val = this.refs.newText.getDOMNode().value;
    this.setState({ editing: false });
  };

  remove = () => {};

  renderDisplay() {
    return (
      <div className="note">
        <p>
          {this.props.children}
        </p>
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
      <div className="note">
        <textarea
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

class Board extends React.Component() {
  propTypes: {
    count: function(props, propName) {
      if (typeof props[propName] !== "number") {
        return new Error('The count property must be a number');
      }
      if (props[propName] > 100) {
        return new Error('creating ' + props[propName] + ' note is ridicoulus')
      }
    }
  }
  render() {
    return <div className="Board">{props.propName}</div>;
  }
}

ReactDOM.render(
  <Note>
    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
  </Note>,
  document.getElementById("root")
);
