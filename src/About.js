import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <h2>About Us</h2>
      <div className="about-content">
        <p>
          <strong>Club Promotions</strong> is your go-to partner for unforgettable nightlife experiences. With years of expertise in event management, we specialize in curating exclusive club nights, themed parties, and VIP experiences that bring people together.
        </p>
        <p>
          Our mission is to create vibrant, safe, and memorable events for everyone. We collaborate with top venues, artists, and brands to deliver the best in entertainment. Whether you’re looking to dance the night away or network with like-minded partygoers, our events are designed for you.
        </p>
        <p>
          <strong>Why choose us?</strong>
          <ul>
            <li>Innovative event concepts</li>
            <li>Professional team</li>
            <li>Personalized VIP services</li>
            <li>Seamless RSVP and guest management</li>
            <li>Passion for nightlife culture</li>
          </ul>
        </p>
        <p>
          Join us and be part of the most exciting club events in town!
        </p>
      </div>

      {/* Milestones Section */}
      <div className="about-milestones">
        <div className="milestone-card">
          <div className="milestone-number">120+</div>
          <div className="milestone-label">Parties Hosted</div>
        </div>
        <div className="milestone-card">
          <div className="milestone-number">7</div>
          <div className="milestone-label">Years Active</div>
        </div>
        <div className="milestone-card">
          <div className="milestone-number">5</div>
          <div className="milestone-label">Cities Covered</div>
        </div>
      </div>

      {/* Team Section */}
      <div className="about-team">
        <h3>Meet Our Team</h3>
        <div className="team-list">
          <div className="team-member">
            <div className="team-photo" style={{backgroundImage: "url('https://randomuser.me/api/portraits/men/32.jpg')"}}></div>
            <div className="team-info">
              <div className="team-name">Rahul Sharma</div>
              <div className="team-role">Founder & CEO</div>
              <div className="team-bio">Visionary event architect with a passion for nightlife and innovative experiences.</div>
            </div>
          </div>
          <div className="team-member">
            <div className="team-photo" style={{backgroundImage: "url('https://randomuser.me/api/portraits/women/44.jpg')"}}></div>
            <div className="team-info">
              <div className="team-name">Priya Mehra</div>
              <div className="team-role">Head of Partnerships</div>
              <div className="team-bio">Expert in building relationships with top clubs and brands across the country.</div>
            </div>
          </div>
          <div className="team-member">
            <div className="team-photo" style={{backgroundImage: "url('https://randomuser.me/api/portraits/men/85.jpg')"}}></div>
            <div className="team-info">
              <div className="team-name">Amit Singh</div>
              <div className="team-role">Event Manager</div>
              <div className="team-bio">Master of logistics and guest experiences, ensuring every party is unforgettable.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Clubs Section */}
      <div className="about-partners">
        <h3>Our Partner Clubs</h3>
        <div className="partners-list">
          <div className="partner-club">
            <img src="https://dummyimage.com/80x80/26d0ce/fff&text=Club+XYZ" alt="Club XYZ" />
            <div className="partner-name">Club XYZ</div>
          </div>
          <div className="partner-club">
            <img src="https://dummyimage.com/80x80/f9d923/181818&text=Pulse" alt="Pulse" />
            <div className="partner-name">Pulse</div>
          </div>
          <div className="partner-club">
            <img src="https://dummyimage.com/80x80/1a2980/fff&text=Vibe" alt="Vibe" />
            <div className="partner-name">Vibe</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
