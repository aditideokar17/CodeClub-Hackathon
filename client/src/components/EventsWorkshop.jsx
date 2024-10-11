import '../css/EventsWorkshop.css'
import image1 from '../assets/img-1.jpg'; 
import image2 from '../assets/img-2.jpg'; 
import image3 from '../assets/img-3.jpg'; 
import image4 from '../assets/img-4.jpg'; 
const EventsWorkshop = () => {
    const event = [
        {
            "id": 1,
            "title": "Coding Bootcamp",
            "description": "Join us for a weekend coding bootcamp to learn the basics of web development.",
            "image": image1
        },
        {
            "id": 2,
            "title": "Hackathon",
            "description": "Participate in a 24-hour hackathon and showcase your coding skills.",
            "image": image2
        },
        {
            "id": 3,
            "title": "Web Development Workshop",
            "description": "Learn to build dynamic web applications using React and Node.js.",
            "image": image3
        },
        {
            "id": 4,
            "title": "AI and Machine Learning Seminar",
            "description": "Discover the latest trends in AI and Machine Learning from industry experts.",
            "image":image4
        },
    ]
    
    
      
  return (
   <>
   <div className="event-container">
    <div className="event-heading">
        <h1>Upcoming Events & Workshop</h1>
    </div>

    <div className="card-container">
        {event.map(event => (
          <div className="card" key={event.id}>
           <img src={event.image} alt="" />
           <h1>{event.title}</h1>
           <p>{event.description}</p>
           <button className='btn'>Veiw</button>
          </div>
        ))}

    </div>
   </div>
   </>
  )
}

export default EventsWorkshop