import React from 'react';
import { BiCalculator } from 'react-icons/bi';
import { FaCalculator } from 'react-icons/fa6';
import { IoColorPalette } from 'react-icons/io5';
import { TbWorldCode } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto flex gap-3 flex-wrap justify-center'>

            <Link to={'/calculator'} className='px-10 py-5 bg-red-200 hover:shadow-md shadow-black duration-300 ease-out flex-1 rounded flex flex-col items-center'>
                <FaCalculator className='text-4xl' />
                <p>Calculator</p>
            </Link>
            <Link to={'/wordCounter'} className='p-5 bg-yellow-200 hover:shadow-md shadow-black duration-300 ease-out  rounded flex flex-col items-center'>
                <TbWorldCode className='text-4xl' />
                <p>Word Counter</p>
            </Link>
            <Link to={'/color'} className='p-5 bg-orange-200 hover:shadow-md shadow-black duration-300 ease-out rounded flex flex-col items-center'>
                <IoColorPalette className='text-4xl' />
                <p>Color Generator</p>
            </Link>
        </div>
    );
};

export default Home;