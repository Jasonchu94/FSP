import React from 'react';


 const About = () => (

     <div className='footer-container'>
        My Links
        <div className='footer-links'>            
                <a target='_blank' className='links-me' href='https://github.com/Jasonchu94'>
                    <img src={window.github} id='about-images'></img>
                </a>                
                <a target='_blank' className='links-me' href='https://www.linkedin.com/in/jasonchu94/'>
                    <img src={window.linkedin} id='about-images'/>
                </a>
                <a target='_blank' className='links-me' href='https://angel.co/u/jason-chu-20'>
                     <img src={window.angellist} id='about-images'></img>
                </a>
            
        </div>
    </div> 
)

export default About;