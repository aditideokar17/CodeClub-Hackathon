import '../css/Banner.css';
import HomeBanner from '../assets/banner.png';

const Banner = () => {
 
  return (
    <>
    <div className='banner' >
    
    <div className="banner-text slide-right">
      <h1 className='heading'>A Better</h1>
      <h1 className="heading">Coding Journey</h1>
      <h1 className='heading'> Future Starts Here!</h1>

    <div className="btns">

      <div className="btn">
        <button>Join Us</button>
      </div>

      <div className="btn-1">
        <button>Contact</button>
      </div>
    </div>
    </div>

    <div className="banner-img">
      <img className='slide-left' src={HomeBanner} alt="" />
    </div>

    </div>
    </>
  )
}

export default Banner