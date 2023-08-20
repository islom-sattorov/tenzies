import { nanoid } from 'nanoid';
import { useEffect, useRef, useState } from "react";
import Confetti from 'react-confetti';
import Table from "../Table/Table";

function Main() {
  const currentRolls = useRef(0)
  const [numbers, setNumbers] = useState(() => randomDice())
  const [tenzies, setTenzies] = useState(false);
  const [bestRecord, setBestRecord] = useState(JSON.parse(localStorage.getItem("bestrecord")) || 0)


  function randomDice() {
    return Array.from({ length: 10 }).map(() => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }))
  }


  function handleClick() {
    currentRolls.current = currentRolls.current + 1
    setNumbers(prev => prev.map(item => {
      return item.isHeld ?
        item : { ...item, value: Math.ceil(Math.random() * 6) }
    }))
  }

  function winCondition() {
    const allNumbers = numbers.every(num => num.isHeld);
    const firstValue = numbers[0].value
    const allSameValue = numbers.every(num => num.value === firstValue)
    if (allNumbers && allSameValue) {
      setTenzies(true)
      if (bestRecord === 0 || bestRecord > currentRolls.current) {
        setBestRecord(currentRolls.current);
      }
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
    localStorage.setItem("bestrecord", JSON.stringify(bestRecord))
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
