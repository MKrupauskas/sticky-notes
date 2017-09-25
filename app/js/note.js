export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  edit() {
    this.setState({ editing: true });
  }

  save() {
    var value = this.refs.newText.getDOMNode().value;
    alert("save note value " + value);
    this.setState({ editing: false });
  }

  remove() {}

  renderDisplay() {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          <button
            onClick={this.edit.bind(this)}
            className="btn btn-primary glyphicon glyphicon-pencil"
          />
          <button
            onClick={this.remove.bind(this)}
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
          onClick={this.save.bind(this)}
          className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk"
        />
      </div>
    );
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}
