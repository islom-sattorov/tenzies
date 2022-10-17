import { useState } from "react";

function Table() {
    const [numbers, setNumbers] = useState(() => ["1", "2", "1", "4", "5", "3", "3", "5", "6", "1"]);

    const renderedNumbers = numbers.map((item, idx) => <div className="number" key={idx}>{item}</div>)

    return (
        <div className="numbers">
            {renderedNumbers}
        </div>
    )
}

export default Table