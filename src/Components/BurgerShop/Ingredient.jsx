
const Ingredient = (props) => {
	return (
		<li style={{background: props.ingredient.color }}>
			{props.ingredient.name}
			{props.isList
				? <button onClick={() => props.handleAddToBurger(props.ingredient)}>+</button>
				: <button onClick={() => props.handleRemoveFromBurger(props.idx)}>X</button>
			}
		</li>
	)
}

export default Ingredient