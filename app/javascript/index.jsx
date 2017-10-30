import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board.jsx';

require('./libraries/jquery.min');
require('./libraries/jquery-ui.min');
require('./libraries/touch-punch.min');

ReactDOM.render(<Board count={25} />, document.getElementById('root'));
