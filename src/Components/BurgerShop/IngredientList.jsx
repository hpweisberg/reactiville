import Ingredient from "./Ingredient"


const IngredientList = (props) => {
	return (
		<ul>
			{/* Use the map function and the Ingredient component here */}
			{props.ingredients.map((ingredient, idx) =>
				<>
				<Ingredient
						key={idx}
						isList={true}
						ingredient={ingredient}
					/>
				</>
			)}
		</ul>
	)
}

export default IngredientList