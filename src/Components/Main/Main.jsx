import { nanoid } from 'nanoid';
import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import Table from "../Table/Table";

function Main() {
    const [numbers, setNumbers] = useState(() => randomDice())
    const [tenzies, setTenzies] = useState(() => false);
    const choosenNumber = useRef(0)


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
        setNumbers(prev => prev.map(item => {
            return item.isHeld ?
                item : { ...item, value: Math.ceil(Math.random() * 6) }
        }))
    }

    const choosenArray = numbers.filter((item) => {
        if (item.isHeld) {
            choosenNumber.current = item.value
            return item
        } else {
            return
        }
    })

    function winCondition() {
        let validateArr = [];
        for (let i = 0; i < 10; i++) {
            if (numbers[i].isHeld && choosenNumber.current === choosenArray[i].value)
                validateArr.push(choosenArray[i])
            else {
                return
            }

            if (validateArr.length === 10) {
                console.log("Win")
            }
        }
    }

    useEffect(() => {
        winCondition();
    }, [numbers])

    return (
        <main className="main">
            <div className="main_container">
                <h2 className="main_title">Tenzies</h2>
                <p className="main_subtitle">
                    Roll until all dice are the same. Click
                    each die to freeze it at its current value
                    between rolls.
                </p>
                <Table set={setNumbers} numbers={numbers} />
                <Button click={handleClick} />
            </div>
        </main>
    )
}

export default Main