import React from 'react'
import TeammCards from '../components/teamCards'
import { Carousel } from '@trendyol-js/react-carousel';
import './index.css'

export default function Team(){
    return(
        <div className='team_main'>
            <h1>Teams</h1>
            <div className="teams-slider">
                <TeammCards teamname="test1" desc="test" />
                <TeammCards teamname="test1" desc="test" />
                <TeammCards teamname="test1" desc="test" />
                <TeammCards teamname="test1" desc="test" />
               
            </div>
        </div>
    )
}