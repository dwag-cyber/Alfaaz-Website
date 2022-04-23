import { PinDropSharp } from '@material-ui/icons';
import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import EventCard from '../components/eventCards';
import './index.css'

function Event({eventname}) {
  return (
      <div className='event_main' id="Events">
          <h1>Events</h1>
        <div className='event_cards'>
            <EventCard eventname="Parliament"  />
            <EventCard eventname="Lafz"/>
            <EventCard eventname="Abhivyakti"/>
        </div>
    </div>
  );
}

export default Event;