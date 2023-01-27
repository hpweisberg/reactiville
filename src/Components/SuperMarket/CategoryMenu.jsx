
const CategoryMenu = ({products = []}) => {
  const catagories = []
  products.forEach(({category}) => {
    if (!catagories.includes(category)) {
      catagories.push(category)
    }
  });
  return (
    <select>
    {catagories.map(category => {
      return <option>{category}</option>
    })}
  </select>
  )
}

export default CategoryMenu