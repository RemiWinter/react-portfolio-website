import Navbar from "./components/Navbar";
import {usestate} from 'react'
import Header from "./components/Header";
import useScript from "./components/useScript";
import Projects from "./components/Projects";
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import {ScrollContainer, ScrollPage, Animator, FadeIn, Fade, FadeOut, Move, MoveOut,   Sticky, StickyIn, Zoom, MoveIn, batch} from 'react-scroll-motion'
import Contact from "./components/Contact";

function App() {
  gsap.registerPlugin(ScrollTrigger);

// const [navList, setNavList] = usestate([
//   {id: 1, text: 'Home'},
//   {id: 2, text: 'About'},
//   {id: 3, text: 'Projects'},
//   {id: 4, text: 'Contact'}
// ])


const [projData, setData] = useState([
  {
    title: 'Realm Of Fitness',
    desc: 'Responsive gym landing page with sign up modal and form validation',
    imgSrc: 'img/gym_img.png',
    vidSrc: '/videos/RoF_vid.mp4',
    pageLink: 'https://remiwinter.github.io/RemWinter/GYM-WEBPAGE/',
    sourceCode: 'https://github.com/RemWinter/RemWinter/tree/main/GYM-WEBPAGE',
    id: 1
  },
  {
    title: 'React Memory Game',
    desc: 'Memory game built in React',
    imgSrc: 'img/game-preview.png',
    vidSrc: '',
    pageLink: 'https://remiwinter.github.io/memory-game/',
    sourceCode: 'https://github.com/RemWinter/memory-game',
    id: 2
  },
  {
    title: 'Netflix Landing page Clone',
    desc: 'Recreation of the Netflix landing page built from scratch',
    imgSrc: 'img/Netflix_img.png',
    vidSrc: 'videos/Netflix_vid.mov',
    pageLink: '#',
    sourceCode: 'https://github.com/RemWinter/RemWinter/tree/main/NETFLIX-WEBPAGE-CLONE',
    id: 3
  },
  {
    title: 'React Task tracker',
    desc: 'Task tracker built in react',
    imgSrc: 'img/task-tracker.png',
    vidSrc: '',
    pageLink: 'https://remiwinter.github.io/react-task-tracker/',
    sourceCode: 'https://github.com/RemWinter/react-task-tracker',
    id: 4
  },
  {
    title: 'React Form',
    desc: 'Form with full Validation built in react',
    imgSrc: 'img/react-form.png',
    vidSrc: '',
    pageLink: 'https://remiwinter.github.io/react-form/',
    sourceCode: 'https://github.com/RemWinter/react-form',
    id: 5
  },
  {
    title: 'React Portfolio Website',
    desc: 'Portfolio website converted to react from vanilla JS, CSS & HTML',
    imgSrc: 'img/portfolio.png',
    vidSrc: '',
    pageLink: 'https://remiwinter.github.io/react-portfolio-website/',
    sourceCode: 'https://github.com/RemWinter/react-portfolio-website',
    id: 6
  },
  // {
  //   title: 'Frontend Bootcamp',
  //   desc: 'Bootstrap style website built from scratch using vanilla CSS',
  //   imgSrc: 'img/Frontend_img.png',
  //   vidSrc: 'videos/Frontend_vid.mp4',
  //   pageLink: 'https://remwinter.github.io/RemWinter/Bootstrap-from-scratch/',
  //   sourceCode: 'https://github.com/RemWinter/RemWinter/tree/main/Bootstrap-from-scratch',
  //   id: 6
  // },
])

const app = useRef();

setTimeout(() => {
  document.querySelector('body').style.overflowY = 'auto';
  document.querySelector('#proj').classList.remove('hide');

  let nav1Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.img-div',
      start: 0,
      end: 100,
      markers: false
    }
  })
  
  let nav2Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.projects-content',
        start: 250,
        end: 350,
        scrub: 1,
        // pin:true,
        markers: false
    }
  })

  let nav3Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.item-4',
        start: 1250,
        end: 1300,
        scrub: 1,
        // pin:true,
        markers: false
    }
  })

  nav1Tl.to('.about-link', {
    // color: 'red'
  })
  
  nav2Tl.to('.about-link', {
    // color: 'white'
  })
  .to('.projects-link', {
    // color:'red'
  })

  nav3Tl.to('.projects-link', {
    // color: 'white'
  })
  .to('.contact-link', {
    // color:'red'
  })

}, 9000);



const headerTitle = document.querySelectorAll('.header-title');
const headerTitle2 = document.querySelectorAll('.header-title2');

// window.addEventListener('scroll', () => {
//   console.log(window.scrollY)
//   // window.scrollY < 84 ?  hiAnimation = Move(0,0,-2000,250) : hiAnimation = Move(0,0, 0,0)
//   if (window.scrollY > 83) {
//     // document.querySelector('.header-title').classList.add('hide');
//     for (let i=0; i<headerTitle.length; i++) {
//       headerTitle[i].classList.add('hide');
//       headerTitle2[i].classList.remove('hide');
//     }
//   }
//   else {
//     for (let i=0; i<4; i++) {
//       headerTitle[i].classList.remove('hide');
//       headerTitle2[i].classList.add('hide');
//     }
//   }
// })



  return (
    <div className="App" ref={app}>
      <Navbar/>
      <Header/>
      {/* <ScrollContainer>
        <ScrollPage page={1}>
          <Animator> */}
            <Projects projData={projData}/>
          {/* </Animator>
        </ScrollPage>
      </ScrollContainer> */}

      <Contact/>

      
    </div>
  );

  // useScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js')
  // useScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js')
  // useScript('https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js')
  // useScript('https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.js')



  
  
}

export default App;
