import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Users = () => {
    const userPreferences = useSelector((store) => store.userData.userPreferencesReducer)
    const userEmails = useSelector((store) => store.userData.userEmailsReducer);
    const dispatch = useDispatch();

    /* 
        tables pulling from: users, value, preference
            user preferences:
    */

    const fetchUserPreferences = () => {
        console.log('In fetchUserPreferences');
        dispatch({
            type: 'FETCH_USER_PREFERENCES'
        });
    }

    const fetchUserEmails = () => {
        console.log('In fetchUserEmails');
        dispatch({
            type: 'FETCH_USER_EMAILS'
        });
    }

    useEffect(() => {
        fetchUserPreferences();
        fetchUserEmails();
    }, []);

    return(
        <>
        {console.log(userPreferences)}
        <div>
            Admin can see user details
        </div>
        <div>
            <h3>Average User Preferences</h3>
        </div>
        <div id="collected-user-data">
            <table>
                <thead>
                    <tr>
                        <th> Human Rights </th>
                        <th> Environment </th>
                        <th> Transparency </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {userPreferences.map((pref) => 
                        <td key={pref.value_id}>
                            {Math.floor(pref.value_avg * 10)}%
                            </td>)}
                    </tr>
                </tbody>
            </table>
                <h3>Total Users</h3>
                <p>{Number(userEmails.length+1)}</p>
            <table>
                <thead>
                    <tr>
                        <th>User Emails</th>
                    </tr>
                </thead>
                <tbody>
                    {userEmails.map((email) => (
                        <tr key={email.id}><td>{email.email_address}</td></tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
}

export default Users;