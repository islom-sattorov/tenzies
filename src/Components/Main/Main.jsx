import Button from '../Button/Button'
import Table from "../Table/Table"

function Main() {
    return (
        <main className="main">
            <div className="main_container">
                <h2 className="main_title">Tenzies</h2>
                <p className="main_subtitle">
                    Roll until all dice are the same. Click
                    each die to freeze it at its current value
                    between rolls.
                </p>
                <Table />
                <Button />
            </div>
        </main>
    )
}

export default Main