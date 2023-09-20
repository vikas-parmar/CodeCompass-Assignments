const container = {
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    gap: "2px"
}
const bar = (l) => {
    return {
        background: "black",
        borderRadius: "10px",
        width: `${l}px`,
        height: "2px"
    };
}

const Short = () => {
    return (
        <div style={container}>
            <div style={bar(15)}></div>
            <div style={bar(10)}></div>
            <div style={bar(5)}></div>
        </div>
    )
}

export default Short;