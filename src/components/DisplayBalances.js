import React from 'react'
import DisplayBalance from './DisplayBalance'
import { Grid, Segment } from 'semantic-ui-react'

const DisplayBalances = () => {
  return (
    <Segment textAlign='center'>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance color="green" label="Income" value="1515.30" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance color="red" label="Income" value="700.30" />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DisplayBalances