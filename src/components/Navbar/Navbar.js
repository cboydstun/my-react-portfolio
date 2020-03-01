import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

class Nav extends Component {
    state = {}
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link
                            className='link'
                            activeClass='active'
                            to='about'>About
                     </Link>
                    </li>
                    <li>
                        <Link
                            className='link'
                            activeClass='active'
                            to='portfolio'>Portfolio
                     </Link>
                    </li>
                    <li>
                        <Link
                            className='link'
                            activeClass='active'
                            to='contact'>Contact
                     </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Nav;