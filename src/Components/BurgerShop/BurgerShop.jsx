import '../../styles/burger.css'

import { useState } from 'react'

import { ingredients } from '../../data/burger-data'

import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'

const BurgerShop = () => {
  console.log(ingredients)

  const [stack, setStack] = useState([])

  function handleAddToBurger(ingredient) {
    setStack([...stack, ingredient])
  }
  
  function handleRemoveFromBurger(idx) {
    setStack(stack.filter((ing, i) => i !== idx))
    // setIngredientList(ingredientList.filter((ing) => ing.name !== ing.name))
  }
  
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={() => setStack([])}>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients={ingredients} handleAddToBurger={handleAddToBurger} />
        <BurgerStack stack={stack} handleRemoveFromBurger={handleRemoveFromBurger} />
        
      </section>
    </div>
  )
}

export default BurgerShop