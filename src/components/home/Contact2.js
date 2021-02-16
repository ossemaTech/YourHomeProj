import React from 'react'
import { Link } from 'react-router-dom'
import right_effect from './icons/right-effect-white.svg'
import left_effect from './icons/left-effect-white.svg'
import skin from './icons/contact2-skin.jpg'
import {getStr} from '../../actions/language'


const style = {
  background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${skin})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed'
}



const Contact2 = () => {
    return (
      <section id="contact2" style={style}>
          <img src={right_effect} style={{color: '#f7f7f7', marginTop: -1, width: '100%'}} alt="" />
        <div className="row justify-content-center row-section-contact">
          <h1 className="text-white text-center">
            {eval(JSON.stringify(getStr('desc-contact2')))}
          </h1>
        </div>
        <button className="btn btn-warning btn-lg d-block m-auto btn-contact" style={{fontSize:"18px", fontWeight:"500", background:"#FFCF0A"}}>
          <Link to="/contact"> {getStr('contact')} </Link>
        </button>
        <img src={left_effect} style={{color: '#fff', marginBottom: -1, width: '100%'}} alt="" />
      </section>
    );
}

export default Contact2
