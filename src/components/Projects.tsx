import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import RetroAudio from './images/RetroAudioPage.png';
import RDE from './images/RanchoDriveTrain.png';

function Projects() {
  return (
    <div className='projects'>
        <Carousel 
        showArrows={true}
        showIndicators={true}
        >
            <div>
                <Image alt="RetroAudio" src={RetroAudio} className='carouselImage'/>
                <p> Test </p>
            </div>
            <div>
                <Image alt="RnachoDrivetrain" src={RDE} className='carouselImage'/>
                <p> Test </p>
            </div>
        </Carousel>
    </div>
  )
}

export default Projects