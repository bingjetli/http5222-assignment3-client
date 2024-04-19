import React from 'react';


export default function ProjectEntry({ project_data, ...props }) {
    const {
        title,
        shortDescription,
    } = project_data;

    return (
        <div className='w-min border-e-4 border-b-4 border-slate-600 lg:w-1/3 p-4'>
            <h3 className='text-3xl md:text-4xl text-slate-600 font-bold'>{title}</h3>
            <p className='text-slate-600 mt-4 lg:text-xl'>{shortDescription}</p>
        </div>
    );
}