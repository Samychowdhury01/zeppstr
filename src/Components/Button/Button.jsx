import React from 'react';

const Button = ({children}) => {
    return (
        <button className='btn bg-primary hover:btn-error hover:shadow-2xl transition-all duration-500 ease-linear text-white px-10 normal-case text-lg font-medium border-none rounded-[48px]'>
            {children}
        </button>
    );
};

export default Button;