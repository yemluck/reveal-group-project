import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

const MetricBreakdown = () => {

    // setup dispatch
    const dispatch = useDispatch();

    useEffect(() => {

        // watch for rule saga 
        dispatch({
            type: 'FETCH_SELECTED_MEMBERSHIP_RULES',
            payload: 'Oil and Gas'
        });

        dispatch({
            type: 'FETCH_SELECTED_SCORE_RULES',
            payload: 'Oil and Gas'
        });
    }, []);

    return(
        <div>

        </div>
    );
}

export default MetricBreakdown;