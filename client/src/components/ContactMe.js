import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Modal from './modal/Modal';
import Text from './form/Text';
import Select from './form/Selects';
import { contact } from '../actions/contact';

const reasons = [
  'I want you to build my website',
  'I want you to be my tutor guild',
  'Investment',
  'Business',
  'Contact only',
  'Others'
];

const ContactMe = ({ success, contact }) => {
  const [reason, setReason] = useState('');
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    number: '',
    msg: ''
  });
  const [result, setResult] = useState({ id: '', msg: '' });
  const handleCancelSelected = () => {
    setResult({ id: 'Message_sent', msg: undefined });
  };
  useEffect(() => {
    if (result.id === 'Contact_Failed') {
      setResult(result);
    }
  }, [result]);
  useEffect(() => {
    if (success && success.id === 'Contact_me') {
      setResult({ id: 'Message_sent', msg: 'Your Message Was Sent' });
      setInputs({ name: '', email: '', number: '', msg: '' });
    }
  }, [success]);
  const handleSelectChanges = event => {
    setReason(event.target.value);
  };
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, number, msg } = inputs;
    const details = { name, email, number, msg, reason };
    if (!reason) {
      setResult({ id: 'Contact_Failed', msg: 'Select a reason' });
    } else if (!name || !email || !number || !msg) {
      setResult({ id: 'Contact_Failed', msg: 'Fill all field' });
    } else {
      contact(details);
    }
  };
  return (
    <div style={{ marginTop: '20px' }} className="form-container">
      <h1>I will get back to you within 24hrs</h1>
      <form className="form">
        <div className="title_container">
          {result.id === 'Contact_Failed' ? (
            <h1>{result.msg}</h1>
          ) : (
            <h1>Contact me</h1>
          )}
        </div>
        <Select
          words={`Select A Reason for Contacting Me`}
          category={reason}
          handleInputChange={handleSelectChanges}
          selects={reasons}
        />

        <Text
          handleInputChange={handleInputChange}
          label={'Name'}
          name={'name'}
          inputs={inputs.name}
        />
        <Text
          handleInputChange={handleInputChange}
          label={'Phone Number'}
          name={'number'}
          type={'number'}
          inputs={inputs.number}
          id={'standard-number'}
        />
        <Text
          handleInputChange={handleInputChange}
          label={'Email'}
          name={'email'}
          inputs={inputs.email}
        />
        <Text
          handleInputChange={handleInputChange}
          label={'Your Message.....'}
          name={'msg'}
          state={true}
          inputs={inputs.msg}
        />

        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {result.id === 'Message_sent' && (
        <Modal
          selectedOption={result.msg}
          cancelSelected={handleCancelSelected}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  success: state.successReducer
});
export default connect(
  mapStateToProps,
  { contact }
)(ContactMe);
