import React from 'react';


export default function ProjectEntry({ project_data, ...props }) {
    const {
        title,
        shortDescription,
    } = project_data;

    return (
        <div className='p-4 border-slate-500'>
            <h3 className='text-5xl text-slate-400 font-bold'>{title}</h3>
            <p className='mt-4'>{shortDescription}</p>
        </div>
    );
}