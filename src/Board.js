import React from 'react';
import './Game.css';
const CELL_SIZE = 20; const WIDTH = 800; const HEIGHT = 600;

class Board extends React.Component {
    render() {
        return (
            <div>
                <div className="Board" style={{ width: WIDTH, height: HEIGHT }}>
                </div>
            </div>);
    }
}

export default Board;