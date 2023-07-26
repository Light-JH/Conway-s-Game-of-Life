// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

export function updateCell(matrix: number[][], row: number, col: number) {
    let live = numofLiveNeighbors(matrix, row, col);
    let cur = matrix[row][col];
    if (cur === 1) {
        if (live < 2 || live > 3) {
            matrix[row][col] = 0;
        } else {
            if (live === 3) {
                matrix[row][col] = 1;
            }
        }
    }

    function numofLiveNeighbors(matrix: number[][], row: number, col: number) {

        let rows = [row - 1, row, row + 1]
        let cols = [col - 1, col, col + 1]
        let live = 0;
        for (var r of rows) {
            for (var c of cols) {
                if (r > 0 && r < matrix.length && c > 0 && c < matrix[0].length) {
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
}