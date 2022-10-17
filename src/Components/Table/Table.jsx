import { useState } from "react";

function Table() {
    const [numbers, setNumbers] = useState(() => ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]);



    function randomDice() {
        let randomNumber = [];
        for (let i = 0; i < 10; i++) {
            randomNumber.push(Math.floor(Math.random() * 6) + 1)
        }

        return randomNumber
    }

    const renderedNumbers = randomDice().map((item, idx) => <div className="number" key={idx}>{item}</div>)


    return (
        <div className="numbers">
            {renderedNumbers}
        </div>
    )
}

export default Table