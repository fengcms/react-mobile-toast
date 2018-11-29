import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createFrame } from './utils'
import Toast from './toast'

export default (tip, time) => {
  // fixedBody(true)
  ReactDOM.render(<Toast tip={tip} />, createFrame('fungleo-react-mibile-toast'))
}
