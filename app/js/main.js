class MyComponent extends React.Component {
  render() {
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
  edit() {
    alert("editing");
  }
  remove() {
    alert("removing");
  }
}

ReactDOM.render(
  <MyComponent>
    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
  </MyComponent>,
  document.getElementById("root")
);

/*
function tick() {
  const a = (
    <div>
      <h1 className="btn btn-primary">
        Hello, world! This is a cool react thingy{" "}
        <i className="glyphicon glyphicon-trash" />
      </h1>      <p>
        {new Date().toLocaleTimeString()}
      </p>
    </div>
  );

  ReactDOM.render(a, document.getElementById("root"));
}

tick();
setInterval(tick, 1000);
*/
