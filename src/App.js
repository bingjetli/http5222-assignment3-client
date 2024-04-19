import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './components/Skills';


export default function App() {
    return (
        <>
            <div className='p-4'>
                <Header />
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Footer />
            </div >
        </>
    );
}


