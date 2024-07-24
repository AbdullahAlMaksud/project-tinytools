import React, { useState } from 'react';

const WordCounter = () => {
    const [char, setChar] = useState('');
    const [word, setWord] = useState('')

    const handleWord = (e) => {
        const form = e.target;
        setChar(form.value)
        setWord(char.split(' '))
    }

    return (
        <div className='w-11/12 mx-auto container'>
            <textarea onKeyUp={handleWord} name="text" className='bg-gray-50 focus:shadow-lg border focus:outline-none border-gray-300 w-full rounded-xl text-xl p-5' rows={10} ></textarea>
            <h2 className='text-center text-yellow-700 font-mono text-xl'>Charecter: {char == [] ? "0" : char.length}</h2>
            <h2 className='text-center text-yellow-700 font-mono text-xl'>Word: {char == [] ? "0" : word.length}</h2>
        </div>
    );
};

export default WordCounter;