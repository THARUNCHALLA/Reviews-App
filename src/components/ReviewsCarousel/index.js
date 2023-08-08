import {Component} from 'react'
import './index.css'
import Tharun from '../Tharun'

class ReviewsCarousel extends Component {
  state = {id: 1, last: 4}

  onright = () => {
    const {last, id} = this.state
    if (last > id) {
      this.setState(prevState => ({id: prevState.id + 1}))
    }
  }

  onleft = () => {
    const {id} = this.state
    if (id > 1) {
      this.setState(prevState => ({id: prevState.id - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {id} = this.state
    const akka = reviewsList.filter(each => each.id === id)

    return (
      <div className="image">
        <h4>Reviews</h4>
        <div className="container">
          <button type="button" testid="leftArrow" onClick={this.onleft}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <ul>
            {akka.map(each => (
              <Tharun user={each} key={each.id} />
            ))}
          </ul>
          <button type="button" testid="rightArrow" onClick={this.onright}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
