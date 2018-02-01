import React from 'react'
import { Component } from 'react'

import Comment from './comment'

function CommentList({ comments }) {
  const commentElements = comments.map((comment) => {
    return <li key={comment.id}><Comment comment={comment} /></li>
  })

  return (
    <ul>
      {commentElements}
    </ul>
  )
}

export default CommentList