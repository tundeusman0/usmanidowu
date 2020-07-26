import React, { useEffect } from 'react';
import Modal from 'react-modal';

const OptionModal = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.cancelSelected]);
  return (
    <React.Fragment>
      {props.warning ? (
        <Modal
          isOpen={!!props.selectedOption}
          contentLabel="Selected Option"
          closeTimeoutMS={200}
          ariaHideApp={false}
          onRequestClose={props.notSelected}
          className="modal"
        >
          <h3 className="modal__title">Alert!!!</h3>
          {props.selectedOption && <p>{props.selectedOption}</p>}
          <div className="buttons">
            <button className="button" onClick={props.cancelSelected}>
              Delete
            </button>
            <button className="button" onClick={props.notSelected}>
              No
            </button>
          </div>
        </Modal>
      ) : (
        <Modal
          isOpen={!!props.selectedOption}
          contentLabel="Selected Option"
          closeTimeoutMS={200}
          ariaHideApp={false}
          onRequestClose={props.cancelSelected}
          className="modal"
        >
          <h3 className="modal__title">New Message!!!</h3>
          {props.selectedOption && <p>{props.selectedOption}</p>}
          <button className="button" onClick={props.cancelSelected}>
            Thanks okay
          </button>
        </Modal>
      )}
    </React.Fragment>
  );
};
export default OptionModal;
