import React, { Component } from 'react';
import Project from '../Project/Project.js';
import Data from './Data.js';
import './Portfolio.css';

class Portfolio extends Component {
    state = {}
    render() {
        return (
            <div className='portfolio'>
                <h1 className="heading">
                        PORTFOLIO
        </h1>
                <div className="portfolio-content">
                    {Data.projects.map((project) => (
                        <Project key={project.id}
                            img={project.img}
                            title={project.title}
                            role={project.role}
                            text={project.text}
                            url={project.url}
                            link={project.link} />
                    ))}
                </div>
                <h1 className='other'>
                    <h3>
                        Interested in my other work?
                </h3>
                </h1>
                <div className='repo-btn'>
                    <a href="https://www.github.com/cboydstun?tab=repositories" className="bttn">
                        Other Repositories
                        </a>
                </div>
            </div>
        )
    }
}
export default Portfolio;