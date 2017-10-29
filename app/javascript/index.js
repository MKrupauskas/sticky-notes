require("./libraries/jquery.min");
require("./libraries/jquery-ui.min");
require("./libraries/touch-punch.min");
require("../styles/styles.scss");
import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/board.jsx";

ReactDOM.render(<Board count={25} />, document.getElementById("root"));
