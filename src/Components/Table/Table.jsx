import { useState } from "react";

function Table() {
    const [numbers, setNumbers] = useState(() => ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]);

    const renderedNumbers = numbers.map((item, idx) => <div className="number" key={idx}>{item}</div>)

    return (
        <div className="numbers">
            {renderedNumbers}
        </div>
    )
}

export default Table