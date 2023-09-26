import React from 'react';
import { Card } from 'react-bootstrap';
import { Image } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';
import angular from '../../img/angular.png';
import html from '../../img/html.png';
import react from '../../img/react.png';
import express from '../../img/express.png';
import dupal from '../../img/dupal.png';
import javascript from '../../img/javascript.png';
import joomla from '../../img/joomla.png';
import laravel from '../../img/laravel.png';
import mongo from '../../img/mongo.png';
import wordpress from '../../img/wordpress.png';
import ReactNative from '../../img/ReactNative.png';
import NodeJs from '../../img/NodeJs.png';
import "../../assets/scss/overlay.css"

function CarouselComponent() {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item interval={3000}>
        <div className="card-wrapper container d-flex justify-content-around">
          <div className="overlay-div" style={{ margin: "5px" }}>
            <Image src={angular} />
          </div>
          <div className="overlay-div" style={{ margin: "5px" }}>
            <Image src={react} />
          </div>
          <div className="overlay-div" style={{ margin: "5px" }}>
            <Image src={express} />
          </div>
          <div className="overlay-div" style={{ margin: "5px" }}>
            <Image src={html} />
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <div className="card-wrapper container d-flex justify-content-around">
          <div className="overlay-div" style={{ margin: "5px" }}>
            <Image src={javascript} />
          </div>
          <div className="overlay-div" style={{ margin: "5px" }}>
            <Image src={joomla} />
          </div>
          <div className="overlay-div" style={{ margin: "5px" }}>
            <Image src={laravel} />
          </div>
          <div className="overlay-div" style={{ margin: "5px" }}>
            <Image src={mongo} />
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <div className="card-wrapper container d-flex justify-content-around">
          <div className="overlay-div" style={{ margin: "5px" }}>
            <Image src={dupal} />
          </div>
          <div className="overlay-div" style={{ margin: "5px" }}>
            <Image src={wordpress} />
          </div>
          <div className="overlay-div" style={{ margin: "5px" }}>
            <Image src={ReactNative} />
          </div>
          <div className="overlay-div" style={{ margin: "5px" }}>
            <Image src={NodeJs} />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
