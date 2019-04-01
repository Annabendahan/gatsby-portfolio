import React, {Component} from "react"
import './profile.css'
import pic1 from '../images/marion-michele-330691-unsplash.jpg';
import pic2 from '../images/Capture d’écran 2019-03-15 à 19.04.58.png';
import pic3 from '../images/jo-szczepanska-1163258-unsplash.jpg';
import pic4 from '../images/vasily-koloda-620886-unsplash.jpg';
import { Parallax } from 'react-scroll-parallax';
import pic5 from '../images/pavan-trikutam-1660-unsplash.jpg';

import Cv from '../components/cv'
import Projets from '../components/projets'

class Profile extends Component {

  state= {
    display: ''
  }



  displayProjets = () => {
    this.setState({ display: 'projets'})
  }

  displayCV = () => {
    this.setState({ display: 'cv'})
  }

render() {

  let display1 = <Cv />
  let display2 = <Projets />
  if (this.state.display === 'cv') {
    display1 = <Cv />
    display2 = <Projets />
  } else if (this.state.display === 'projets') {
    display1 = <Projets />
    display2 = <Cv />
  }



  return (

<div className="Profile">
  <div className="Header">
    <div className= "Presentation">
    <div className="line"> </div>
    <h1 className="title"> Designer & Developer </h1>
    <p className="text1"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <h2 className="name"> ANNA </h2>
        <h2 className="age" > 24 yo </h2>


        <img  src={pic2} className="pic2" alt="fireSpot"/>


        <div className="jaune" > </div>




     <img  src={pic1} className="pic1" alt="fireSpot"/>




    </div>

    <div className="tabs">


      <div className= "Projettab">
      <div className="pline"> </div>
      <Parallax className="" y={[-80, 30]} tagOuter="figure">
        <img  src={pic3} className="pic3" alt="fireSpot"/>
      </Parallax>
      <div className="jaune-cv" > </div>
      <h2 className="projets" onClick={this.displayProjets}> PROJETS </h2>
      </div>

      <div className= "CVtab">
      <div className="cvline"> </div>
      <img  src={pic4} className="pic4" alt="fireSpot"/>
      <p className= "svgtab">
      <svg width="200" height="200" viewBox="0 0 304 305" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M299.5 3.5H3.5V66.5H299.5V3.5Z" stroke="#FFBBBB" stroke-width="7"/>
  <path d="M299.5 38.5H3.5V101.5H299.5V38.5Z" stroke="#FFBBBB" stroke-width="7"/>
  <path d="M299.5 105.5H3.5V168.5H299.5V105.5Z" stroke="#FFBBBB" stroke-width="7"/>
  <path d="M299.5 137.5H3.5V200.5H299.5V137.5Z" stroke="#FFBBBB" stroke-width="7"/>
  <path d="M299.5 204.5H3.5V267.5H299.5V204.5Z" stroke="#FFBBBB" stroke-width="7"/>
  <path d="M299.5 236.5H3.5V299.5H299.5V236.5Z" stroke="#FFBBBB" stroke-width="7"/>
  <path d="M3.96746 3.50555L3.52386 300.075L66.5238 300.169L66.9674 3.59979L3.96746 3.50555Z" stroke="#FFBBBB" stroke-width="7"/>
  <path d="M38.9674 3.55728L38.5238 300.127L101.524 300.221L101.967 3.65151L38.9674 3.55728Z" stroke="#FFBBBB" stroke-width="7"/>
  <path d="M105.968 3.65738L105.524 300.227L168.524 300.321L168.968 3.75161L105.968 3.65738Z" stroke="#FFBBBB" stroke-width="7"/>
  <path d="M137.968 3.70523L137.524 300.275L200.524 300.369L200.968 3.79946L137.968 3.70523Z" stroke="#FFBBBB" stroke-width="7"/>
  <path d="M204.968 3.80533L204.524 300.375L267.524 300.469L267.968 3.89956L204.968 3.80533Z" stroke="#FFBBBB" stroke-width="7"/>
  <path d="M236.968 3.85318L236.524 300.423L299.524 300.517L299.968 3.94741L236.968 3.85318Z" stroke="#FFBBBB" stroke-width="7"/>
  </svg>
  </p>
      <h2 className="cv" onClick={this.displayCV}> CV </h2>
      </div>

    </div>



  </div>
  {display1}
  {display2}


  <div className="contact">
  <div className="contact-line"> </div>
  <h2 className="contact-title"> CONTACT </h2>
  <div className="content">
    <div className="infos">
      <h3 className="mail" > AN.BENDAHAN@GMAIL.COM </h3>
      <h3 className="numero"> 0659133919 </h3>
    </div>
    <div className="pics">
      <img  src={pic5} className="pic5" alt="fireSpot"/>
      <div className="jaune3" > </div>
    </div>
  </div>

  </div>


</div>


)
}
}


export default Profile;
