import React from 'react';
import { useEffect, useState } from 'react';
import Button from './components/Button';
import CheckboxInput from './components/CheckboxInput';
import Grid from './components/Grid';
import RangeInput from './components/RangeInput';
import Input from './components/TextInput';
import { CreateMatrix, printMatrix } from "./grid";
import { updateMatrix as updateMatrix } from "./game";
// import { copyGrid, generateGrid, generateRandomGrid, getNextGen, GridSize } from './utils';

export default function App() {
    // set initial state variable, set update state func
    const [gridSize, setGridSize] = useState({ cols: 70, rows: 30 });
    const [grid, setGrid] = useState(CreateMatrix(gridSize.rows, gridSize.cols));
    const [running, setRunning] = useState(false);
    const [gen, setGen] = useState(0);
    const [speed, setSpeed] = useState(100);
    const [showGridLines, setShowGridLines] = useState(true);

    function handleToggleTile(i: number, j: number) {
        let newGrid = grid.map((row) => row.slice());
        newGrid[i][j] = newGrid[i][j] ? 0 : 1;// change between 0 and 1
        setGrid(newGrid);
    }

    function handleClear() {
        let newGrid = CreateMatrix(gridSize.rows, gridSize.cols);
        for (let r = 0; r < newGrid.length; r++) {
            for (let c = 0; c < newGrid[0].length; c++) {
                newGrid[r][c] = 0;
            }
        }
        setGrid(newGrid);
        setGen(0);
    }

    useEffect(() => {
        // when click on stop, stop running
        if (!running) return;
        const timer = setInterval(() => {
            setGrid((current) => {
                let nextGen = updateMatrix(current);
                if (JSON.stringify(current) === JSON.stringify(nextGen)) {
                    setRunning(false);
                }
                return nextGen
            });
            setGen((gen) => gen + 1);
        }, 1000 - speed * 10);

        return () => clearInterval(timer);
    }, [running, speed]);

    const button_style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5px',
        marginBottom: '20px',
        gap: '10px'

    }

    return (
        <div>
            <h1 style={button_style}>Game of Life</h1>
            <div style={button_style}>
                <Button onClick={() => setRunning(!running)}>
                    {running ? 'Stop' : 'Start'}
                </Button>
                <Button onClick={handleClear} disabled={running}>
                    Clear
                </Button>
                <Button
                    onClick={() => {
                        setGrid(CreateMatrix(gridSize.rows, gridSize.cols));
                        setGen(0);
                    }}
                    disabled={running}
                >
                    Random
                </Button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ paddingRight: '100px' }} >Generation:{gen}</p>
                <RangeInput
                    label={`Speed: ${speed}`}
                    min='0'
                    max='100'
                    id='speed'
                    value={speed}
                    onChange={(e) => setSpeed(parseInt(e.target.value))}
                />
            </div>



            <Grid grid={grid} onClick={handleToggleTile} />
        </div >
    )

}