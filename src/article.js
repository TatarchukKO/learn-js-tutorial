import React from 'react'
import { Component } from 'react'

import CommentList from './comment-list'

class Article extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isCommentsOpen: false,
    }
    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleOpenComments = this.toggleOpenComments.bind(this);
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  toggleOpenComments() {
    this.setState({
      isCommentsOpen: !this.state.isCommentsOpen,
    })
  }

  getComments() {
    if (!this.state.isCommentsOpen) {
      return null
    }
    const { article } = this.props
    return <CommentList comments={article.comments} />
  }

  getBody() {
    if (!this.state.isOpen) {
      return null
    }

    const { article } = this.props
    const { isCommentsOpen } = this.state

    return (
      <div>
        <section>{article.text}</section>
        <button onClick={this.toggleOpenComments}>
          {isCommentsOpen ? 'hide comments' : 'show comments'}
        </button>
        {this.getComments()}
      </div>
    )
  }

  render() {
    const { article } = this.props
    const { isOpen } = this.state

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    )
  }
}

export default Article