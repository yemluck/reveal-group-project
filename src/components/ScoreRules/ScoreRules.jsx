import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

const ScoreRules = () => {

    // setup dispatch
    const dispatch = useDispatch();

    // on page load, GET score rules
    useEffect(() => {
        dispatch({ type: 'FETCH_SCORE_RULES' });
}, [dispatch]);

    // gain access to global variables
    const store = useReduxStore();
    console.log('membership rules', store.scoreRules);
    console.log('score rules', store.scoreRules);

    return(
        <div className="tableContainer">
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
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ScoreRules;