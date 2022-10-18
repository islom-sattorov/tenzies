import { useState } from "react";

function Table() {
    const [numbers, setNumbers] = useState(() => ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]);



    function randomDice(num) {
        let arr = [];

        for (let i = 0; i < num; i++) {
            arr.push(Math.floor(Math.random() * 6) + 1);
        }

        return arr
    }

    function renderedNumbers(arr) {
        return arr(10).map((item, idx) => <div className="number" key={idx}>{item}</div>)
    }


    return (
        <div className="numbers">
            {renderedNumbers(randomDice)}
        </div>
    )
}

export default Table


