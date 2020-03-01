import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
    state = {};
    render() {
        return (
            <div className='landing'>
                <div className='landingText'>
                    <h1>
                        Chris Boydstun
                    </h1>
                    <div className='minorText'>
                        <p>
                            Full Stack Web Developer
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;