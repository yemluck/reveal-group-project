import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

const MembershipRules = () => {

    // setup dispatch
    const dispatch = useDispatch();

    // on page load, GET membership rules
    useEffect(() => {
        dispatch({ type: 'FETCH_MEMBERSHIP_RULES' });
}, [dispatch]);

    // gain access to global variables
    const store = useReduxStore();
    console.log('membership rules', store.membershipRules);

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
                    </tr>
                </thead>
                <tbody>
                    {/* loop through membership rules reducer */}
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
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default MembershipRules;