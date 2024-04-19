import React from 'react';

export default function Header() {
    return (
        <div className='container mx-auto border-4 border-b-0 border-slate-600 divide-y-4 divide-slate-600'>
            <div className='p-4 lg:p-8'>
                <p className='text-xs uppercase text-center text-slate-600 md:text-m'>
                    {new Date().toDateString()}
                </p>
                <p className='text-2xl font-bold uppercase text-center text-slate-600 md:text-3xl lg:text-4xl'>
                    Portfolio
                </p>
            </div>
            {
                /**

            <div className='flex flex-wrap divide-x-4 divide-slate-600'>
                <div className='w-1/3 text-center px-4 py-2 text-slate-600'>About</div>
                <div className='w-1/3 text-center px-4 py-2 text-slate-600'>Projects</div>
                <div className='w-1/3 text-center px-4 py-2 text-slate-600'>Skills</div>
            </div>

                 */
            }
        </div>
    );
}