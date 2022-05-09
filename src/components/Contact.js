import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-solid-svg-icons' 
import {FaGithub, FaLinkedin} from 'react-icons/fa'
const Contact = () => {
  return (
    <section id="contact1" className="contact-section">
  <div className="container">
    <div className="contact-content">
      <div className="contact-email contact-item">
        <h1 className="c-email">Email:</h1>
      <a className="c-email-2"href="mailto:remi.winter@outlook.com">remi.winter@outlook.com</a>
      </div>
      <div className="contact-github contact-item">
        <h1 className="c-git">GitHub</h1>
        <a className="c-git-2" href="https://github.com/RemWinter" target="_blank"><FaGithub className='icon'/></a>
      </div>
      
      <div className="contact-linkedin contact-item">
        <h1 className="c-linkedin">LinkedIn</h1>
        <a className="c-linkedin-2" href="https://www.linkedin.com/in/remi-winter-a2425b8b/" target="_blank"><FaLinkedin className='icon'/></a>
      </div>

    </div>
  </div>
</section>
  )
}

export default Contact