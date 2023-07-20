import React from 'react';
import Button from '../../../Components/Button/Button';

const Ranking = () => {
    return (
        <section className='ranking-section-bg p-8 md:p-28 mb-16 flex items-center md:items-start justify-center md:justify-start'>
           <div className='text-white space-y-4 md:w-1/2'>
           <h1 className='text-3xl md:text-5xl font-bold'>Would you like to increase your ranking</h1>
            <p className='md:text-lg'>Reach out to expert SEO consultants to discuss how a SEO solutions can help you achieve your goals</p>
            <Button>Get Started Now</Button>
           </div>
        </section>
    );
};

export default Ranking;