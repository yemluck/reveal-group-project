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
            <section className="admin-table-view" >
                <header>
                    <div className="users-table-header"  >
                        <h3>Average User Preferences</h3>
                    </div>
                    <div className="table-row">
                        <div className="category-header" > Human Rights </div>
                        <div className="category-header" > Environment </div>
                        <div className="category-header" > Transparency </div>
                    </div>
                </header>
                <div className="table-row">
                    {/*format number output to percentage*/}
                    {userPreferences.map((pref) => 
                    <div 
                        className="table-data preference-average"
                        key={pref.value_id}
                    >
                        {Math.floor(pref.value_avg * 10)}%
                        </div>)}
                </div>
                <header>
                    <div>
                        <div className="users-table-header"  >
                            Total Users
                        </div>
                    </div>
                </header>
                {/*read length of userEmails array to provide total user count*/}
                <div className="table-row" >
                    <div 
                        className="table-data" 
                        id="total-users"
                    >
                        {Number(userEmails.length)}
                    </div>
                </div>
                <header>
                    <div className="table-row" >
                        <div className="users-table-header emails-header" >User Emails</div>
                    </div>
                </header>
                <div id="email-list">
                    {/*list all usernames (email addresses)*/}
                    {userEmails.map((email) => (
                        <div className="table-row" key={email.id}>
                            <div className="table-data user-email" >
                                {email.email_address}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            </div>
        </>
    );
}

export default Users;