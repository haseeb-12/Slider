import React, { useState } from 'react'
import { SliderData } from './ImageData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'


function ImageSlider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    return (
        <>
            <section className='slider'>
                <FontAwesomeIcon icon={faCircleArrowLeft} className='left-arrow' onClick={prevSlide} />
                <FontAwesomeIcon icon={faCircleArrowRight} className='right-arrow' onClick={nextSlide} />
                {SliderData.map((value,index) => {
                    return (
                        <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                      >
                        {index === current && (
                          <img src={value.image} alt='travel' className='image' />
                        )}
                      </div>
                    )
                })}
            </section>
        </>
    )
}
export default ImageSlider