import React from 'react';


export default function About() {
    return (
        <section className='flex flex-row container mx-auto border-4 border-t-0 border-slate-500'>
            <div className='flex-1'>

                <h2 className='text-4xl font-bold mb-4 text-slate-600'>About</h2>
                <p className='p-4'>
                    Hi there! I'm [Your Name], a [Job Title] with a passion for [Area of Expertise]. I bring [Number] years of experience to the table, specializing in [List 2-3 key skills].

                    I'm driven by a desire to [State your professional goal or the impact you want to make].  Whether it's [Briefly describe a challenging project you tackled], I thrive on [Highlight a positive work attribute].

                    Beyond work, I enjoy [Mention a relevant personal interest]. This [Explain how your interest connects back to your professional skills].

                    I'm always looking for new challenges and opportunities to collaborate. If you think my skills would be a good fit for your project, feel free to [Mention your preferred method of contact, e.g., get in touch]!
                </p>
            </div>

            <div className='flex-1'>
                <img className='size-full' src="https://www.dunderville.se/assets/img/process.jpg" alt="test" />
            </div>
        </section>
    );
}