import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Users = () => {
    const userEmails = useSelector((store) => store.userData.userEmailReducer);
    const dispatch = useDispatch();

    /* 
        tables pulling from: users, value, preference
            user preferences:
    */

    const fetchUserPreferences = () => {
        console.log('In fetchUserPreferences');
    }

    const fetchUserEmails = () => {
        console.log('In fetchUserEmails');
        dispatch({
            type: 'FETCH_USER_EMAILS'
        });
    }

    useEffect(() => {
        fetchUserEmails();
    }, []);

    return(
        <>
        {console.log(userEmails)}
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
                        <th> Transparency </th>
                        <th> Environment </th>
                        <th> Human Rights </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                    </tr>
                </tbody>
            </table>
                <h3>Total Users</h3>
            <table>
                <thead>
                    <tr>
                        <th>User Emails</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{JSON.stringify(userEmails)}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    );
}

export default Users;