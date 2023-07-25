const rows: number = 3;
const columns: number = 3;

function CreateMatrix(rows: number, columns: number): number[][] {
    const matrix: number[][] = [];
    for (let i = 0; i < rows; i++) {
        matrix.push(new Array(columns).fill(0));
    }
    console.log(matrix);
    return matrix;
}