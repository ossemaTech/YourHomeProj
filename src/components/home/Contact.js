import React from 'react'
import right_effect from './icons/right-effect-white.svg'
import left_effect from './icons/left-effect-white.svg'
import {getStr} from '../../actions/language'
import { Link } from 'react-router-dom'


const Contact = () => {
    return (
      <section id="contact">
        <img src={right_effect}  alt="" style={{marginTop: '0px', color: '#fff', opacity: 1, width: '100%'}} />
        <div className="row justify-content-center row-section-contact">
          <h1 className='text-white text-center'>
            {eval(JSON.stringify(getStr('desc-contact')))}
          </h1>
        </div>
        <button className="btn btn-warning btn-lg d-block m-auto btn-contact" style={{fontSize:"18px", fontWeight:"500", background:"#FFCF0A"}}>
          <Link to="/contact"> {getStr('contact')} </Link>
        </button>
        <img src={left_effect} alt="" style={{color: '#fff', marginBottom: '-1px', width: '100%'}} />
      </section>
    );
}

export default Contact
