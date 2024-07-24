import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BiCopy } from 'react-icons/bi';

const Color = () => {
    const [color, setColor] = useState('');
    const [randomDigit, setRandomDigit] = useState('');
    const [copyStatus, setCopyStatus] = useState(false);
    const limit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f']
    const handleRandom = () => {
        const randomNumber = (Math.random() * 0xfffff * 1000000).toString(16);
        setColor('#' + randomNumber.slice(0, 6));
        setRandomDigit('#' + randomNumber.slice(0, 6));
        // console.log(limit[random]);
        // setColor(limit[random])
    }
    const handleColor = (e) => {
        setColor(e.target.value)
        console.log('Color', `${color}`)
    }

    const handleCopy = () => {
        setCopyStatus(true)
        setTimeout(() => setCopyStatus(false), 2000);
    }


    return (
        <div className={`h-screen mx-auto -mt-20 pt-20`} style={{ backgroundColor: color }}>
            <div className='w-1/2 mx-auto relative pt-5'>
                <input onKeyUp={handleColor} className='bg-gray-200 rounded text-lg px-3 py-2 focus:outline-none w-full uppercase text-center' defaultValue={randomDigit} type="text" onChange={(e) => setRandomDigit(e.target.value)} />
                <CopyToClipboard text={randomDigit} className="absolute right-3 top-1/2" onCopy={handleCopy}>
                    <button><BiCopy /></button>
                </CopyToClipboard>
            </div>
            {
                copyStatus && <div className='absolute bottom-5 right-5 z-50 flex justify-end w-full duration-200 ease-out '><p className='px-4 py-2 rounded bg-gray-700 text-xs text-gray-100'>Text copied to clipboard!</p></div>
            }
            <div className='flex flex-col items-center justify-center'>
                <h2 className='uppercase hidden'>
                    {
                        randomDigit
                    }
                </h2>
                <button onClick={handleRandom} className='bg-gray-300 px-5 py-2 rounded mt-2 active:scale-95 hover:shadow'>Random Color</button>
            </div>
        </div>
    );
};

export default Color;