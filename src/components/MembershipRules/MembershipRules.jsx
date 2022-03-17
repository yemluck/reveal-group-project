import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

import './MembershipRules.css';

const MembershipRules = () => {
    const dispatch = useDispatch();

    // gain access to global variables
    const store = useReduxStore();
   
    // setup dispatch
    const dispatch = useDispatch();

    // function called with delete button
    const deleteMembershipRule = (id) => {
        // console.log('in deleteMembershipRule', id);

        // send id to rule saga for deleting
        dispatch({
            type: 'DELETE_MEMBERSHIP_RULE',
            payload: id
        });
    }

    // render to DOM
    return(
        <div className="tableContainer mR1">
            {/* Membership Rules table */}
            <div id="membership-rules-header">
            </div>
            <table className="rulesTable">
                <thead>
                    <h2 className="rulesTableTitle">
                        Membership Rules
                    </h2>
                    <tr>
                        <th>
                        Organization
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
                        <td className="mR2">
                            {rule.organization}
                        </td>

                        <td className="mR2">
                            {rule.points}
                        </td>

                        <td className="mR3">
                            {rule.industry}
                        </td>

                        <td className="mR2">
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