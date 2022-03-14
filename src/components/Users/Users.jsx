import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Users.css';

const Users = () => {
    const userPreferences = useSelector((store) => store.userData.userPreferencesReducer)
    const userEmails = useSelector((store) => store.userData.userEmailsReducer);
    const dispatch = useDispatch();

    // userPreferences will provide the averages of each 
    // of the total value-priorities across all users
    const fetchUserPreferences = () => {
        console.log('In fetchUserPreferences');
        dispatch({
            type: 'FETCH_USER_PREFERENCES'
        });
    }

    // userEmails will provide both the list of email 
    // addresses and the total user count
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

    // render to DOM
    return(
        <>
        {/* {console.log(userPreferences)} */}
        <div>
            <h2>User Details, Admin View</h2>
        </div>
        <div id="collected-user-data">
            <table>
                <thead>
                    <tr><th ><h3 className="users-table-header"  >Average User Preferences</h3></th></tr>
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
                <h3 className="users-table-header"  >Total Users</h3>
                <p id="total-users">{Number(userEmails.length+1)}</p>
                <thead>
                    <tr>
                        <th><h3 className="users-table-header" >User Emails</h3></th>
                    </tr>
                </thead>
                <tbody id="email-list">
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