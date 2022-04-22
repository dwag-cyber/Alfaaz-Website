import React from 'react'
import './index.scss'

export default function TeammCArds({teamname,desc,facebook,twitter,google,linkedin}){
    return(
        <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://picsum.photos/130/130?image=839"/>
        </div>
        <div class="team-content">
          <h3 class="name">{teamname}</h3>
          <h4 class="title">{desc}</h4>
        </div>
        <ul class="social">
          <li><a href={facebook} class="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href={twitter} class="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href={google} class="fa fa-google-plus" aria-hidden="true"></a></li>
          <li><a href={linkedin} class="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    )
}