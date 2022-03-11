import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Survey.css';
// MUI
import Slider from '@mui/material/Slider';


function Survey() {
  const history = useHistory();
  const dispatch = useDispatch();
  const preference = useSelector(store => store.survey)
//   console.log('this is the preference from redux store:',preference);

  useEffect(()=> {
    dispatch({ type: 'FETCH_PREFERENCE' })
  }, [])
  // function to run on save of preference
  const savePreference = (event) => {
    event.preventDefault();

    dispatch({
      type: 'SAVE_PREFERENCE_CHANGES',
      payload: preference
    })
    // will push to user page after dispatch
    history.push('/user')
  } // end function savePreference


  return (
    <div className="container">
      <div>
        <p>Survey</p>
      </div>
      <form onSubmit={savePreference}>
        <div>
          <label htmlFor='transparency' style={{marginRight: 30}}>
            Transparency 
          </label>
          <br></br>
            <Slider sx={{width: 300, marginLeft: "5px", color: "#6d2978" }}
              min={1}
              max={10}
              step={1}
              value={preference.transparency}
              onChange={(event) => dispatch({
                type: 'UPDATE_ACTIVE_SURVEY',
                payload: {transparency: event.target.value}
              })}
            />
            
        </div>        
        <div>
          <label htmlFor='environmental' style={{marginRight: 30}}>
            Environmental 
          </label>
          <br></br>
          <Slider sx={{ width: 300, marginLeft: "5px", color: "#6d2978" }}
              value={preference.environmental}
              min={1}
              max={10}
              step={1}
              onChange={(event) => dispatch({
              type: 'UPDATE_ACTIVE_SURVEY',
              payload: { environmental: event.target.value }
            })}
            />
           
        </div>        
        <div>
          <label htmlFor='humanRights' style={{marginRight: 30}}>
            Human Rights 
          </label><br></br>
          <Slider sx={{ width: 300, marginLeft: "5px", color: "#6d2978" }}
              value={preference.humanRights}
              min={1}
              max={10}
              step={1}
            onChange={(event) => dispatch({
              type: 'UPDATE_ACTIVE_SURVEY',
              payload: { humanRights: event.target.value }
            }) }
            />
           
        </div>
        <div>
          <input className="btn" type="submit" name="save" value="save" />
        </div>
      </form>
    </div>
  );
}

export default Survey;

