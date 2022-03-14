import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import score from './score';
// MUI components
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

function CompanyDetails() {
  // from useParams
  let {
    name: companyName,
    wikiName: wikiDetail
  } = useParams();

  const history = useHistory();
  const dispatch = useDispatch();
  const details = useSelector(store => store.companyDetails)
  const errors = useSelector(store => store.errors)
  const companyData = useSelector(store => store.companyData)
  const membershipRules = useSelector(store => store.membershipRules)
  const scoreRules = useSelector(store => store.scoreRules)

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
  return (
    <div className="company-details">
      <div>
        <h2>{companyName} </h2>

        <h3 className="company-details-subheader">Company Details</h3>
        <p>{details[abc].extract}</p>
        <p>{errors.dataMessage}</p>
        {totalScore.transparencyTotal === 0 ?
          <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
            <LinearProgress color="secondary" />
          </Stack>
              :
        <div id="metrics-container">
          <h3 className="company-details-subheader">Metric Breakdown</h3>

          <div id="transparency-breakdown" className="rating-item">
            <p>
              Transparency:
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
          </div>

          <div id="environment-breakdown" className="rating-item">
            <p>
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
          }
        < button onClick={backToCompany}> Back </button>
      </div>
    </div >
  );
}

export default CompanyDetails;
