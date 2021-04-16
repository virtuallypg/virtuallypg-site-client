import React from 'react';
import { Container} from 'react-bootstrap';
import myPhoto from '../images/pic-of-me.jpg';

const HomePage = () => (
  <>
  <header className="masthead">
    <div className="container mt-5 pt-3">
      <h1 className="display-4 mt-3">Welcome to my site!</h1>
    </div>
  </header>
  <section>
    <div className="container h-100">
      <div className="row">
        <div className="col-lg-3 mt-4">
          <img src={myPhoto} className="img-fluid rounded border border-secondary" alt="picture of me"/>
        </div>
        <div className="col-lg-9">
          <div className="bg-white rounded border border-light p-2 mt-4">
            <p>Greetings to all! My name is Paul and I'm currently completing the transition from teacher of English and Media Studies to Software Developer. Full Stack development right now is what is rocking my world and so here we have a website built using React, complete with backend support (scripted in Node.js). <br></br><br></br>
                So, within the Portfolio page of this site you'll find some links to projects I have recently been working on. Please feel free to have a mooch! Also, I am putting together a programming blog. The topic of 'programming' is undoubtedly wide and all pervasive so in time I'll strive to carve out some kind of niche - at present the best concept I can come with is <i>An English Teacher's Take on Coding!</i>. Again, feel free to browse and comment. All views are my own etc etc.
                </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  </>
);

export default HomePage;
