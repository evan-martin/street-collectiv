import React from 'react';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Image,
  Slide,
  Slider,
} from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

import './directory-item-carousel.styles.scss';

const DirectoryCarousel = ({imageUrl}) => (
  <CarouselProvider
    visibleSlides={2}
    totalSlides={6}
    step={2}
    naturalSlideWidth={200}
    naturalSlideHeight={200}
    hasMasterSpinner
  >
   
   
    <div className='container'>
      <Slider className='slider'>
        <Slide index={0}>
          <Image src={imageUrl} />
        </Slide>
        <Slide index={1}>
          <Image src={imageUrl} />
        </Slide>
        <Slide index={2}>
          <Image src={imageUrl} />
        </Slide>
        <Slide index={3}>
          <Image src={imageUrl} />
        </Slide>
        <Slide index={4}>
          <Image src={imageUrl} />
        </Slide>
        <Slide index={5}>
          <Image src={imageUrl} />
        </Slide>
      </Slider>
      <ButtonBack className='buttonBack'>Back</ButtonBack>
      <ButtonNext className='buttonNext'>Next</ButtonNext>
    </div>
  </CarouselProvider>
);

export default DirectoryCarousel