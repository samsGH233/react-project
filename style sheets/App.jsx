
import image1 from '../images/risk-management.jpg';
import image2 from '../images/advanced-project-managment.jpeg';
import image3 from '../images/data-protection.jpg';
import image4 from '../images/business-analysis2.jpeg';
import image5 from '../images/UI-design.jpg';
import image6 from '../images/data-analytics.jpg';

import Navbar from '../components/NavBar.jsx';
import HomePage from "../components/HomePage.jsx";
import Card from '../components/Cards.jsx';
import JobCard from '../components/JobRole.jsx';
import TopTools from '../components/TopTools.jsx';
import Footer from '../components/Footer.jsx';
import SuccessCardsSection from '../components/SuccessCardsSection.jsx';

import { FaChalkboardTeacher } from "react-icons/fa"
import { MdGroups } from 'react-icons/md';
import { MdHandyman } from 'react-icons/md';
import { FaProjectDiagram } from 'react-icons/fa';

import shopifyIcon from '../images/shopify-logo.png';
import teamsIcon from '../images/Microsoft-Teams-Logo.png';
import excelIcon from '../images/microsoft-excel.webp';
import calendarIcon from '../images/Google-Calendar-Logo.png';
import trelloIcon from '../images/trello-icon.png';
import salesForceIcon from '../images/sales-force.png';
import slackIcon from '../images/slack.png';
import confluenceIcon from '../images/confluence.png';
import telegramIcon from '../images/telegram.webp';
import googleAnalytic from '../images/google-analytic.png';
import hubSpotIcon from '../images/hubspot-logo.png';
import zapierIcon from '../images/zapier-logo.png';

import uniImage from '../images/university-students.jpg';



const App = () => {

    return (
      <div>
          <Navbar />
          <HomePage />
          <h3 className="course-section-title">Gaining Experience that goes beyond mere <br/> Online Training</h3>
          <div className="info-box-container">
             <div>
                 <Card Icon={FaChalkboardTeacher} card_title={"Personal Mentorship"} description={"Learn from mentors " +
                     "with real-world expertise, offering guidance you can trust. Get mentorship designed specifically" +
                     " for you." }/>
             </div>
              <div>
                  <Card Icon={MdHandyman} card_title={"Hands on Training"} description={"Hands-on training ensures " +
                      "you truly understand and remember what you learn. Master real-world skills through immersive, " +
                      "practical experiences." }/>
              </div>
              <div>
              <Card  Icon={FaProjectDiagram}  card_title={"Live Projects"} description={"Collaborate on real-world" +
                  " challenges and see your learning in action. Transition seamlessly from theoretical learning to " +
                  "practical application." }/>
            </div>
              <div>
              <Card Icon={MdGroups} card_title={"Collaborative Environment"} description={"Engage in projects, discussions, " +
                  "and activities with peers and mentors. Learn how to communicate and lead in team settings." }/>
            </div>
          </div>

              <h3 className="course-section-title">Start Learning Today.</h3>
              <p className="course-paragraph">Find the perfect course and begin your journey to success. Discover a range of topics <br/> designed
                  to help you achieve your goals.</p>

          <div className="job-card-container">
              <div>
                  <JobCard image={image1} roleName={"Business Analyst"} courseName={"Risk Management Principles"} description={
                      "Dive in an  learn from expert! Learn the importance of analysis, analytic tools and techniques, way more!"
                  }/>
              </div>
              <div>
                  <JobCard image={image2} roleName={"Project Manager"} courseName={"Advanced Project Management"}  description={
                      "Dive in an  learn from expert! Learn the importance of analysis, analytic tools and techniques, way more!"
                  }/>
              </div>
             <div>
                 <JobCard image={image3} roleName={"Data Protection"} courseName={"Data Protection"}  description={
                     "Dive in an  learn from expert! Learn the importance of analysis, analytic tools and techniques, way more!"
                 }/>
             </div>
             <div>
                 <JobCard image={image4} roleName={"Project Manager"} courseName={"Business Analysis"}  description={
                     "Dive in an  learn from expert! Learn the importance of analysis, analytic tools and techniques, way more!"
                 }/>
             </div>
              <div>
                  <JobCard image={image5} roleName={"Project Manager"} courseName={"UI / UX Design"}  description={
                      "Dive in an  learn from expert! Learn the importance of analysis, analytic tools and techniques, way more!"
                  }/>
              </div>
             <div>
                 <JobCard image={image6} roleName={"Project Manager"} courseName={"Data Analytics"}  description={
                     "Dive in an  learn from expert! Learn the importance of analysis, analytic tools and techniques, way more!"
                 }/>
             </div>


          </div>

          <button className="homepage-button">Start Your Free Trial</button>
          <h2 className="course-section-title">Top Industry Tools</h2>
          <p className="course-paragraph">Practice with real-world scenarios using the tools professionals rely on.</p>

          <div className="tools-columns">

              <div className="column">
                  <TopTools name={"Shopify"} logo={shopifyIcon} />
                  <TopTools name={"Microsoft Teams"} logo={teamsIcon} />
                  <TopTools name={"Microsoft Excel"} logo={excelIcon} />
              </div>

              <div className="column-lowered">
                  <TopTools name={"Google Calendar"} logo={calendarIcon} />
                  <TopTools name={"Trello"} logo={trelloIcon} />
                  <TopTools name={"Sales Force"} logo={salesForceIcon} />
              </div>

              <div className="column">
                  <TopTools name={"Slack"} logo={slackIcon} />
                  <TopTools name={"Confluence"} logo={confluenceIcon} />
                  <TopTools name={"Telegram"} logo={telegramIcon} />
              </div>

              <div className="column-lowered">
                  <TopTools name={"Zapier"} logo={zapierIcon} />
                  <TopTools name={"Google Analytic"} logo={googleAnalytic} />
                  <TopTools name={"HubSpot"} logo={hubSpotIcon} />
              </div>

          </div>

          <div className="image-container">
                <img src={uniImage} alt="Visual description" className="background-image" />

              <div className="overlay-message">
                  <h1 className="overlay-message-header">Leading Students to <br/> Opportunities</h1>
                  <p className="overlay-message-paragraph">Discover endless skills and opportunities at Connectinskillz, <br/>
                      where students can have the best learning experiences. Join us <br/> today!</p>
              </div>
          </div>
          <h2 className="course-section-title">Stories of Success</h2>
          <p className="course-paragraph">See How We're making a Difference from Those Who've <br/> Walked the Path</p>

          <div className="success-card-container">
            <SuccessCardsSection />
          </div>


          <div className="section-bottom">
                  <h2 className="course-section-title">Lead the Next Generation of Learners</h2>
                  <p className="course-paragraph">Become a trainer and make a difference in the lives of aspiring
                      professionals. Transform your skills <br/> into impactful training sessions and guide learners to
                      success. Join Connectinskillz.</p>
                  <button className="homepage-button">Start Your Free Trial</button>
          </div>

        <Footer />
      </div>

    );

}


export default App;
