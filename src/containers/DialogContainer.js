import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';

import { dialogSubmit, closeDialog } from '../actions';

const Dialog = (props) => {
  const { name, title, size = 'tiny' } = props;

  return ( ( WrappedComponent ) => {
    class ReduxDialog extends Component {
      render(){
        const {isOpen, ...rest} = this.props;
        return (
          <Modal open={isOpen} size={size}>
            <WrappedComponent title={title} { ...rest } />
          </Modal>
        )
      }
    }

    const mapStateToProps = ({dialogs}) => {
      if (dialogs && dialogs.hasOwnProperty(name)) {
        const { isOpen, payload = {} } = dialogs[name];
        return { isOpen, payload };
      }

      return {
        payload: {}
      };
    };

    const mapDispatchToProps = (dispatch, props) => ({
      onRequestClose: () => {
        // props.onRequestClose && props.onRequestClose();
        dispatch(closeDialog(name))
      },
      onSubmitForm:(payload) => {
        // props.onBeforeSubmit && props.onBeforeSubmit();
        dialogSubmit(name, payload)(dispatch);
      }
    });

    return connect(mapStateToProps, mapDispatchToProps)(ReduxDialog)
  });
}

export default Dialog;
