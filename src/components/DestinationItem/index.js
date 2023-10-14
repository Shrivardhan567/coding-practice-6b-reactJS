// Write your code here
const DestinationItem = props => {
  const {destDetails} = props
  const {name, imgUrl} = destDetails
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
