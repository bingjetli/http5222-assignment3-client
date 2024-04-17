import React from 'react';


export default function Hero() {
    return <section className='container border-4 border-slate-600'>
        <div className='flex flex-row mb-4'>
            <p className='bg-teal-400 text-xl text-white px-4 py-2'>Hello, my name is</p>
        </div>
        <h1 className='text-6xl md:text-8xl text-slate-600 font-bold text-center'>Bailey Liang</h1>
        <div className='flex flex-row-reverse mt-4'>
            <p className='text-5xl text-white mt-5 bg-teal-400 px-4 py-2'>I am a Software Developer.</p>
        </div>
    </section>;
}
