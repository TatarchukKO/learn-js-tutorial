import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

import CommentList from './comment-list'
import ToggleOpen from '../decorators/toggleOpen'

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  }

  getComments() {
    const { article, areCommentsOpen } = this.props
    if (!areCommentsOpen) {
      return null
    }
    return <CommentList comments={article.comments} />
  }

  getBody() {
    const { article, areCommentsOpen, isOpen } = this.props
    if (!isOpen) {
      return null
    }
    return (
      <div>
        <section>{article.text}</section>
        <button onClick={this.props.toggleOpenComments}>
          {areCommentsOpen ? 'hide comments' : 'show comments'}
        </button>
        {this.getComments()}
      </div>
    )
  }

  render() {
    const { article, isOpen } = this.props
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.props.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    )
  }
}

export default ToggleOpen(Article)