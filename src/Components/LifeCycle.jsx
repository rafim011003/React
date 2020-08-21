import React from 'react'

class LifeCycle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count : 10
    }
    console.log('constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        count : this.state.count -1
      })
    }, 1000)
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    console.log('nextState', nextState)
    // console.log('this.state', this.state)
    if (nextState.count === -1) {
      return false
    }
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
    setTimeout(() => {
      this.setState({
        count : this.state.count -1
      })
    }, 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render(){
    console.log('render')
    return (
      <div>
        <h3 className="bg-primary text-center p-2">{this.state.count}</h3>
      </div>
    )
  }
}

export default LifeCycle