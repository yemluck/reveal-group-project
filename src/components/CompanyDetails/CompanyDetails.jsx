import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import score from './score';
import './details.css'
// MUI components
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Popover from '@mui/material/Popover';


function CompanyDetails() {
  // from useParams
  let {
    name: companyName,
    wikiName: wikiDetail
  } = useParams();

  const history = useHistory();
  const dispatch = useDispatch();
  const details = useSelector(store => store.companyDetails);
  const errors = useSelector(store => store.errors);
  const preference = useSelector(store => store.survey);
  const companyData = useSelector(store => store.companyData);
  const membershipRules = useSelector(store => store.membershipRules);
  const scoreRules = useSelector(store => store.scoreRules);

  // transparency rule
  let transparencyRule = [];
  let environmentRule = [];
  let humanRightsRule = [];
  //console.log('score rules:', scoreRules);
  for (let rule of scoreRules){
    if (rule.value_id === 1){
      transparencyRule.push(rule);
    }
    if (rule.value_id === 2){
      environmentRule.push(rule);
    }
    if (rule.value_id === 3){
      humanRightsRule.push(rule);
    }
  }
  console.log('this is the transparencyRule', transparencyRule);
  console.log('this is the environmentRule', environmentRule);
  //console.log('this is the humanRightsRule', humanRightsRule);

  // Popover
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const id2 = open ? 'simple-popover' : undefined;
  // end popover

  const keys = Object.keys(details);
  //   console.log('details keys:',keys[0]);
  const abc = keys[0]
  //   console.log('type of key', typeof keys[0]); 
  //   console.log('details from store', details);
  const [totalScore, setTotalScore] = useState({
    transparencyTotal: null,
    transparencyScore: null,
    humanRightsTotal: null,
    humanRightsScore: null,
    environmentTotal: null,
    environmentScore: null,
    calculated: false
  });

  // for cases with no wikipedia description
  // null returns wikipedia description of null
  if (wikiDetail === "null") {
    wikiDetail = companyName
  }
  else if (wikiDetail === "Royal Dutch Shell") {
    wikiDetail = "Shell plc";
  }


  useEffect(() => {
    // dispatch to fetch description
    dispatch({
      type: 'FETCH_COMPANY_DETAILS',
      payload: wikiDetail
    });
    // dispatch to fetch data
    dispatch({
      type: 'FETCH_COMPANY_DATA',
      payload: companyName
    });


    // dispatch to fetch rules
    dispatch({
      type: 'FETCH_MEMBERSHIP_RULES'
    });
    dispatch({
      type: 'FETCH_SCORE_RULES'
    });
  }, [companyName]);

  useEffect(() => {
    setTotalScore(score({ membershipRules, scoreRules }, companyData));

    if (totalScore.transparencyTotal !== 0) {
      dispatch({ type: 'CLEAR_DATA_ERROR' });
    }

  }, [companyData]);

  const backToCompany = () => {
    // clear data on page exit
    dispatch({
      type: 'CLEAR_INFO'
    });
    // totalScore.environmentTotal == 0
    // push back to companies page
    history.push('/companies')
  }

  // calculation for weighted average based on preference
const weightedAverage = 
  ((totalScore.transparencyScore / totalScore.transparencyTotal * preference.transparency)+
  (totalScore.environmentScore / totalScore.environmentTotal * preference.environmental)+
  (totalScore.humanRightsScore / totalScore.humanRightsTotal * preference.humanRights))
  /
  (preference.transparency + preference.environmental + preference.humanRights)


const weightedAveragePercentage = Math.ceil(weightedAverage*100);



  return (
    <div className="company-details">
      <button id="back-btn" className="btn" onClick={backToCompany}> Back </button>
      <div>
        <h2 id="company-name">{companyName} </h2>

        <h3 className="company-details-subheader">Company Details</h3>
        <p id="wiki-excerpt">{details[abc].extract}</p>
        <h3 className="company-details-subheader">Weighted Score</h3>
        {weightedAveragePercentage ?
        <center>
        <Rating
          name="weightedAverage"
          readOnly
          precision={0.5}
          value={weightedAverage * 5}
          max={5} 
        />
        <p>{weightedAveragePercentage}%</p>
        </center>
        :
          <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
            <LinearProgress color="secondary" />
          </Stack>
    
          
      }
      <br></br>
        
        <h3 className="company-details-subheader">Metric Breakdown</h3>

        {totalScore.transparencyTotal === 0 ?
          <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
            <LinearProgress color="secondary" />
          </Stack>
          :
          <>
            <div id="metrics-container">
              <div id="transparency-breakdown" className="rating-item">
                <p aria-describedby={id} onClick={handleClick}>
                  Transparency⬇️
                </p>
                <p>
                  {/* {totalScore.transparencyScore} / {totalScore.transparencyTotal}:  */}
                  <Rating
                    name="transparency-rating"
                    readOnly
                    precision={0.5}
                    value={totalScore.transparencyScore / totalScore.transparencyTotal * 5}
                    max={5}
                  />
                  {Math.ceil(totalScore.transparencyScore / totalScore.transparencyTotal * 100)}%
                </p>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  {
                    transparencyRule.map(tRule => <p>{tRule.metric}</p>)
                  }
                </Popover>
              </div>

              <div id="environment-breakdown" className="rating-item">
                <p aria-describedby={id2} onClick={handleClick}>
                  Environment:
                </p>
                <p>
                  {/* {totalScore.environmentScore} / {totalScore.environmentTotal}:  */}
                  <Rating
                    name="environment-rating"
                    readOnly
                    precision={0.5}
                    value={totalScore.environmentScore / totalScore.environmentTotal * 5}
                    max={5}
                  />
                  {Math.ceil(totalScore.environmentScore / totalScore.environmentTotal * 100)}%
                </p>
                <Popover
                  id={id2}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  {
                    // environmentRule.map(eRule => <p>{eRule.metric}</p>)
                    <p>kdkdkdkdkd</p>
                  }
                </Popover>
              </div>

              <div id="human-rights-breakdown" className="rating-item">
                <p>
                  Human Rights:
                </p>
                <p>
                  {/* {totalScore.humanRightsScore} / {totalScore.humanRightsTotal}:  */}
                  <Rating
                    name="human-rights-rating"
                    readOnly
                    precision={0.5}
                    value={totalScore.humanRightsScore / totalScore.humanRightsTotal * 5}
                    max={5}
                  />
                  {Math.ceil(totalScore.humanRightsScore / totalScore.humanRightsTotal * 100)}%
                </p>
              </div>

            </div>
          </>
        }
      </div>
    </div >
  );
}

export default CompanyDetails;
