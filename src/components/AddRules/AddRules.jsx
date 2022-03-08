import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddRules() {
  const dispatch = useDispatch();
  const [valueCategory, setValueCategory] = useState(''); 
  const [membershipName, setMembershipName] = useState('');
  const [pointsEarned, setPointsEarned] = useState('');
  const [industryCategory, setIndustryCategory] = useState('');
  const [metricName, setMetricName] = useState('');
  const [minimumPointsNeeded, setMinimumPointsNeeded] = useState('');
  // adding 'Score' to the end of the next two const names below to avoid 
  // collision with above names
  const [pointsEarnedScore, setPointsEarnedScore] = useState('');
  const [industryCategoryScore, setIndustryCategoryScore] = useState('');
  const [valueCategoryScore, setValueCategoryScore] = useState(''); 

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
    // Reset inputs on submit
    clearMembershipInputs();
  }// end addMembershipRule

  const clearMembershipInputs = () => {
    setValueCategory('');
    setMembershipName('');
    setPointsEarned('');
    setIndustryCategory('');

  }// end clearMembershipInputs

  const addScoreRule = (evt) => {
    evt.preventDefault();
    console.log('In addScoreRule');
    dispatch({
      type: 'ADD_SCORE_RULE',
      payload:  {
        metric: metricName,
        result: minimumPointsNeeded,
        points: pointsEarnedScore, 
        industry: industryCategoryScore,
        value_id: valueCategoryScore
      }
    });
    // Reset inputs on submit
    clearScoreInputs();
  }// end addScoreRule

  const clearScoreInputs = () => {
    setValueCategoryScore('');
    setMetricName('');
    setMinimumPointsNeeded('');
    setPointsEarnedScore('');
    setIndustryCategoryScore('');

  }// end clearScoreInputs

  return (
    <div className="rules-form-container">
      <div>
        <p>Add Rules</p>
      </div>
      {console.log(metricName)}
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
              <option value="">Select Value Category</option>
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
          <select
            id="value-category-score"
            className="form-control"
            placeholder="Value Category" 
            value={valueCategoryScore}
            onChange={(evt) => setValueCategoryScore(evt.target.value)}
            >
              <option value="">Select Value Category</option>
              <option value="1">Transparency</option>
              <option value="2">Environment</option>
              <option value="3">Human Rights</option>
            </select>
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
          <button type="submit" >Submit</button>
        </form>
      </section>
    </div>
  );
}

export default AddRules;


