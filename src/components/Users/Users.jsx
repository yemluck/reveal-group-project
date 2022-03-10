import { useEffect } from 'react';

const Users = () => {

    /* 
        tables pulling from: users, value, preference
            user preferences:
    */

    const fetchUserPreferences = () => {
        console.log('In fetchUserPreferences');
    }

    const fetchUserCount = () => {
        console.log('In fetchUserCount');
    }

    const fetchUserEmails = () => {
        console.log('In fetchUserEmails');
    }

    useEffect = (() => {
        console.log('hi');
        fetchUserEmails();
    }, []);

    return(
        <>
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
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    );
}

export default Users;