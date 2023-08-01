import React from 'react'
import { Statistic } from 'semantic-ui-react'

const DisplayBalance = ({ color, label, value }) => {
  return (
    <Statistic size='tiny' color={color}>
      <Statistic.Label style={{ textAlign: 'left' }}>{label}: </Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  )
}

export default DisplayBalance