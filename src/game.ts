// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

import { CreateMatrix, printMatrix } from "./grid";

export function updateMatrix(matrix: number[][]): number[][] {
    let newMatrix = matrix.map((row) => row.slice());
    let neighborMatrix = matrixNeighbors(matrix);
    console.log("live map");
    printMatrix(neighborMatrix);
    let rows = neighborMatrix.length
    let cols = neighborMatrix[0].length
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let live = neighborMatrix[r][c];
            let cur = newMatrix[r][c];
            if (cur === 1) {
                if (live < 2 || live > 3) {
                    newMatrix[r][c] = 0;
                }
            } else if (live === 3) {
                newMatrix[r][c] = 1;
            }
        }
    }
    return newMatrix;
}

function numofLiveNeighbors(matrix: number[][], row: number, col: number): number {
    let rows = [row - 1, row, row + 1]
    let cols = [col - 1, col, col + 1]
    let live = 0;
    for (var r of rows) {
        for (var c of cols) {
            if (r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length) {
                if (matrix[r][c] === 1) {
                    live += 1;
                }
            }
        }
    }
    // return number of live neighbors
    if (matrix[row][col] === 1) {
        return live - 1;
    } else {
        return live;
    }
}

function matrixNeighbors(matrix: number[][]): number[][] {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let liveMatrix = CreateMatrix(rows, cols);
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            liveMatrix[r][c] = numofLiveNeighbors(matrix, r, c);
        }
    }
    return liveMatrix;
}