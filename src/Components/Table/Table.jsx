
function Table(props) {

    function renderedNumbers(arr) {
        return arr.map(item => <div className="number" key={item.id}>{item.value}</div>)
    }


    return (
        <div className="numbers">
            {renderedNumbers(props.numbers)}
        </div>
    )
}

export default Table


