import React, { Component } from 'react'

export default (OriginalComponent) => class WrappedComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      areCommentsOpen: false,
    }
    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleOpenComments = this.toggleOpenComments.bind(this);
  }


  toggleOpen(e) {
    e && e.preventDefault && e.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  toggleOpenComments(e) {
    e && e.preventDefault && e.preventDefault()
    this.setState({
      areCommentsOpen: !this.state.areCommentsOpen,
    })
  }


  render() {
    // ...args spread оператор для передали аргументов из компонента в компоненту (из функции в фукцию)
    return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} toggleOpenComments={this.toggleOpenComments} />
  }
}