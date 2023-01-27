
const CategoryMenu = ({updateProductCategory, products = []}) => {
  const catagories = []
  products.forEach(({category}) => {
    if (!catagories.includes(category)) {
      catagories.push(category)
    }
  });

  return (
    <select onChange={(event) => updateProductCategory(event.target.value)}>
    {catagories.map(category => {
      return <option>{category}</option>
    })}
  </select>
  )
}

export default CategoryMenu