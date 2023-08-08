import './index.css'

const Tharun = props => {
  const {user} = props
  const {imgUrl, username, companyName, description} = user
  return (
    <li className="list">
      <img src={imgUrl} alt={username} className="image1" />
      <p className="heading">{username}</p>
      <p className="para">{companyName}</p>
      <p>{description}</p>
    </li>
  )
}

export default Tharun
