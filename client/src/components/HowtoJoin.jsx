import '../css/HowtoJoin.css';
import { useState } from 'react';

const HowtoJoin = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <>
            <div className="join-container">

                <div className="main-heading" >
                    <h1>How to Join? </h1>
                    <p>Interested in joining CodeClub? It is easy! Simply follow the steps below to become a part of our community and kickstart your coding journey.</p>
                </div>

                <div className="content">
                    <div className="steps-container">
                        <div className="box">
                            <div className="number"><p>1</p></div>
                            <p>Fill out the membership form.</p>
                        </div>
                        <div className="box">
                            <div className="number"><p>2</p></div>
                            <p>Attend our next event or orientation.</p>
                        </div>
                        <div className="box">
                            <div className="number"><p>3</p></div>
                            <p>Meet the team and start learning!</p>
                        </div>
                    </div>

                    <div className="form-container">

                        <form  onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-button">Submit</button>
                        </form>

                    </div>
                </div>
            </div>

        </>
    );
};

export default HowtoJoin;
