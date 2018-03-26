import React, { Component } from 'react'
import formatElapsedTime from '../../lib/formatElapsedTime'

export default class MainTimer extends Component {
  constructor () {
    super()
  }

  componentDidMount () {
    this.interval = setInterval(
      this.forceUpdate.bind(this),
      500
    )
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const { totalTimeSinceStartUp, lapStartedAt, paused } = this.props

    let elapsedTime
    if (paused) {
      elapsedTime = totalTimeSinceStartUp
    } 

    if (lapStartedAt > 0 && !paused) {
      elapsedTime = totalTimeSinceStartUp + (new Date().getTime() - lapStartedAt)
    }

    return (
      <div>{formatElapsedTime(elapsedTime)}</div>
    )
  }
}
