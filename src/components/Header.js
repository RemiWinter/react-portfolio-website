import {ScrollContainer, ScrollPage, Animator, FadeIn, Fade, FadeOut, Move, MoveOut,   Sticky, StickyIn, Zoom, MoveIn, batch} from 'react-scroll-motion'
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Header = () => {
  gsap.registerPlugin(ScrollTrigger);

  const iElement1 = useRef()
  const iElement2 = useRef()
  const iElement3 = useRef()
  const iElement4 = useRef()
  const hElement1 = useRef()
  const hiElement2 = useRef()
  const imElement = useRef()
  const imElement2 = useRef()
  const remiElement1 = useRef()
  const remiElement2 = useRef()
  const winterElement1 = useRef()
  const winterElement2 = useRef()
  const about = useRef()
  const head = useRef()
  const dev = useRef()
  const programmer = useRef()
  const designer = useRef()

setTimeout(() => {
  iElement1.current.style.display = 'none';
  iElement2.current.style.display = 'none';  
  iElement3.current.style.display = 'none';  
  iElement4.current.style.display = 'none';  
  hElement1.current.style.display = 'none';
  hiElement2.current.style.display = 'inline-block';
  imElement.current.style.display = 'none';
  imElement2.current.style.display = 'inline-block';
  remiElement1.current.style.display = 'none';
  remiElement2.current.style.display = 'inline-block';
  winterElement1.current.style.display = 'none';
  winterElement2.current.style.display = 'inline-block';
  about.current.style.opacity = 1;
  head.current.classList.remove('disable-scroll');
  dev.current.classList.remove('animation');
  designer.current.classList.remove('animation');
  programmer.current.classList.remove('animation');
  dev.current.classList.add('end');
  designer.current.classList.add('end');
  programmer.current.classList.add('end');


  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.img-div',
      start: 0,
      end: 100,
      scrub: 1,
      pin:true,
      markers: false
    }
  });

  tl.to('.hi2', {
    x:-190,
    yPercent:120
  })
  .to('.im2', {
    x:-180,
    yPercent:20
  }, '=-0.5')
  .to('.remi2', {
    x:35,
    yPercent:-80
  }, '=-0.5')
  .to('.winter2', {
    x:100,
    yPercent:-180
  }, '=-0.5')
  .to('.about-me-div', {
    opacity: 1,
    transform: 'translateY(-70px) scale(1)'
  }, '=-0.5')
  // .to('.about-link', {
  //   color: 'red'
  // }, '=-0.5')
}, 9000);







  return (
        <header className="disable-scroll" ref={head}>
  <div className="container header-container">    

    {/* <ScrollContainer> */}
      {/* <ScrollPage page={0}> */}
    <div className="header-content">
      <div className="header-top">
        
      </div>
            <div className="i-0-div hi-full">
              <h1><span className="i-0 animation" ref={iElement1}>i</span></h1>
            </div>

      <div className="i-1-div im-full">
        <h1><span className="i-1 animation" ref={iElement2}>i</span></h1>
      </div>
      <div className="i-2-div remi-full">
        <h1><span className="i-2 animation" ref={iElement3}>i</span></h1>
      </div>
      <div className="i-3-div winter-full">
        <h1><span className="i-3 animation" ref={iElement4}>i</span></h1>
      </div>
      <h1><span className="i-4">i</span></h1>
      <div className="hi-div hi-full">
        <h1 className="hi animation" ref={hElement1}>H</h1>
        {/* <Animator animation={Move(0,0,-2000,250)}> */}
          <h1 className="hi2 animation header-title" id='about-scroll' ref={hiElement2}>Hi</h1>
          {/* </Animator> */}
        
      </div>
      <div className="im-div im-full">
        <h1 className="im animation" ref={imElement}>'m</h1>
        {/* <Animator animation={Move(0,0,-1700,-440)}> */}
        <h1 className="im2 animation header-title" ref={imElement2}>i'm</h1>
        {/* </Animator> */}
        {/* <h1 className="im2 animation header-title2 hide">i'm</h1> */}
      </div>
      <div className="remi-div remi-full">
        <h1 className="remi animation" ref={remiElement1}>Rem</h1>
        {/* <Animator animation={Move(0,0,240,-1130)}> */}
        <h1 className="remi2 animation header-title" ref={remiElement2}>Remi</h1>
        {/* </Animator> */}
      </div>
      <div className="winter-div winter-full">
        <h1 className="winter animation" ref={winterElement1}>W nter</h1>
        {/* <Animator animation={Move(0,0,1000,-1820)}> */}
        <h1 className="winter2 animation header-title" ref={winterElement2}>Winter</h1>
        {/* </Animator> */}
      </div>
      {/* <Animator animation={Move(0,0,0,500)}> */}
      <div className="img-div">
      <img className="coding-gif" src="https://raw.githubusercontent.com/RemWinter/react-portfolio-website/main/public/img/coding_giphy.gif" alt="" height="360" width="480"/>
      <h2 className="web-dev animation" ref={dev}>Web Developer</h2>
      <h2 className="programmer animation" ref={programmer}>Programmer</h2>
      <h2 className="designer animation" ref={designer}>Designer</h2>
      </div>
      {/* </Animator> */}
      
      <div className="about-me-div">
      {/* <Animator animation={batch(Move(0,0,0,3000),Zoom(10,0))}> */}
        <p className="about-me" ref={about}>I'm a self-taught Web Developer based in Birmingham UK. My primary skills reside in all things front-end, specifically <span>React</span>, <span>CSS</span>, <span>HTML</span> & <span>vanilla JavaScript</span>. I've also got experience using <span>C#</span>, <span>JSON</span>, <span>jQuery</span> and <span>Bootstrap</span>. My passion for coding comes from the desire to create UI's and UX's that capture the end-user's attention, while also being simple and intuitive. I first started coding in college during my spare time. However, I subsequently stopped to persue a BSc Mathematics degree and returned to coding again in 2020.</p> 
        {/* </Animator> */}
      </div>
      
    </div>
      {/* </ScrollPage>
    </ScrollContainer> */}

    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veritatis quis placeat inventore ullam facilis totam, dicta quia enim molestias itaque dignissimos magni blanditiis provident corrupti repellat dolorem magnam tenetur!</p> */}

  </div>
</header>
    
  )
}

export default Header