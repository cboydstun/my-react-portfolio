import React, { Component } from 'react';
import './About.css'
import Self from './MyPic.jpg';
import Data from './Data.js';

class About extends Component {
    state = {}
    render() {
        return (
            <div className='about'>
                <div className='aboutText'>
                    <div>
                        <h1>ABOUT</h1>
                    </div>
                    <div>
                        <h3>{Data.header}</h3>
                        <img src={Self} alt='Self'></img>
                        <p>{Data.bio}</p>
                        <div className='available'>
                        It's my mission to use the power of the internet to help others learn all around the world.
                        <button href="mailto:chrisboydstun@gmail.com" type="button" class="btn btn-outline-primary">Email Me</button>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default About;