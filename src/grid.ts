


export function CreateMatrix(rows: number, columns: number): number[][] {
    const matrix: number[][] = [];
    for (let i = 0; i < rows; i++) {
        const row: number[] = [];
        for (let j = 0; j < columns; j++) {
            row.push(Math.round(Math.random()));
        }
        matrix.push(row);
    }
    return matrix;
}


const rows: number = parseInt(process.argv[2], 10);
const columns: number = parseInt(process.argv[3], 10);

if (isNaN(rows) || isNaN(columns)) {
    console.error("Please provide valid rows and columns numbers.");
    process.exit(1);
}

let matrix = CreateMatrix(rows, columns);

// print matrix.

export function printMatrix(matrix: number[][]): void {
    for (const row of matrix) {
        console.log(row.join('\t'))
    }
}

printMatrix(matrix);
