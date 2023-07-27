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

export function printMatrix(matrix: number[][]): void {
    for (const row of matrix) {
        console.log(row.join('\t'))
    }
}