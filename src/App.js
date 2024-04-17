import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Header from './components/Header';


export default function App() {
    return (
        <>
            <Header />
            <div className=''>
                <Hero />
                <About />
                <Projects />
                <Contacts />
            </div >
            <div>
                Footer
            </div>
        </>
    );
}


