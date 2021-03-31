import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import ReactPlayer from "react-player"

export default function Portfolio() {
    return (
        <>
            <h1 className='portfolio'>PORTFOLIO</h1>
            <div>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                />
            </div>
            <Footer />
        </>
        );
}