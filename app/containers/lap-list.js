'use strict'

import { connect } from 'react-redux'
import LapList from '../components/lap-list'

const mapStateToProps = state => ({
  laps: state.laps
})

const LapListContainer = connect(mapStateToProps)(LapList)

export default LapListContainer
