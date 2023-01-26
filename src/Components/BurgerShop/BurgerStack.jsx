import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <>
      {props.stack.length ?
        <>
          <ul className="burger-stack">
            {props.stack.map((ing, idx) => {
              return (
                <>
                  <Ingredient
                    key={idx}
                    idx={idx}
                    isList={false}
                    ingredient={ing}
                    handleRemoveFromBurger={props.handleRemoveFromBurger} />

                </>
              )
            }
            )}
          </ul>
        </>
        :
        <>
          <div>No ingredient yet</div>
        </>
      }
    </>
  )
}

export default BurgerStack