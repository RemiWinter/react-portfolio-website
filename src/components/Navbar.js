import PropTypes from 'prop-types';
import NavItems from './NavItems';

const Navbar = ({title, navList}) => {
  return (
    <nav>
    <div class="container">
      <div class="nav-content">
        <h1 class="welcome2">{title}</h1>
        <input type="checkbox" id="check-btn"/>
        <label for="check-btn" class="ham-btn">
          <i class="fa-solid fa-bars"></i>
        </label>
        <NavItems title = {title} navList={['About', 'Projects', 'Contact']}/>
      </div>
    </div>    
    
  </nav>
  )
}

Navbar.defaultProps = {
  title: 'Welcome To My Portfolio'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

export default Navbar