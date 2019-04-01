import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import './cv.css'
import '../images/pinksquare.svg'
import picEasyfork from '../images/brooke-lark-261793-unsplash.jpg'
import picBurgerApp from '../images/sameer-waskar-488251-unsplash.jpg'



class projets extends Component {

render() {
  return (
    <div className= "cv-part" >
    <h2 className="curriculum"> PROJETS </h2>
    <div className="p-part-line"> </div>



    <div className="exp">
    <div className= "svg">
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
</div>
    <div className="text">
      <h3 className="subtitle"> FOLIOS PROJECT</h3>
      <p> jefzf. fzeoifhze lfn nef lf jz </p>
      </div>
    </div>

    <div className="exp">
    <div className="text">
      <h3 className="subtitle"> MY TODOLIST </h3>
      <p> jefzf. fzeoifhze lfn nef lf jz </p>
      </div>
      <div className="jaune2" > </div>
    </div>


    <div className="exp">
    <div className="pics">
      <div className="jaune2" > </div>
      <img  src={picBurgerApp} className="picEasyfork" alt="fireSpot"/>
    </div>
    <div className="text">
      <h3 className="subtitle"> BURGERAPP </h3>
      <p> jefzf. fzeoifhze lfn nef lf jz </p>
      </div>
    </div>


     <div className="exp">
     <div className="text">
      <h3 className="subtitle"> EASYFORK </h3>
      <p> jefzf. fzeoifhze lfn nef lf jz </p>
      </div>
       <div className= "svg">
       <img  src={picEasyfork} className="picEasyfork" alt="fireSpot"/>
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
</div>
    </div>






    </div>

    )
}
}



export default projets;
