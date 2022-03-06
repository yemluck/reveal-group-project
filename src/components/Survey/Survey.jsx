import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Survey.css';

function Survey() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [transparency, setTransparency] = useState('');
  const [environmental, setEnvironmental] = useState('');
  const [humanRights, setHumanRights] = useState('');

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
              required
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
              required
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
              required
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

