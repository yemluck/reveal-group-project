import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './ContactUs.css';


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
        <div className="cu1">
          <h1>
            Contact Us!
          </h1>
        </div>

        <div className="cu2">
          <p>
            Do you need help with something or want to let us know something?
            Please fill out the form below with your name and message.
            Click the send button for Reveal to recieve your message.
          </p>
        </div>

        <form 
          className="cuForm"
          onSubmit={handleMessage}
        >

          {/* input field for user's name */}
          <div className="cu3">
            Name:
          </div>
          <input
            className="cu4"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          {/* input field for user's message */}
          <div className="cu5">
            Message:
          </div>
          <textarea
            className="cu6"
            type="text"
            placeholder="How can we help?"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          {/* submit button for form */}
          <div className="cu7">
            <button
              type="submit"
              className="cont btn"
              disabled={!name || !message}
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

