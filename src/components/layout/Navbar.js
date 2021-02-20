import React, {useEffect, useState} from "react";
import logo from "./logo yhfor motion-01.svg";
import {Link, useHistory} from 'react-router-dom'
import "./style.css";
import en_flag from './en-flag.png'
import ar_flag from './ar-flag.jpg'
import {setLanguage, setCurrency} from '../../actions/language'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {getStr} from '../../actions/language'


const flagStyle = {
    height: 20,
    width: 30,
    marginRight: 5
}


const Navbar = ({language: {lang, locale}, setLanguage}) => {

  const [active, setActive] = useState('/')
  const history = useHistory();
  const pathname = window.location.pathname;
  
  const onChangeLanguge = val => {
    if(val === 'ar'){
      setLanguage(val, 'ar-EG');
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = "ar";
    }else {
      setLanguage('en', 'en-GB')
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = "en";
    }
    history.push(pathname);
    
  }


  useEffect(() => {
    if(lang === "ar") {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = "ar";
    }else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = "en";
    }

  }, [])
 
  return (
  <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#fff'}}>
  <Link className="logo" to="/" onClick={e => setActive('/')}>
      <img src={logo} alt="Logo" className='ml-5 logo'/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav mx-auto">
      <li className={`nav-item nav-item-menu p-1 ml-2 ${active === '/' ? 'activeLink' : ''}`}>
        <Link className="nav-link text-dark" to='/' onClick={e => setActive('/')}>{getStr('home')}</Link>
      </li>
      <li className={`nav-item nav-item-menu ml-2 ${active === '/company' ? 'activeLink' : ''}`}>
        <Link className="nav-link text-dark" to="/company" onClick={e => setActive('/company')}>{getStr('our_company')}</Link>
      </li>
      <li className={`nav-item nav-item-menu ml-2 ${active === '/properties' ? 'activeLink' : ''}`}>
        <Link className="nav-link text-dark" to="/properties" onClick={e => setActive('/properties')}>{getStr('properties')}</Link>
      </li>
      <li className={`nav-item nav-item-menu ml-2`}>
        <a className="nav-link text-dark" href="/#testimonails">{getStr('testimonails')}</a>
      </li>
      <li className={`nav-item nav-item-menu ml-2 ${active === '/blog' ? 'activeLink' : ''}`}>
        <Link className="nav-link text-dark" to="/blog" onClick={e => setActive('/blog')}>{getStr('blog')}</Link>
      </li>
      <li className={`nav-item nav-item-menu ml-2 ${active === '/contact' ? 'activeLink' : ''}`}>
        <Link className="nav-link text-dark" to="/contact" onClick={e => setActive('/contact')}>{getStr('contact')}</Link>
      </li>
      <li className="nav-item ml-2">
        <p className="nav-link nav-number text-dark m-0 d-flex">
          <i className="fa fa-phone"></i>
          +905532243234
        </p>
      </li>
      <li className="nav-item ml-2">
          {
            lang === 'en' ? <Link className="nav-link" to={pathname} onClick={e => onChangeLanguge('ar')}><img src={ar_flag} alt="ar" /> Arabic</Link>
            : <Link className="nav-link" to={pathname} onClick={e => onChangeLanguge('en')}><img src={en_flag} style={flagStyle} alt="en" /> English</Link>

          }
      </li>
    </ul>
  </div>
</nav>
  );
};

Navbar.propTypes = {
  language: PropTypes.object.isRequired,
  setLanguage: PropTypes.func.isRequired,
}

const mapState = state => {
  return {
    language: state.language
  }
}


export default connect(mapState, {setLanguage})(Navbar);
