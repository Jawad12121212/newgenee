'use client'
import React, { useEffect } from 'react'
import Hero from './components/Hero'
import LocomotiveScroll from 'locomotive-scroll';
import Images from './components/Images';
import Poster from './components/Poster';
import What from './components/What';
import Services from './components/Services';
import Clients from './components/Clients';
import Logo from './components/Logo';
import Founder from './components/Founder';
import Work from './components/Work';
import Planning from './components/Planning';
import Footer from './components/Footer';

const page = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('main'),
      smooth: true,
      multiplier: 1,
      class: 'is-revealed'
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    }
  }, [])

  return (
    <main>
      <Hero/>
      <Images/>
      <Poster/>
      <What/>
      <Services/>
      <Clients/>
      <Logo/>
      <Founder/>
      <Work/>
      <Planning/>
      <Footer/>
    </main>
  )
}

export default page