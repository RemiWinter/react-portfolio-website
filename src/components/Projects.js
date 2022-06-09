import {ScrollContainer, ScrollPage, Animator, FadeIn, Fade, FadeOut, Move, MoveOut,   Sticky, StickyIn, Zoom, MoveIn, batch} from 'react-scroll-motion'
import { useDeferredValue, useEffect, useRef, useState } from "react";
import Project from './Project';
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Projects = ({projData}) => {

  gsap.registerPlugin(ScrollTrigger);
  
  setTimeout(() => {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects-content',
        start: 270,
        end: 370,
        scrub: 1,
        // pin:true,
        markers: false
      }
    });
  
    // tl2.to('.about-link', {
    //   color: 'white'
    // })
    tl2.to('.proj-h1', {
      transform: 'scale(1)',
      opacity: 1
    })    
    
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.grid-item',
        start: 450,
        end: 700,
        markers:false
      }
    })

    tl3.to('.item-1', {
      opacity:1,
      transform: 'scale(1) rotate(0)',
      duration: 0.5
    })
    .to('.item-2', {
      opacity:1,
      transform: 'scale(1) rotate(0)',
      duration: 0.5
    })

    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.grid-item',
        start: 1050,
        end: 1300,
        markers: false
      }
    })

    tl4.to('.item-3', {
      opacity:1,
      transform: 'scale(1) rotate(0)',
      duration: 0.5
    })
    .to('.item-4', {
      opacity:1,
      transform: 'scale(1) rotate(0)',
      duration: 0.5
    })

    let tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.grid-item',
        start: 1650,
        end: 1900,
        markers: false
      }
    })

    tl5.to('.item-5', {
      opacity:1,
      transform: 'scale(1) rotate(0)',
      duration: 0.5
    })
    .to('.item-6', {
      opacity:1,
      transform: 'scale(1) rotate(0)',
      duration: 0.5
    })

  }, 10000);

  // const section = useRef();
  // const gridItem1 = useRef();
  // const img1 = useRef();
  // const vid1 = useRef();


  // gridItem1.current.addEventListener('mouseover', () => {
  //   img1.current.style.display = 'none';
  //   vid1.current.style.display = 'block';
  // });

  // setTimeout(() => {
  //   section.current.classList.remove('hide')
  // }, 9000);

  return (
    <section id="proj" className="projects-section">
  <div className="container">
    <div className="projects-content">
      <h1 className="proj-h1" id='projects-scroll'>Projects</h1>
      <div className="grid grid-col-2">
        {/* <h1 className="projects-header">Projects</h1> */}

          <Project projData={projData}/>

        {/* <div className="grid-items item-1" ref={gridItem1}>
          <a href="https://remwinter.github.io/RemWinter/GYM-WEBPAGE/" target="_blank">
            <div className="media-div">
              <img src="img/gym_img.png" alt="" ref={img1}/>
              <video src="/videos/RoF_vid.mp4" type="video/mp4" loop muted autoPlay ref={vid1}></video>
            </div>
            <div className="projects-text">
              <div className="projects-text-top">
                <h1>Realm Of Fitness</h1>
                <p>Responsive gym landing page with sign up modal and form validation</p>
              </div>
              <div className="cta-btns no-pointer">
                <a href="https://remwinter.github.io/RemWinter/GYM-WEBPAGE/" target="_blank">
                  <button className="btn">View Project</button>
                </a>
                <a href="https://github.com/RemWinter/RemWinter/tree/main/GYM-WEBPAGE" target="_blank">
                  <button className="btn">Source Code</button>
                </a>
              </div>
            </div>
          </a>
        </div>
        <div className="grid-items item-2">
          <a href="https://remwinter.github.io/RemWinter/loruki-website/" target="_blank">
            <div className="media-div">
              <img src="img/Loruki_img.png" alt=""/>
              <video src="videos/Loruki_vid.mp4" type="video/mp4" loop muted autoPlay></video>
            </div>
            <div className="projects-text">
              <div className="projects-text-top">
                <h1>Loruki</h1>
                <p>Responsive cloud hosting site.</p>
              </div>
              <div className="cta-btns no-pointer">
                <a href="https://remwinter.github.io/RemWinter/loruki-website/" target="_blank">
                  <button className="btn">View Project</button>
                </a>
                <a href="https://github.com/RemWinter/RemWinter/tree/main/loruki-website" target="_blank">
                  <button className="btn">Source Code</button>
                </a>
              </div>
            </div>
          </a>
        </div>
        <div className="grid-items item-3">
          <a href="https://remwinter.github.io/RemWinter/Bootstrap-from-scratch/" target="_blank">
            <div className="media-div">
              <img src="img/Frontend_img.png" alt=""/>
              <video src="videos/Frontend_vid.mp4" type="video/mp4" loop muted autoPlay></video>
            </div>
            <div className="projects-text">
              <div className="projects-text-top">
                <h1>Frontend Bootcamp</h1>
                <p>Bootstrap style website built from scratch using vanilla CSS</p>
              </div>
              <div className="cta-btns no-pointer">
                <a href="https://remwinter.github.io/RemWinter/Bootstrap-from-scratch/" target="_blank">
                  <button className="btn">View Project</button>
                </a>
                <a href="https://github.com/RemWinter/RemWinter/tree/main/Bootstrap-from-scratch" target="_blank">
                  <button className="btn">Source Code</button>
                </a>
              </div>
            </div>
          </a>
        </div>
        <div className="grid-items item-4">
          <a href="https://remwinter.github.io/RemWinter/NETFLIX-WEBPAGE-CLONE/" target="_blank">
            <div className="media-div">
              <img src="img/Netflix_img.png" alt=""/>
              <video src="videos/Netflix_vid.mov" loop muted autoPlay></video>
            </div>
            <div className="projects-text">
              <div className="projects-text-top">
                <h1>Netflix Landing page Clone</h1>
                <p>Recreation of the Netflix landing page built from scratch</p>
              </div>
              <div className="cta-btns no-pointer">
                <a href="https://remwinter.github.io/RemWinter/NETFLIX-WEBPAGE-CLONE/" target="_blank">
                  <button className="btn">View Project</button>
                </a>
                <a href="https://github.com/RemWinter/RemWinter/tree/main/NETFLIX-WEBPAGE-CLONE" target="_blank">
                  <button className="btn">Source Code</button>
                </a>
              </div>
            </div>
          </a>
        </div> */}
      </div>
    </div>
  </div>
</section>
  )
}

export default Projects