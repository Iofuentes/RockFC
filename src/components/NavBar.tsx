
import './NavBar.css'

interface Props {
  onClick: () => void;
}

const NavBar = ({ onClick }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-container">
            {/* Logo Area */}
            <div className='navbar-logo'>
                <a className="navbar-brand logo-font" href="#">RockFC</a>
            </div>

            {/* Tabs */}
            <div>
                <button className='btn btn-outline-success' onClick={onClick}>Sign Up</button>
            </div>
    </nav>
  )
}

export default NavBar