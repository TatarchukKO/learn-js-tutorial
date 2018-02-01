import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'



function Comment({ comment }) {
  return (
    <div>
      <h3>{comment.user}</h3>
      <section>{comment.text}</section>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
}

export default Comment