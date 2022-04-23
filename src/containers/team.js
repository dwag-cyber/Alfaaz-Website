import React from 'react'
import TeammCards from '../components/teamCards'
import { Carousel } from '@trendyol-js/react-carousel';
import './index.css'

export default function Team(){
    return(
        <div className='team_main' id="Teams">
            <h1>Teams</h1>
            <div className="teams-slider">
                <TeammCards teamname="Tech head" desc="Sahil Thakur" />
                <TeammCards teamname="Finance head " desc="Jayant Sharma" />
                <TeammCards teamname="Media and publicity head" desc="Sarthak Sood" />
                <TeammCards teamname="Content team head" desc="Drishti Awasthi" />
            </div>
        </div>
    )
}