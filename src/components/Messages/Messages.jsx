import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

// admin component
// where the admin can see user messages
function Messages() {
    
    // setup dispatch
    const dispatch = useDispatch();

    // gain access to global variables
    const store = useReduxStore();
    const message = store.messages;
    console.log('user messages', message);

    // call functiion when page first loads
    useEffect(() => {
        // watch for message saga
        dispatch({ type: 'FETCH_MESSAGES' });
    }, []);

    return (
        <div className="mContainer">
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

                </tbody>
            </table>
        </div>
    );
}

export default Messages;
