import React from 'react'
import './about.css'
import ME from '../../asset/me-about.png'
import {FaAward} from 'react-icons/fa'
import {ImFolderOpen} from 'react-icons/im'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt='about-me' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>+2 years Experience</small>
            </article>

            <article className='about__card'>
                <ImFolderOpen className='about__icon'/>
                <h5>Projects</h5>
                <small>8+ Completed</small>
            </article>

          </div>
          <p>
          A software engineer with a knack for clever tech solutions, seeking to make impact by solving 
          real world problems through technology. Proficiency in React.js, JavaScript, PHP(OOP) and 
          Laravel among others.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>

    </section>
  )
}

export default About