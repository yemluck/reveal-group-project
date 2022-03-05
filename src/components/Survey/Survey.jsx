import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Survey.css';

function Survey() {
  const history = useHistory();
  const dispatch = useDispatch();
  // this is the logged in user
  const user = useSelector(store => store.user);

  const [transparency, setTransparency] = useState(5);
  const [environmental, setEnvironmental] = useState(5);
  const [humanRights, setHumanRights] = useState(5);

  console.log('humanRights', humanRights);
  console.log('environmental', environmental);
  console.log('transparency', transparency);

  const savePreference = (event) => {
    event.preventDefault();

    dispatch({
      type: 'CREATE_PREFERENCE',
      payload: {
        transparency: Number(transparency),
        environmental: Number(environmental),
        humanRights: Number(humanRights),
        userId: user.id
      }
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
          <label htmlFor='transparency'>
            Transparency🔍 :
            <input
              type="number"
              name="transparency"
              value={transparency}
              min="1"
              max="10"
              onChange={(event) => setTransparency(event.target.value)}
            />
            </label>
        </div>        
        <div>
          <label htmlFor='environmental'>
            Environmental🔍 :
            <input
              type="number"
              name="environmental"
              value={environmental}
              min="1"
              max="10"
              onChange={(event) => setEnvironmental(event.target.value)}
            />
            </label>
        </div>        
        <div>
          <label htmlFor='humanRights'>
            Human Rights 🔍 :
            <input
              type="number"
              name="humanRights"
              value={humanRights}
              min="1"
              max="10"
              onChange={(event) => setHumanRights(event.target.value)}
            />
            </label>
        </div>
        <div>
          <input className="btn" type="submit" name="save" value="save" />
        </div>
      </form>
    </div>
  );
}

export default Survey;

