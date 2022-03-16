import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Users.css';

const Users = () => {
    // retrieve user data from redux store for display
    const userPreferences = useSelector((store) => store.userData.userPreferencesReducer)
    const userEmails = useSelector((store) => store.userData.userEmailsReducer);
    const dispatch = useDispatch();

    // userPreferences will provide the averages of each 
    // of the total value-priorities across all users
    const fetchUserPreferences = () => {
        // console.log('In fetchUserPreferences');
        dispatch({
            type: 'FETCH_USER_PREFERENCES'
        });
    }// end fetchUserPreferences

    // userEmails will provide both the list of email 
    // addresses and the total user count
    const fetchUserEmails = () => {
        // console.log('In fetchUserEmails');
        dispatch({
            type: 'FETCH_USER_EMAILS'
        });
    }// end fetchUserEmails

    // automatically fetch data on page load
    useEffect(() => {
        fetchUserPreferences();
        fetchUserEmails();
    }, []);

    // render to DOM
    return(
        <>
        <center>
            <h1>User Details, Admin View</h1>
        </center>
        {/*single table to display all user data*/}
        <div id="collected-user-data">
            <table>
                <thead>
                    <tr><th className="users-table-header"  >Average User Preferences</th></tr>
                    <tr>
                        <th> Human Rights </th>
                        <th> Environment </th>
                        <th> Transparency </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/*format number output to percentage*/}
                        {userPreferences.map((pref) => 
                        <td key={pref.value_id}>
                            {Math.floor(pref.value_avg * 10)}%
                            </td>)}
                    </tr>
                </tbody>
                <thead>
                    <tr><th className="users-table-header"  >Total Users</th></tr>
                </thead>
                <tbody>
                    {/*read length of userEmails array to provide total user count*/}
                    <tr><td id="total-users">{Number(userEmails.length)}</td></tr>
                </tbody>
                <thead>
                    <tr>
                        <th className="users-table-header" >User Emails</th>
                    </tr>
                </thead>
                <tbody id="email-list">
                    {/*list all usernames (email addresses)*/}
                    {userEmails.map((email) => (
                        <tr key={email.id}>
                            <td>{email.email_address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
}

export default Users;