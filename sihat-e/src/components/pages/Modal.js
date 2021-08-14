import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    // reference to creat portal in order to fix the Z-index callstack of ordinary modal
  return ReactDOM.createPortal(
    //   onClick History.push to allow click outside the modal = exit
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">
            {/* {props.title} */}
            </div>
        <div className="content">
            hi
            {/* {props.content} */}
            </div>
        <div className="actions">
            {/* {props.actions} */}
            </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
