import React from 'react';


export default function Hero() {
    return <section className='container md:mx-auto border-4 border-slate-600'>
        <div className='flex flex-row mb-4 mt-4 lg:mt-8'>
            <p className='md:text-xl lg:text-2xl px-4 text-slate-600 lg:px-8'>Hello, my name is</p>
        </div>
        <h1 className='text-6xl md:text-8xl lg:text-9xl text-slate-600 font-bold text-center'>Bailey Liang</h1>
        <div className='flex flex-row-reverse mb-4 mt-2'>
            <p className='text-3xl md:text-5xl lg:text-6xl text-end mt-5 text-slate-600 px-4 py-4 lg:px-8 lg:pb-8'>I am a Software Developer.</p>
        </div>
    </section>;
}
