import { CreateMatrix } from "./grid";
import { printMatrix } from "./grid";
import { updateMatrix as updateMatrix } from "./game";

// const rows: number = parseInt(process.argv[2], 10);
// const columns: number = parseInt(process.argv[3], 10);
// console.log("help", rows, columns);
// if (isNaN(rows) || isNaN(columns)) {
//     console.error("Please provide valid rows and columns numbers.");
//     process.exit(1);
// }

// const matrix = CreateMatrix(rows, columns);

const rows = 4;
const cols = 4;

let matrix = CreateMatrix(rows, cols);
for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
        matrix[r][c] = 0;
    }
}

matrix[1][1] = 1;
matrix[1][2] = 1;
matrix[2][1] = 1;
matrix[2][2] = 1;

// print matrix.
printMatrix(matrix);
updateMatrix(matrix);
console.log("result");
printMatrix(matrix);

