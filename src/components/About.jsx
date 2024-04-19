import React from 'react';


export default function About() {
    return (
        <section className='flex flex-row flex-column container mx-auto border-4 border-t-0 border-slate-600 md:flex-row'>
            <div className='w-full md:w-1/2'>
                <h2 className='ps-4 pt-4 w-min font-bold text-4xl text-slate-600 lg:text-6xl lg:ps-8 lg:pt-8'>About</h2>
                <p className='text-slate-600 p-4 lg:text-xl lg:p-8'>
                    Bailey is a dedicated and driven software developer who thrives on tackling complex challenges. With a penchant for continuous learning, he often invests time in exploring new ideas and crafting intriguing side projects. Armed with an undergraduate degree in computer science, Bailey leverages this knowledge to design and build efficient software solutions. Furthermore, he is also highly interested in computer vision and natural language processing as well as the art of building tangible creations using electronic components and programming logic.
                </p>
            </div>

            <div className='m-4 md:w-1/2 lg:m-8'>
                <img className='size-full saturate-50 rounded-full' src="/profile.jpeg" alt="test" />
            </div>
        </section>
    );
}