import React from 'react';
import Banner from '../Banner/Banner';
import BrandSection from '../BrandSection/BrandSection';
import MapSection from '../MapSection/MapSection';
import FeatureSection from '../FeatureSection/FeatureSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BrandSection/>
            <FeatureSection/>
            <MapSection/>
        </div>
    );
};

export default Home;