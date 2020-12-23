const Button = props => {
  return (
    <button onClick={props.handleBtnClick}>{props.label}</button>
  )
}

export default Button
