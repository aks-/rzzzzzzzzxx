'use strict'

import React, { Fragment } from 'react'
import MainTimerContainer from '../containers/main-timer'
import LapTimerContainer from '../containers/lap-timer'
import LapListContainer from '../containers/lap-list'
import ButtonGroup from '../containers/button-group'

const App = ({}) => (
  <Fragment>
    <MainTimerContainer />
    <LapTimerContainer />
    <LapListContainer />
    <ButtonGroup />
  </Fragment>
)

export default App
