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
    history.push('/companies')
  } // end function savePreference

  const marks = [{ value: 0, label: 0},{ value: 1},
                  {value: 2}, {value: 3}, {value: 4},
                  { value: 5, label: 5},
                  {value: 6}, {value: 7}, {value: 8}, {value: 9},
                { value: 10, label: 10}]
  return (
    <div className="container survey-box">
      <center>
      <div>
        <h1 className="heading">Survey</h1>
        <p>The values entered in below allow you to fine-tune which metrics are most important to you. 
        The relative weights of your survey numbers directly affect the "weighted score" value that is found on the detailed page for each company.</p>
      </div>

      <br />
      <form onSubmit={savePreference}>
        <div>
          <label htmlFor='transparency' style={{marginRight: 30}}>
            Transparency 
          </label>
          <br></br>
            <Slider sx={{width: 300, marginLeft: "5px", color: "#6d2978" }}
              min={0}
              max={10}
              step={1}
              marks={marks}
              valueLabelDisplay="auto"
              value={preference.transparency}
              onChange={(event) => dispatch({
                type: 'UPDATE_ACTIVE_SURVEY',
                payload: {transparency: event.target.value}
              })}
            />
            
        </div>  
        <br></br>      
        <div>
          <label htmlFor='environmental' style={{marginRight: 30}}>
            Environmental 
          </label>
          <br></br>
          <Slider sx={{ width: 300, marginLeft: "5px", color: "#6d2978"}}
              value={preference.environmental}
              min={0}
              max={10}
              step={1}
              marks={marks}
              aria-label="Always visible"
              valueLabelDisplay="auto"
              onChange={(event) => dispatch({
              type: 'UPDATE_ACTIVE_SURVEY',
              payload: { environmental: event.target.value }
            })}
            />
           
        </div>   
        <br></br>     
        <div>
          <label htmlFor='humanRights' style={{marginRight: 30}}>
            Human Rights 
          </label><br></br>
          <Slider sx={{ width: 300, marginLeft: "5px", color: "#6d2978" }}
              value={preference.humanRights}
              min={0}
              max={10}
              step={1}
              marks={marks}
              valueLabelDisplay="auto"
            onChange={(event) => dispatch({
              type: 'UPDATE_ACTIVE_SURVEY',
              payload: { humanRights: event.target.value }
            }) }
            />
           
        </div>
        <br></br>
        <div>
          <input className="btn" type="submit" name="save" value="save" />
        </div>
      </form>
      </center>
    </div>
  );
}

export default Survey;

