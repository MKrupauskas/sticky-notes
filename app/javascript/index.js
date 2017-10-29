require("./libraries/jquery.min");
require("./libraries/jquery-ui.min");
require("./libraries/touch-punch.min");
import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/board.jsx";

ReactDOM.render(<Board count={25} />, document.getElementById("root"));
