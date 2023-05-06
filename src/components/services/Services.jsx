import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>What i Provide</h5>
    <h2>Services</h2>

    <div className="container services__container">
      
              <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>

        <ul className="service__list">
          <li >
            <BiCheck className='service__list-icon' />
            <p>Web development support and maintenance.</p>
          </li>
          <li >
            <BiCheck className='service__list-icon' />
            <p>Web hosting. </p>
          </li>
          <li >
            <BiCheck className='service__list-icon' />
            <p>Web programming..</p>
          </li>
          <li >
            <BiCheck className='service__list-icon' />
            <p>Web optimization..</p>
          </li>
          <li >
            <BiCheck className='service__list-icon' />
            <p>Program Frameworks..</p>
          </li>
          <li >
            <BiCheck className='service__list-icon' />
            <p>Git.</p>
          </li>
        </ul>
      </article>

              {/* END OF WEB DEVELOPMENT */}

              {/* <article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>

        <ul className="service__list">
          <li >
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </li>
          <li >
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </li>
          <li >
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </li>
          <li >
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </li>
          <li >
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article> */}

              {/* END OF CONTENT CREATION */}

              <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className="service__list">
          <li >
            <BiCheck className='service__list-icon' />
            <p>Custom Web Design & Development.</p>
          </li>
          <li >
            <BiCheck className='service__list-icon' />
            <p>Corporate Branding & Graphics Design.</p>
          </li>
          <li >
            <BiCheck className='service__list-icon' />
            <p>Wearables App Design.</p>
          </li>
          <li >
            <BiCheck className='service__list-icon' />
            <p>Product Design.</p>
          </li>
        
        </ul>
      </article>

              {/* END OF UI/UX */}

    </div>
    </section>
  )
}

export default Services