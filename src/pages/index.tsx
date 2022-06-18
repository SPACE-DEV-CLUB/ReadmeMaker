import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalStates } from 'atoms';
import NavBar from 'components/common/NavBar';
import NavBarMainItem from 'components/common/NavBarMainItem';
import MainPage from 'components/main/MainPage';

const Home: NextPage = () => {
  const TOTAL_SLIDES = 1;
  const slideRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [_, setModal] = useRecoilState(modalStates);

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
    setModal([false, false]);
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
    setModal([false, false]);
  };

  return (
    <div>
      <Head>
        <title>Readme Maker</title>
        <meta name="description" content="Make your readme.md awesome!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar route="main">
        <NavBarMainItem nextSlide={nextSlide} prevSlide={prevSlide} currentSlide={currentSlide} />
      </NavBar>
      <MainPage slideRef={slideRef} />
    </div>
  );
};

export default Home;
