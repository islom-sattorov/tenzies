
function Table(props) {

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
        // First way
        // props.set(prev => {
        //     const newNumbers = []
        //     for (let i = 0; i < prev.length; i++) {
        //         const currentNum = prev[i]
        //         if (currentNum.id === id) {
        //             const updateNum = {
        //                 ...currentNum,
        //                 isHeld: !currentNum.isHeld
        //             }
        //             newNumbers.push(updateNum)
        //         } else {
        //             newNumbers.push(currentNum)
        //         }
        //     }
        //     return newNumbers
        // })

        // Second way
        // props.set(prev => {
        //     const newNumbers = [];
        //     prev.map(item => {
        //         if (id === item.id) {
        //             let updateNum = {
        //                 ...item,
        //                 isHeld: !item.isHeld
        //             }
        //             newNumbers.push(updateNum)
        //         } else {
        //             newNumbers.push(item)
        //         }
        //     })
        //     return newNumbers
        // })

        // Third way
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


