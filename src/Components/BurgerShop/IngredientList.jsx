import Ingredient from "./Ingredient"


const IngredientList = (props) => {
	return (
		<ul>
			Use the map function and the Ingredient component here
			{props.ingredients.map((ingredients, idx) => 
			<Ingredient
			key={idx}
			isList={true}
			Ingredient={ingredients}
			/>
			)}
		</ul>
	)
}

export default IngredientList