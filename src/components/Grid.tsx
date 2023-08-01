interface Props {
    grid: number[][];
    onClick: (i: number, j: number) => void;
}

export default function Grid({ grid, onClick }: Props) {
    const gridStyle = {
        display: "grid",
    };

    const rowStyle = {
        display: "flex",
    };

    const cellStyle = {
        width: "20px",
        height: "20px",
        backgroundColor: "white",
        outline: "1px solid rgba(144, 175, 175, 0.75)",
        display: "inline-block",
        padding: 0,
        marginBottom: "-3px",
    };

    return (
        <div style={gridStyle}>
            {
                grid.map((row, i) => (
                    <div style={rowStyle}>
                        {
                            row.map((cell, j) => (
                                <div style={{ ...cellStyle, backgroundColor: cell ? "blue" : "white" }}
                                    onClick={() => onClick(i, j)}>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}