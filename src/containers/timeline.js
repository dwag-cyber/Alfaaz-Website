import React from 'react';
import './timeline.css';

function Timeline() {
  return (
    <div>
    <div className="heading">
        <div className="event">Event</div> 
        <div className="schedule">Schedule</div>        
    </div>
    <div className="events-container">
        <div className="left-events-container">
            <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                      <img className="event1-image" src="./Images/bgimg.jpg" height ="100%" width="100%" alt="Event Image" />
                  </div>
                  <div className="flip-card-back">
                     <h1>Event Name</h1>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi tenetur doloribus velit non ducimus ex numquam nihil quibusdam commodi amet fugit unde dolorum quidem animi magni officia impedit, sunt quam obcaecati possimus quisquam exercitationem. Doloribus quibusdam a omnis fugit?</p>
                  </div>
                </div>
            </div>
        </div>
        <div className="right-events-conatiner" style="margin-top: 50vh;">
            <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                      <img className="event1-image" src="./Images/bgimg.jpg" height ="100%" width="100%" alt="Event Image" />
                  </div>
                  <div className="flip-card-back">
                     <h1>Event Name</h1>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita distinctio autem quos soluta quae, qui aspernatur consequuntur repellendus sequi quas odit! Eius tenetur quos fugit corporis officiis at, id hic, dolorum, praesentium nisi in repellat a et! Placeat, odit illo?</p>
                  </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Timeline;