import { nanoid } from 'nanoid';
import { useState } from "react";
import Button from "../Button/Button";
import Table from "../Table/Table";

function Main() {
    const [numbers, setNumbers] = useState(() => randomDice())


    function randomDice() {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push({
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
            })
        }
        return arr
    }

    function handleClick() {
        setNumbers(randomDice())
    }



    return (
        <main className="main">
            <div className="main_container">
                <h2 className="main_title">Tenzies</h2>
                <p className="main_subtitle">
                    Roll until all dice are the same. Click
                    each die to freeze it at its current value
                    between rolls.
                </p>
                <Table numbers={numbers} />
                <Button click={handleClick} />
            </div>
        </main>
    )
}

export default Main