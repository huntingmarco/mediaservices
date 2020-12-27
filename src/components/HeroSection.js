import React from 'react';
import '../App.css';
import { Button } from './Button';
import { ButtonPortfolio } from './ButtonPortfolio';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                    GET STARTED
                </Button>
                <ButtonPortfolio
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    >
                    WATCH PORTFOLIO <i className='far fa-play-circle' />
                </ButtonPortfolio>
            </div>
        </div>
    )
}

export default HeroSection
