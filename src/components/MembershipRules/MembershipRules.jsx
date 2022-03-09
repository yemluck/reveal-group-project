import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

const MembershipRules = () => {

    // setup dispatch
    const dispatch = useDispatch();

    // on page load, GET membership rules
    useEffect(() => {
        dispatch({ type: 'FETCH_MEMBERSHIP_RULES' });
    }, []);

    // gain access to global variables
    const store = useReduxStore();
    console.log('membership rules', store.membershipRules);
    // const mRules = store.membershipRules;

    // setup membershipRules as a local variable for editing
    // const [ contacts, setContacts ] = useState(mRules);
    // // check data
    // console.log('contacts are:', contacts);

    // function called with edit button
    // const editMembershipRule = (id) => {
    //     console.log('in editMembershipRule', id);

    //     // watch for rule saga
    //     dispatch({
    //         type: 'EDIT_MEMBERSHIP_RULE',
    //         payload: id
    //     });
    // }

    // function called with delete button
    const deleteMembershipRule = (id) => {
        console.log('in deleteMembershipRule', id);

        // send id to rule saga for deleting
        dispatch({
            type: 'DELETE_MEMBERSHIP_RULE',
            payload: id
        });
    }

    // render to DOM
    return(
        <div className="tableContainer">
            {/* Membership Rules table */}
            <table className="rulesTable">
                <thead>
                    <h2 className="rulesTableTitle">
                        Membership Rules
                    </h2>
                    <tr>
                        <th>
                        Orgaization
                        </th>

                        <th>
                        Points
                        </th>

                        <th>
                        Industry
                        </th>

                        <th>
                        Value Id
                        </th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* loop through membership rules */}
                {store.membershipRules.map((rule, id) => (
                    <tr key={id}>
                        <td>
                            {rule.organization}
                        </td>

                        <td>
                            {rule.points}
                        </td>

                        <td>
                            {rule.industry}
                        </td>

                        <td>
                            {rule.value_id}
                        </td>

                        <td>
                            <button
                                className="btn"
                                onClick={() => deleteMembershipRule(rule.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default MembershipRules;