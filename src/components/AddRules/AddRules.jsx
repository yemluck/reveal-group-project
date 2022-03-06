import React, { useState } from 'react';

function AddRules() {
  const [membershipName, setMembershipName] = useState('');
  const [pointsEarned, setPointsEarned] = useState('');
  const [industryCategory, setIndustryCategory] = useState('');
  const [metricName, setMetricName] = useState('');
  const [minimumPointsNeeded, setMinimumPointsNeeded] = useState('');
  const [pointsEarnedScore, setPointsEarnedScore] = useState('');
  const [industryCategoryScore, setIndustryCategoryScore] = useState('');

  const addMembershipRule = () => {
    // evt.preventDefault();
    console.log('In addMembershipRule');
  }

  return (
    <div className="container">
      <div>
        <p>AddRules</p>
      </div>
      <section>
        <form id="membership-rule" action="submit" onSubmit={(evt) => addMembershipRule(evt)} >
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
          <button type="button" >Submit</button>
        </form>
      </section>
      <section>
        <form id="score-rule" action="submit">
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
            id="points-earned" 
            className="form-control"
            placeholder="Points Earned" 
            value={pointsEarnedScore}
            onChange={(evt) => setPointsEarnedScore(evt.target.value)}
            />
          <input 
            type="text" 
            id="industry-category" 
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


