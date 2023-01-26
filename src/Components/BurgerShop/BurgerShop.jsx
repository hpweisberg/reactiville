import '../../styles/burger.css'

import { useState } from 'react'

import { ingredients } from '../../data/burger-data'

import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'

const BurgerShop = () => {
  console.log(ingredients)

  // const [ingredientList, setIngredientList] = useState(ingredients)
  const [stack, setStack] = useState([])

  function handleAddToBurger(ingredient) {
    setStack([...stack, ingredient])
    // setIngredientList(ingredientList.filter((ing) => ing.name !== ing.name))
  }
  
  function handleRemoveFromBurger(ingredient) {
    setStack([...stack, ingredient])
    // setIngredientList(ingredientList.filter((ing) => ing.name !== ing.name))
  }
  
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients={ingredients} handleAddToBurger={handleAddToBurger} />
        <BurgerStack stack={stack} handleRemoveFromBurger={handleRemoveFromBurger} />
        
      </section>
    </div>
  )
}

export default BurgerShop