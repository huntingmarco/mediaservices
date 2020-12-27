import React from 'react'
import CardItem from './CarItem'
import './Card.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out our services!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='../images/photo.jpg'
                            text='Explore the hidden waterfall deep
                            inside the Amazon Jungle'
                            label='Photo Services'
                            path='/photo'
                        />
                        <CardItem 
                            src='../images/video.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Video Services'
                            path='/video'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src='../images/promotion.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Un'
                            label='Product Promotion'
                            path='/promotion'
                        />
                        <CardItem 
                            src='../images/commercial.jpg'
                            text='Experience Football on Top of the Himalayan Mountains'
                            label='Video Commercials'
                            path='/commercial'
                        />
                        <CardItem 
                            src='../images/livestream.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Special Event Livestream'
                            path='/livestream'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
