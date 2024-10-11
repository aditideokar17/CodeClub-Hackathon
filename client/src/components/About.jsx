import '../css/About.css';
import AboutImg from '../assets/about-img2.png';

const About = () => {
  return (
    <>

    <div className="main-container">
      <div className="main-heading" >
      <h1>About Us </h1>
      <p> We believe in the power of community and shared knowledge. </p>
      </div>
    
    <div className="main-about-content">
        <div className="mission-text">
        <p>At CodeClub, we are a passionate community of coders, creators, and innovators united by our love for technology. Whether you’re just starting your coding journey or have years of experience, our club provides the perfect environment to learn, collaborate, and grow together.
</p>
<p>
Our members work on real-world projects, participate in hackathons, and share knowledge to solve complex challenges. We believe in the power of teamwork, continuous learning, and pushing the boundaries of what is possible through code. 
</p>
<p>
Join us and become part of a community that encourages creativity, supports personal growth, and fosters a culture of innovation.
</p>
        </div>

        <div className="mission-image">
          <img src={AboutImg} alt="" />
      </div>
    </div>
    
    
    </div>
    </>
  )
}

export default About