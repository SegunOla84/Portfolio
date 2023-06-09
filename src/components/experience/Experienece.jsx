import React from 'react'
import './experience.css'
import {HiCheckBadge} from 'react-icons/hi2'

const Experienece = () => {
  return (
    <section id='experience'>
      <h5>The Skills i Posses</h5>
      <h2>My Core</h2>

      <div className='container experience__container'>

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
        <div className='experience__content'>
            <article className='experience__details'>
              <HiCheckBadge className='experience__details-icon'/>
             <div>
               <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiCheckBadge className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiCheckBadge className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiCheckBadge className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <HiCheckBadge className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
             </div>
        </div>


                  {/* END OF FRONTEND */}


        <div className="experience__backend">
          <h3>Backend Development</h3>
            <div className='experience__content'>
            <article className='experience__details'>
              <HiCheckBadge className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiCheckBadge className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiCheckBadge className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiCheckBadge className='experience__details-icon'/>
              <div>
              <h4>Laravel</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
             </div>
        </div>



      </div>
    </section>
  )
}

export default Experienece