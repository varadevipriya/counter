import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {name} = this.props
    return <h1 className="greeting">Hello,{name}</h1>
  }
}
export default Welcome
