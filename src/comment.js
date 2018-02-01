import React from 'react'
import { Component } from 'react'

function Comment({ comment }) {
  return (
    <div>
      <h3>{comment.user}</h3>
      <section>{comment.text}</section>
    </div>
  )
}

export default Comment