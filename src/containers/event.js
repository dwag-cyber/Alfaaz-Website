import { PinDropSharp } from '@material-ui/icons';
import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import EventCard from '../components/eventCards';
import './index.css'

function Event({eventname}) {
  return (
      <div className='event_main'>
          <h1>Events</h1>
        <div className='event_cards'>
            <EventCard eventname="Youth Parliament"  />
            <EventCard eventname="Poetry Night"/>
            <EventCard eventname="test1"/>
        </div>
    </div>
  );
}

export default Event;