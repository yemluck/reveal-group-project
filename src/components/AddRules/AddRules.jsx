import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddRules() {
  const dispatch = useDispatch();
  const [valueCategory, setValueCategory] = useState(''); // this will be just the value id number for now
  const [membershipName, setMembershipName] = useState('');
  const [pointsEarned, setPointsEarned] = useState('');
  const [industryCategory, setIndustryCategory] = useState('');
  const [metricName, setMetricName] = useState('');
  const [minimumPointsNeeded, setMinimumPointsNeeded] = useState('');
  const [pointsEarnedScore, setPointsEarnedScore] = useState('');
  const [industryCategoryScore, setIndustryCategoryScore] = useState('');

  const addMembershipRule = (evt) => {
    evt.preventDefault();
    console.log('In addMembershipRule');
    dispatch({
      type: 'ADD_MEMBERSHIP_RULE',
      payload: {
        value: valueCategory,
        organization: membershipName,
        points: pointsEarned,
        industry: industryCategory
      }
    });
    clearMembershipInputs();
  }

  const clearMembershipInputs = () => {
    setValueCategory('');
    setMembershipName('');
    setPointsEarned('');
    setIndustryCategory('');

  }

  const addScoreRule = (evt) => {
    evt.preventDefault();
    console.log('In addScoreRule');
    dispatch({
      type: 'ADD_SCORE_RULE',
      payload:  {
        metric: metricName,
        result: minimumPointsNeeded,
        points: pointsEarnedScore, 
        industry: industryCategoryScore
      }
    });
    clearScoreInputs();
  }

  const clearScoreInputs = () => {
    setMetricName('');
    setMinimumPointsNeeded('');
    setPointsEarnedScore('');
    setIndustryCategoryScore('');

  }

  return (
    <div className="rules-form-container">
      <div>
        <p>Add Rules</p>
      </div>
      {console.log(membershipName)}
      <section>
        <form id="membership-rule" action="submit" onSubmit={(evt) => addMembershipRule(evt)} >
          {/* <input 
            type="text" 
            id="value-category" 
            className="form-control"
            placeholder="Value Category" 
            value={valueCategory}
            onChange={(evt) => setValueCategory(evt.target.value)}
            /> */}
          <select
            id="value-category"
            className="form-control"
            placeholder="Value Category" 
            value={valueCategory}
            onChange={(evt) => setValueCategory(evt.target.value)}
            >
              <option value="1">Transparency</option>
              <option value="2">Environment</option>
              <option value="3">Human Rights</option>
            </select>

          <input 
            type="text" 
            id="membership-name" 
            className="form-control"
            placeholder="Membership Name" 
            value={membershipName}
            onChange={(evt) => setMembershipName(evt.target.value)}
            />
          <input 
            type="text" 
            id="points-earned" 
            className="form-control"
            placeholder="Points Earned" 
            value={pointsEarned}
            onChange={(evt) => setPointsEarned(evt.target.value)}
            />
          <input 
            type="text" 
            id="industry-category" 
            className="form-control"
            placeholder="Industry Category" 
            value={industryCategory}
            onChange={(evt) => setIndustryCategory(evt.target.value)}
          />
          <button type="submit" >Submit</button>
        </form>
      </section>
      <section>
        <form id="score-rule" action="submit" onSubmit={(evt) => addScoreRule(evt)} >
          <input 
            type="text" 
            id="metric-name" 
            className="form-control"
            placeholder="Metric Name" 
            value={metricName}
            onChange={(evt) => setMetricName(evt.target.value)}
            />
          <input 
            type="text" 
            id="minimum-points-needed" 
            className="form-control"
            placeholder="Minimum Points Needed" 
            value={minimumPointsNeeded}
            onChange={(evt) => setMinimumPointsNeeded(evt.target.value)}
            />
          <input 
            type="text" 
            id="points-earned-score" 
            className="form-control"
            placeholder="Points Earned" 
            value={pointsEarnedScore}
            onChange={(evt) => setPointsEarnedScore(evt.target.value)}
            />
          <input 
            type="text" 
            id="industry-category-score" 
            className="form-control"
            placeholder="Industry Category" 
            value={industryCategoryScore}
            onChange={(evt) => setIndustryCategoryScore(evt.target.value)}
            />
          <button type="button" >Submit</button>
        </form>
      </section>
    </div>
  );
}

export default AddRules;


