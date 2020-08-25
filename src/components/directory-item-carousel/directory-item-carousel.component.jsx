import React from 'react';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  ImageWithZoom,
  Slide,
  Slider,
} from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

import './directory-item-carousel.styles.scss';

const DirectoryCarousel = ({imageUrl}) => (
  <CarouselProvider
    visibleSlides={3}
    totalSlides={6}
    step={3}
    naturalSlideWidth={400}
    naturalSlideHeight={500}
    hasMasterSpinner
  >
   
   
    <div className='container'>
      <Slider className='slider'>
        <Slide index={0}>
          <ImageWithZoom src={imageUrl} />
        </Slide>
        <Slide index={1}>
          <ImageWithZoom src={imageUrl} />
        </Slide>
        <Slide index={2}>
          <ImageWithZoom src={imageUrl} />
        </Slide>
        <Slide index={3}>
          <ImageWithZoom src={imageUrl} />
        </Slide>
        <Slide index={4}>
          <ImageWithZoom src={imageUrl} />
        </Slide>
        <Slide index={5}>
          <ImageWithZoom src={imageUrl} />
        </Slide>
      </Slider>
      <ButtonBack className='buttonBack'>Back</ButtonBack>
      <ButtonNext className='buttonNext'>Next</ButtonNext>
    </div>
  </CarouselProvider>
);

export default DirectoryCarousel