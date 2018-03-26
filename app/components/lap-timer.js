import React, { Component } from 'react'
import formatElapsedTime from '../../lib/formatElapsedTime'

export default class LapTimer extends Component {
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
    const { totalLapTime, lapStartedAt, paused } = this.props

    let elapsedTime
    if (paused) {
      elapsedTime = totalLapTime
    }

    if (lapStartedAt > 0 && !paused) {
      elapsedTime = totalLapTime + (new Date().getTime() - lapStartedAt)
    }

    return (
      <div>{formatElapsedTime(elapsedTime)}</div>
    )
  }
}
