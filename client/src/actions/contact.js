import axios from 'axios';

export const contact = payload => dispatch => {
  axios.post('/api/contact', payload).then(
    dispatch({
      type: 'ADD_SUCCESS',
      msg: 'Message Sent Successfull',
      id: 'Contact_me'
    })
  );
};
