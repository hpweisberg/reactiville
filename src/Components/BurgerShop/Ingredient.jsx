
const Ingredient = (props) => {
	return (
		<li>
			{props.ingredient.name}
			{props.isList
				? <button onClick={() => props.handleAddToBurger(props.ingredient)}>+</button>
				: <button onClick={() => props.handleRemoveFromBurger(props.ingredient)}>X</button>
			}
		</li>
	)
}

export default Ingredient