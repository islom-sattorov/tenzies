import { nanoid } from 'nanoid';
import { useEffect, useRef, useState } from "react";
import Confetti from 'react-confetti';
import Table from "../Table/Table";

function Main() {
    const currentRolls = useRef(0)
    const [numbers, setNumbers] = useState(() => randomDice())
    const [tenzies, setTenzies] = useState(() => false);
    // Solution One
    // const choosenNumber = useRef(0)
    const [bestRecord, setBestRecord] = useState(() => JSON.parse(window.localStorage.getItem("bestrecord")) || 0)


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
        currentRolls.current = currentRolls.current + 1
        setNumbers(prev => prev.map(item => {
            return item.isHeld ?
                item : { ...item, value: Math.ceil(Math.random() * 6) }
        }))
    }

    // Solution One
    // const choosenArray = numbers.filter((item) => {
    //     if (item.isHeld) {
    //         choosenNumber.current = item.value
    //         return item
    //     } else {
    //         return
    //     }
    // })

    function winCondition() {
        // Solution One
        // let validateArr = [];
        // for (let i = 0; i < 10; i++) {
        //     if (numbers[i].isHeld && choosenNumber.current === choosenArray[i].value) {
        //         validateArr.push(numbers[i].value)
        //     } else {
        //         return
        //     }
        // }

        // if (validateArr.length === 10) {
        //     setTenzies(prev => !prev)
        // }

        // Solution two
        const allNumbers = numbers.every(num => num.isHeld);
        const firstValue = numbers[0].value
        const allSameValue = numbers.every(num => num.value === firstValue)
        if (allNumbers && allSameValue) {
            setTenzies(true)
            setBestRecord(prev => prev > currentRolls.current ? currentRolls.current : prev)
        }
    }

    function newGame() {
        setNumbers(() => randomDice())
        setTenzies(() => false)
        currentRolls.current = 0
    }


    useEffect(() => {
        winCondition()
    }, [numbers])

    useEffect(() => {
        window.localStorage.setItem("bestrecord", JSON.stringify(bestRecord))
    }, [bestRecord])

    return (
        <main className="main">
            {tenzies && <Confetti />}
            <div className="main_container">
                <h2 className="main_title">Tenzies</h2>
                <p className="main_subtitle">
                    Roll until all dice are the same. Click
                    each die to freeze it at its current value
                    between rolls.
                </p>
                <Table set={setNumbers} numbers={numbers} />
                <button onClick={tenzies ? newGame : handleClick} className="table_btn">{tenzies ? 'New Game' : "Roll"}</button>
                <span className='record'>Current Rolls:{currentRolls.current}</span>
                <span className='record'>Best Record:{bestRecord}</span>
                {tenzies && <h2>You won!</h2>}
            </div>
        </main>
    )
}

export default Main