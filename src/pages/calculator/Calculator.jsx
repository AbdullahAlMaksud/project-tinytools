import { useState } from 'react';
// import { Scrollbar } from 'react-scrollbars-custom';
import { Scrollbars } from 'rc-scrollbars';

const Calculator = () => {
    const [display, setDisplay] = useState([]);

    const num = display.join()
    console.log(num)

    const handleButton = (number) => {
        setDisplay([...display, number]);
        console.log(display)
    }
    const handleReset = () => {
        setDisplay([]);
    }
    return (
        <div className='container mx-auto pt-20'>
            <h2 className='max-w-72 text-center font-mono font-bold'>
                Calculator
            </h2>
            <div className='bg-slate-200 rounded-md p-5 mt-5 grid grid-cols-4 gap-3 max-w-72 '>
                <div className='col-start-1 col-end-5 bg-yellow-400 '>
                    <p className='bg-gray-700 rounded py-1 px-3 text-left font-stick text-white text-2xl w-full flex items-center'>
                        <Scrollbars style={{ width: 250, height: 40, color: 'white' }}>
                            <span className='float-right'>{display.length === 0 ? 0 : display}</span>
                        </Scrollbars>
                    </p>
                </div>
                <button onClick={() => handleButton(1)} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl font-bold text-white hover:bg-red-700 active:scale-95'>1</button>
                <button onClick={() => handleButton(2)} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl font-bold text-white hover:bg-red-700 active:scale-95'>2</button>
                <button onClick={() => handleButton(3)} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl font-bold text-white hover:bg-red-700 active:scale-95'>3</button>
                <button onClick={() => handleButton('+')} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl font-bold text-white hover:bg-red-700 active:scale-95'>+</button>
                <button onClick={() => handleButton(4)} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl font-bold text-white hover:bg-red-700 active:scale-95'>4</button>
                <button onClick={() => handleButton(5)} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl font-bold text-white hover:bg-red-700 active:scale-95'>5</button>
                <button onClick={() => handleButton(6)} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl font-bold text-white hover:bg-red-700 active:scale-95'>6</button>
                <button onClick={() => handleButton('-')} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl font-bold text-white hover:bg-red-700 active:scale-95'>-</button>
                <button onClick={() => handleButton(7)} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl font-bold text-white hover:bg-red-700 active:scale-95'>7</button>
                <button onClick={() => handleButton(8)} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl font-bold text-white hover:bg-red-700 active:scale-95'>8</button>
                <button onClick={() => handleButton(9)} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl font-bold text-white hover:bg-red-700 active:scale-95'>9</button>
                <button onClick={() => handleButton('*')} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl font-bold text-white hover:bg-red-700 active:scale-95'>×</button>
                <button onClick={() => handleButton(0)} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl font-bold text-white hover:bg-red-700 active:scale-95'>0</button>
                <button onClick={() => handleButton(Math.PI)} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl font-bold text-white hover:bg-red-700 active:scale-95'>π</button>
                <button onClick={() => handleButton('.')} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl font-bold text-white hover:bg-red-700 active:scale-95'>.</button>
                <button onClick={() => handleButton('/')} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl font-bold text-white hover:bg-red-700 active:scale-95'>/</button>
                <button onClick={handleReset} className='min-w-14 min-h-14 bg-red-500 rounded-md text-2xl col-start-1 col-end-5 font-bold text-white hover:bg-red-700 active:scale-95'>Reset</button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Calculator;