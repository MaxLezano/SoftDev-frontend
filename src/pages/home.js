import React from 'react';
import MainCarousel from '../components/Carousel/Carousel';
import SectionProducts from '../components/sectionProducts/SectionProducts';
import Flayer from '../components/Flayer/Flayer';

function home() {
  return (
    <>
      <MainCarousel />
      <SectionProducts/>
      <Flayer />
    </>
  );
}

export default home;