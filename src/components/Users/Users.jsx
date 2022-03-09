const Users = () => {

    /* 
        tables pulling from: users, value, preference
            user preferences:
    */

    return(
        <>
        <div>
            Admin can see user details
        </div>
        <div>
            <h3>Average User Preferences</h3>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Transparency
                        </th>
                        <th>
                            Environment
                        </th>
                        <th>
                            Human Rights
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th>Total Users</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
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