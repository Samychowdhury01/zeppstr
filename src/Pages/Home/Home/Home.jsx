import React from 'react';
import Banner from '../Banner/Banner';
import BrandSection from '../BrandSection/BrandSection';
import MapSection from '../MapSection/MapSection';
import FeatureSection from '../FeatureSection/FeatureSection';
import SeoAudit from '../SeoAudit/SeoAudit';
import Ranking from '../Ranking/Ranking';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BrandSection/>
            <FeatureSection/>
            <SeoAudit/>
            <Ranking/>
            <MapSection/>
        </div>
    );
};

export default Home;