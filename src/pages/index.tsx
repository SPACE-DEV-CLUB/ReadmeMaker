import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../components/common/NavBar';
import MainPage from 'components/main/MainPage';

const Home: NextPage = () => {
  const TOTAL_SLIDES = 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<any>(null);
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00vw)`;
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide === TOTAL_SLIDES) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div>
      <Head>
        <title>Readme Maker</title>
        <meta name="description" content="Make your readme.md awesome!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar nextSlide={nextSlide} prevSlide={prevSlide} currentSlide={currentSlide} />
      <MainPage slideRef={slideRef} />
    </div>
  );
};

export default Home;
