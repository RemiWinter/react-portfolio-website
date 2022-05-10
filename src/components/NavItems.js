
const NavItems = ({navList, title}) => {
  return (
    // <ul class="navlist">
    //       <li class="welcome">{title}</li>
    //       <div class="nav-right">
    //         <li class="home">
    //           <a class="home-link" href="#">Home</a>
    //         </li>
    //         <li class="about">
    //           <a class="about-link" href="#about">About</a>
    //         </li>
    //         <li class="projects">
    //           <a class="projects-link" href="#proj">Projects</a>
    //         </li>
    //         <li class ="contact">
    //           <a class="contact-link" href="#contact1">Contact</a>
    //         </li>
    //       </div>
    //     </ul>

        <ul className="navlist">
          <li className="welcome">{title}</li>
          <div className="nav-right">
          {navList.map((navItem) => (
              <li className={navItem.toLowerCase()}>
                <a className={`${navItem.toLowerCase()}-link`} href={`#${navItem.toLowerCase()}-scroll`}>{navItem}</a>
              </li>
            ))}
          </div>
        </ul>
  )
}

export default NavItems