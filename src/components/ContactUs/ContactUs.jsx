import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


// user component
// where user can send a message to Reveal
function ContactUs() {

  // setup local state for input fields
  const [ name, setName ] = useState('');
  const [ message, setMessage ] = useState('');

  // setup dispatch
  const dispatch = useDispatch();

  // function called with submit button
  const handleMessage = (e) => {
    e.preventDefault();

    console.log('in handleMessage');

    // setup payload
    const userMessage = {
      name: name,
      message: message
    }

    // watch for message saga
    dispatch({
      type: 'CREATE_MESSAGE',
      payload: userMessage
    });
  }

  // form for user's name and message
  return (
    <div className="cuContainer">
      <div className="grid-cuContainer">
        <form onSubmit={handleMessage}>

          {/* input field for user's name */}
          <div>
            Name:
          </div>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          {/* input field for user's message */}
          <div>
            Message:
          </div>
          <textarea
            type="text"
            placeholder="How can we help?"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          {/* submit button for form */}
          <div>
            <button
              type="submit"
              className="cont btn"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

