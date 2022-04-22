import React from 'react'
import TeammCards from '../components/teamCards'
import { Carousel } from '@trendyol-js/react-carousel';
import './index.css'

export default function Team(){
    return(
        <div className='team_main'>
            <h1>Teams</h1>
            <Carousel show={4} slide={3} swiping={true}>
                <TeammCards teamname="Technical Team Head" desc="Sahil" />
                <TeammCards teamname="Content Teamm Head" desc="hellohellohelllo" />
                <TeammCards teamname="" desc="hellohellohelllo" />
                <TeammCards teamname="test1" desc="hellohellohelllo" />
                <TeammCards teamname="test1" desc="hellohellohelllo" />
                <TeammCards teamname="test1" desc="hellohellohelllo" />
            </Carousel>
        </div>
    )
}