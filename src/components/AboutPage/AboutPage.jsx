import React from 'react';
import {Link} from 'react-router-dom';

import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="about-container">
      <div>
        <p className="aboutP">Reveal is a nonprofit starting, aiming to put the power of investigation, reporting and honesty into the hands 
        of the people. Reveal aims to uncover the good, the bad, and the ugly about corporations and organizations in the areas of Human Rights, Transparency, and the Environment.</p>
      </div>
      <Link to="/survey"><button className="btn">OK</button></Link>
    </div>
  );
}

export default AboutPage;
