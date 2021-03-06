import React from 'react';
import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  'images/grahams.jpg',
  'images/babyruthe.jpg',
  'images/cfmarshallsext.jpg',
  'images/CVMarshalls.jpeg',
  'images/deanmarshalls.jpg',
  'images/haregirls1965.jpg',
  'images/larrykinn.jpeg',
  'images/leeruthephyllisphil.jpg',
  'images/phyllisandruthemarshall.jpg',
  'images/rutheandphyllis.jpg',
  'images/ruthemarshall.jpg'  
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="Graham Women" />
          </div>
          <h2>The Graham Women</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="Baby Ruthe"/>
          </div>
          <h2>Ruth Eleanor Marshall - Age 1</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="CV Marshalls" />
          </div>
          <h2>The CV Marshalls</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} alt="CV Marshalls" />
          </div>
          <h2>The CV Marshalls</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[4]} alt="Dean Marshalls"/>
          </div>
          <h2>The Dean Marshalls</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[5]} alt="Hare Girls" />
          </div>
          <h2>Hare Girls - 1965</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[6]} alt="Larry Kinn" />
          </div>
          <h2>Larry Kinn</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[7]} alt="Marshall Cousins" />
          </div>
          <h2>Leland, Ruthe, Phyllis, Phil Marshall</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[8]} alt="Cousins" />
          </div>
          <h2>Phyllis & Ruthe Marshall</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[9]} alt="Cousins" />
          </div>
          <h2>Ruthe & Phyllis Marshall</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[10]} alt="Ruthe"/>
          </div>
          <h2>Ruthe Marshall</h2>
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow;
