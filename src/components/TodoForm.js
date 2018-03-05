import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Segment,
  Header,
  Button,
  Icon,
  Form
} from 'semantic-ui-react'

const TodoForm = ({ title, onRequestClose, onSubmitForm, payload }) => {
  let titleInput = null;

  const hangleSubmit = (e) => {
    if ( !titleInput.value.trim() ) {
      return titleInput.focus();
    }

    onSubmitForm({...payload, title: titleInput.value})
    onRequestClose();
  }

  return (
  <Segment>
    <Header>
      {title}
      <Icon name="close" size="big" className="modal-close-icon" onClick={onRequestClose}/>
    </Header>
    <Modal.Content>
      <Form onSubmit={hangleSubmit}>
        <Form.Field>
          <label>Task title</label>
          <input
            autoFocus
            ref={node => titleInput = node }
            placeholder='Task title'
            defaultValue={payload.title ? payload.title : ""}
          />
        </Form.Field>
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
     </Modal.Content>
  </Segment>
)};

TodoForm.propTypes = {
  title: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  payload: PropTypes.object,
}
export default TodoForm;
