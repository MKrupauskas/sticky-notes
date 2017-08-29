class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { e: false };
  }

  edit = () => {
    this.setState({ e: true });
  }

  save = () => {
    this.setState({ e: false });
  }

  remove = () => {}

  renderDisplay() {
    return (
      <div className="note">
        <p>
          {this.props.children}
        </p>
        <span>
          <button
            onClick={this.edit)}
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
        <textarea defaultValue={this.props.children} className="form-control" />
        <button
          onClick={this.save}
          className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk"
        />
      </div>
    );
  }

  render() {
    return this.state.e ? this.renderForm() : this.renderDisplay();
  }
}

ReactDOM.render(
  <MyComponent>
    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
  </MyComponent>,
  document.getElementById("root")
);
