import React from 'react';

export default function Contacts() {
    return (
        <div className='container mx-auto border-4 border-t-0 border-slate-600 p-4'>
            <h2 className='text-3xl font-bold text-slate-600 md:text-4xl mb-4'>Contact</h2>
            <p className=''>Let's talk, use the contact form below </p>
            <div>
                <input className='mt-4 border-b-2 w-full border-slate-600 text-xl focus:outline-0' type="text" placeholder='John Doe' />
                <input className='mt-4 border-b-2 w-full border-slate-600 text-xl focus:outline-0' type="text" placeholder='johndoe@email.com' />
                <textarea className='mt-4 w-full text-xl' placeholder='Hi, I would like to talk about...' name="message" id="message-textbox" cols={30} rows={5}></textarea>
                <input className="uppercase text-xl border-4 border-slate-600 text-slate-600 px-4 py-2" type="submit" value="submit" />
            </div>
        </div>
    );
}