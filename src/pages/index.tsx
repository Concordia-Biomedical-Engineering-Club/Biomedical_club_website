import React from 'react';

import { NextSeo } from 'next-seo';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';
import { AppConfig } from '../utils/AppConfig';

const App = () => {
  return (
    <>
      <NextSeo
        title={AppConfig.title}
        description={AppConfig.description}
        canonical="https://bec-club.vercel.app"
        openGraph={{
          url: 'https://bec-club.vercel.app',
          title: AppConfig.title,
          description: AppConfig.description,
          images: [
            {
              url: 'https://bec-club.vercel.app/assets/images/logo.png',
              width: 800,
              height: 600,
              alt: 'Biomedical Engineering Club Logo',
            },
          ],
          site_name: AppConfig.site_name,
        }}
        twitter={{
          handle: '@BEC_Concordia',
          site: '@BEC_Concordia',
          cardType: 'summary_large_image',
        }}
      />
      <div className={`bg-background grid gap-y-16 overflow-hidden`}>
        <div className={`relative bg-background`}>
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
            >
              <Header />
              <MainHero />
            </div>
          </div>
          <MainHeroImage />
        </div>
        <Canvas />
        <LazyShow>
          <>
            <Product />
            <Canvas />
          </>
        </LazyShow>
        <LazyShow>
          <>
            <Features />
            <Canvas />
          </>
        </LazyShow>
        <LazyShow>
          <Pricing />
        </LazyShow>
        <LazyShow>
          <>
            <Canvas />
            <About />
          </>
        </LazyShow>
        <Analytics />
      </div>
    </>
  );
};

export default App;
