import React from 'react';
import wopLogo from '../images/wop_logo.png';
import litquotesLogo from '../images/litquotes-logo.png';
import calculatorLogo from '../images/calculator-logo.png';

const AboutPage = () => (
  <>
  <section>
  </section>

  <h1 className="display-5 mt-5 pt-4 text-center">My Portfolio</h1>
  <div className="container mt-5 p-5 bg-dark">
    <div className="row">
      <div className="col-lg-4 text-center mb-5">
        <a href="https://www.wordsofplay.com/" target="_blank"><img src={wopLogo} className="img-fluid rounded border border-secondary m-0" alt="Words of Play link"/></a>
        <h5 className="p-2 bg-light">Description of Words of Play apps and then some!!!!</h5>
      </div>
      <div className="col-lg-4 text-center mb-5">
        <a href="https://virtuallypg.github.io/literary-quotes-site/" target="_blank"><img src={litquotesLogo} className="img-fluid rounded border border-secondary m-0" alt="Words of Play link"/></a>
        <h5 className="p-2 bg-light">Description of my Literary Quotes app and then some!!!!</h5>
      </div>
      <div className="col-lg-4 text-center mb-5">
        <a href="http://stupefied-dubinsky-21c4fc.netlify.app" target="_blank"><img src={calculatorLogo} className="img-fluid rounded border border-secondary m-0" alt="Words of Play link"/></a>
        <h5 className="p-2 bg-light">Description of my calculator app and then some!!!!</h5>
      </div>
    </div>
  </div>
  </>
);

export default AboutPage;
