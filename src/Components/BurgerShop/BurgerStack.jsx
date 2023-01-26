import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <>
      {props.stack.length ?
        <>
          <ul className="burger-stack">
            Use the map function and the Ingredient component here
            {props.stack.map((stack, idx) => {
              return (
                <>
                  {stack.name}
                </>
              )}
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