export default class Toast extends Component {
  render () {
    return (
      <div className="fungleo-react-mibile-toast">
        {this.props.tip}
      </div>
    )
  }
}
