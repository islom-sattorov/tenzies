const Table = (props) => {
    function renderedNumbers(arr) {
        return arr.map(item => <div
            className={item.isHeld ? 'isHeld' : 'number'}
            key={item.id}
            onClick={() => hold(item.id)}
        >
            {item.value}
        </div>
        )
    }

    function hold(id) {
        props.set(prev => prev.map(item => {
            return item.id === id ?
                { ...item, isHeld: !item.isHeld } :
                item
        }))
    }

    return (
        <div className="numbers">
            {renderedNumbers(props.numbers)}
        </div>
    )
}

export default Table


