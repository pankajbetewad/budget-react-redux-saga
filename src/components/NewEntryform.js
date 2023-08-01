import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

const NewEntryform = () => {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input placeholder="new thing"
          icon='tags'
          width={12}
          label="description"
        ></Form.Input>
        <Form.Input
          width={4}
          label="value"
          placeholder="100.22"
          icon='dollar'
          iconPosition='left'
        />
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  )
}

export default NewEntryform