function Button(props) {
    return (
        <button onClick={props.tenz ? props.newgame : props.click} className="table_btn">{props.tenz ? 'New Game' : "Roll"}</button>
    )
}

export default Button