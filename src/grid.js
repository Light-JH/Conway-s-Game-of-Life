"use strict";
const rows = 3;
const columns = 3;
function CreateMatrix(rows, columns) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push(new Array(columns).fill(0));
    }
    console.log(matrix);
    return matrix;
}
