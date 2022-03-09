import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

import './Messages.css';

// admin component
// where the admin can see user messages
function Messages() {
    
    // setup dispatch
    const dispatch = useDispatch();

    // call function when page first loads
    useEffect(() => {
        // watch for message saga
        dispatch({ type: 'FETCH_MESSAGES' });
    }, []);

    // gain access to global variables
    const store = useReduxStore();// useSelector (store =>)
    const message = store.messages;
    console.log('user messages', message);

    // function called with delete button
    const deleteMessage = (id) => {
        console.log('in deleteMessage', id);
    
        // watch for message saga
        dispatch({
            type: 'DELETE_MESSAGE',
            payload: id
        });
    }

    return (
        <div className="mContainer">
            <h1 className="message1">
                User Messages
            </h1>

            <p className="message2">
                Below are user messages from the Contact Us page.
            </p>

            <div className="tableContainer">
                {/* table contains user messages from ContactUs component */}
                <table>
                    <thead>
                        <tr>
                            <th>
                                email
                            </th>

                            <th>
                                Name
                            </th>

                            <th>
                                message
                            </th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {message.map((words, id) => (
                            <tr key={id}>
                                <td>
                                    {words.email_address}
                                </td>

                                <td>
                                    {words.name}
                                </td>

                                <td className="message3">
                                    {words.comment}
                                </td>

                                <td>
                                    {/* button to delete messages */}
                                    <button 
                                        className="mess btn"
                                        onClick={() => deleteMessage(words.id)}
                                    >
                                        Delete Message
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default Messages;
