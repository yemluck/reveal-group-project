import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

import './ScoreRules.css';

const ScoreRules = () => {

    // gain access to global variables
    const store = useReduxStore();
    // console.log('membership rules', store.scoreRules);
    // console.log('score rules', store.scoreRules);

    // function called with delete button
    const deleteScoreRule = (id) => {
        // console.log('in deleteScoreRule', id);

        // send id to rule saga for deleting
        dispatch({
            type: 'DELETE_SCORE_RULE',
            payload: id
        });
    }

    // render to DOM
    return(
        <div className="tableContainer sR1">
            {/* Score Rules table */}
            <table className="rulesTable">
                <thead>
                    <h2 className="rulesTableTitle">
                        Score Rules
                    </h2>
                    <tr>
                        <th>
                            Metric
                        </th>

                        <th>
                            Result
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
                    {/* loop through score rules reducer */}
                {store.scoreRules.map((rule, id) => (
                    <tr key={id}>
                        <td>
                            {rule.metric}
                        </td>

                        <td>
                            {rule.result}
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
                                onClick={() => deleteScoreRule(rule.id)}
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

export default ScoreRules;