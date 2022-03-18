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
import InfoIcon from '@mui/icons-material/Info';


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

  // rules breakdown
  let transparencyRule = [];
  let environmentRule = [];
  let humanRightsRule = [];
  //rules logic
  for (let rule of scoreRules) {
    if (rule.value_id === 1) {
      transparencyRule.push(rule);
    }
    if (rule.value_id === 2) {
      environmentRule.push(rule);
    }
    if (rule.value_id === 3) {
      humanRightsRule.push(rule);
    }
  }

  // Popover
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);

  // handle click functions for popover
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event2) => {
    setAnchorEl2(event2.currentTarget);
  }

  const handleClick3 = (event3) => {
    setAnchorEl3(event3.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
    setAnchorEl3(null);
  };


  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const id = open ? 'simple-popover' : undefined;
  const id2 = open2 ? 'simple-popover' : undefined;
  const id3 = open3 ? 'simple-popover' : undefined;
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
    // push back to companies page
    history.push('/companies')
  }

  // calculation for weighted average based on preference
  const weightedAverage =
    ((totalScore.transparencyScore / totalScore.transparencyTotal * preference.transparency) +
      (totalScore.environmentScore / totalScore.environmentTotal * preference.environmental) +
      (totalScore.humanRightsScore / totalScore.humanRightsTotal * preference.humanRights))
    /
    (preference.transparency + preference.environmental + preference.humanRights)


  const weightedAveragePercentage = Math.ceil(weightedAverage * 100);



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
                  Transparency<InfoIcon className="moreInfo" sx={{fontSize: 17, }} /> 
                  <i style={{fontSize: 10}}className="hide">Click for more information</i>
                </p>
                <p>
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
                  className="popover"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  {
                    transparencyRule.map((tRule, i) => <p key={i}>{tRule.metric}</p>)
                  }
                </Popover>
              </div>

              <div id="environment-breakdown" className="rating-item">
                <p aria-describedby={id2} onClick={handleClick2}>
                  Environment<InfoIcon className="moreInfo" sx={{ fontSize: 17, }} />
                  <i style={{ fontSize: 10 }} className="hide">Click for more information</i>
                </p>
                <p>
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
                  open={open2}
                  anchorEl={anchorEl2}
                  className="popover"
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  {
                    environmentRule.map((eRule, i) => <p key={i}>{eRule.metric}</p>)
                  }
                </Popover>
              </div>

              <div id="human-rights-breakdown" className="rating-item">
                <p aria-describedby={id3} onClick={handleClick3}>
                  Human Rights<InfoIcon className="moreInfo" sx={{ fontSize: 17, }} />
                  <i style={{ fontSize: 10 }} className="hide">Click for more information</i>
                </p>
                <p>
                  <Rating
                    name="human-rights-rating"
                    readOnly
                    precision={0.5}
                    value={totalScore.humanRightsScore / totalScore.humanRightsTotal * 5}
                    max={5}
                  />
                  {Math.ceil(totalScore.humanRightsScore / totalScore.humanRightsTotal * 100)}%
                </p>
                <Popover
                  id={id3}
                  open={open3}
                  anchorEl={anchorEl3}
                  className="popover"
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  {
                    humanRightsRule.map((hRule, i) => <p key={i}>{hRule.metric}</p>)
                  }
                </Popover>
              </div>

            </div>
          </>
        }
      </div>
    </div >
  );
}

export default CompanyDetails;
