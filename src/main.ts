import { CreateMatrix } from "./grid";
import { printMatrix } from "./grid";
import { updateMatrix as updateMatrix } from "./game";

const rows: number = parseInt(process.argv[2], 10);
const columns: number = parseInt(process.argv[3], 10);
console.log("help", rows, columns);
if (isNaN(rows) || isNaN(columns)) {
    console.error("Please provide valid rows and columns numbers.");
    process.exit(1);
}

const matrix = CreateMatrix(rows, columns);

// print matrix.
printMatrix(matrix);
updateMatrix(matrix);
console.log("result");
printMatrix(matrix);

