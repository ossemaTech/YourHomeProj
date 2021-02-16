import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getTestimonails} from '../../actions/testimonails'
import Spinner from '../layout/Spinner'
import {getStr} from '../../actions/language'
import Coverflow from 'react-coverflow';


const Testimonails = ({testimonail: {loading, testimonails}, getTestimonails, language: {lang}}) => {

  const [current, setCurrent] = useState(0);
    useEffect(()=> {
        getTestimonails()
    }, [getTestimonails])

    var fn = function () {
      /* do you want */  
    }
    return (
      <section id="testimonails" className="">
        {!testimonails || loading ? (
          <Spinner />
        ) : (
          <div
            id="reviewCarousel"
            className="carousel slide testimonail"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <span className="span-title">{getStr('citizenship')}</span>
              <h2 className='test-title mb-2 mt-2 text-center title-section'>{getStr('client_testimonails')}</h2>
              <Coverflow
            width={960}
            height={480}
            enableHeading={false}
            displayQuantityOfSide={2}
            navigation
            infiniteScroll
            media={{
                '@media (max-width: 900px)': {
                width: '600px',
                height: '300px'
                },
                '@media (min-width: 900px)': {
                width: '960px',
                height: '600px'
                }
            }}
        >
            {testimonails.map((t, i) => (
              <img src={t.image} alt='yourHome'/>
            ))}
        </Coverflow>
            </div>
          </div>
        )}
      </section>
    );
}

Testimonails.propTypes = {
    getTestimonails: PropTypes.func.isRequired,
    testimonail: PropTypes.object.isRequired,
    language: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        testimonail: state.testimonail,
        language: state.language
    }
}

export default connect(mapStateToProps, {getTestimonails})(Testimonails)
