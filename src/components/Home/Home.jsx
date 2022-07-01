import React from 'react';
import projectSet from '../../assets/projects.webp'
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaCss3Alt,FaReact,FaHtml5 } from "react-icons/fa";

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import './home.css'

const Home = () => {
  return (
    <>
    <div className="projects-section">
        <div className="projects">
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div className="img">
                <img src={projectSet} alt="aboutme" />
                <div className="tech-stacks">
                    <span className='techs'><FaCss3Alt /></span>
                    <span className='techs'><FaReact /></span>
                    <span className='techs'><FaHtml5 /></span>
                </div>
            </div>
            <div className="project-content">
                <span className='social'><a href="#bout"><GitHubIcon className="social-size" /></a></span>
                <span className='social'><a href="#bout"><VisibilityRoundedIcon className='social-size' /></a></span>
            </div>
        </div>
        <div className="projects">
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div className="img">
                <img src={projectSet} alt="aboutme" />
                <div className="tech-stacks">
                    <span className='techs'><FaCss3Alt /></span>
                    <span className='techs'><FaReact /></span>
                    <span className='techs'><FaHtml5 /></span>
                </div>
            </div>
            <div className="project-content">
                <span className='social'><a href="#bout"><GitHubIcon className="social-size" /></a></span>
                <span className='social'><a href="#bout"><VisibilityRoundedIcon className='social-size' /></a></span>
            </div>
        </div>

        <div className="projects">
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div className="img">
                <img src={projectSet} alt="aboutme" />
                <div className="tech-stacks">
                    <span className='techs'><FaCss3Alt /></span>
                    <span className='techs'><FaReact /></span>
                    <span className='techs'><FaHtml5 /></span>
                </div>
            </div>
            <div className="project-content">
                <span className='social'><a href="#bout"><GitHubIcon className="social-size" /></a></span>
                <span className='social'><a href="#bout"><VisibilityRoundedIcon className='social-size' /></a></span>
            </div>
        </div>
        <div className="projects">
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div className="img">
                <img src={projectSet} alt="aboutme" />
                <div className="tech-stacks">
                    <span className='techs'><FaCss3Alt /></span>
                    <span className='techs'><FaReact /></span>
                    <span className='techs'><FaHtml5 /></span>
                </div>
            </div>
            <div className="project-content">
                <span className='social'><a href="#bout"><GitHubIcon className="social-size" /></a></span>
                <span className='social'><a href="#bout"><VisibilityRoundedIcon className='social-size' /></a></span>
            </div>
        </div>
        <div className="projects">
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div className="img">
                <img src={projectSet} alt="aboutme" />
                <div className="tech-stacks">
                    <span className='techs'><FaCss3Alt /></span>
                    <span className='techs'><FaReact /></span>
                    <span className='techs'><FaHtml5 /></span>
                </div>
            </div>
            <div className="project-content">
                <span className='social'><a href="#bout"><GitHubIcon className="social-size" /></a></span>
                <span className='social'><a href="#bout"><VisibilityRoundedIcon className='social-size' /></a></span>
            </div>
        </div>

        <div className="projects">
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div className="img">
                <img src={projectSet} alt="aboutme" />
                <div className="tech-stacks">
                    <span className='techs'><FaCss3Alt /></span>
                    <span className='techs'><FaReact /></span>
                    <span className='techs'><FaHtml5 /></span>
                </div>
            </div>
            <div className="project-content">
                <span className='social'><a href="#bout"><GitHubIcon className="social-size" /></a></span>
                <span className='social'><a href="#bout"><VisibilityRoundedIcon className='social-size' /></a></span>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Home