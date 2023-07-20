import React from 'react';
import Banner from '../Banner/Banner';
import BrandSection from '../BrandSection/BrandSection';
import MapSection from '../MapSection/MapSection';
import FeatureSection from '../FeatureSection/FeatureSection';
import SeoAudit from '../SeoAudit/SeoAudit';
import Ranking from '../Ranking/Ranking';
import Reviews from '../Reviews/Reviews';
import FAQSection from '../FAQSection/FAQSection';
import Services from '../Services/Services';
import IndustrySection from '../IndustrySection/IndustrySection';
import BlogSection from '../BlogSection/BlogSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BrandSection/>
            <FeatureSection/>
            <Services/>
            <IndustrySection/>
            <SeoAudit/>
            <FAQSection/>
            <BlogSection/>
            <Ranking/>
            <Reviews/>
            <MapSection/>
        </div>
    );
};

export default Home;