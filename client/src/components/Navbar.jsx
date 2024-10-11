
import '../css/Navbar.css';
const Navbar = () => {
  return (
   <>

   <nav className='navbar'>

    <div className="logo">
    <h1 className='logo'>CodeClub.</h1>
    </div>

    <div className="nav-link">
        <ul>
            <li>Home</li>
            <li>Events & Workshop</li>
            <li>Competitions</li>
            <li>Blogs</li>
        </ul>
    </div>

    <div className="btn">
        <button className='join-us'>Join Us</button>
    </div>

   </nav>


   </>
  )
}

export default Navbar