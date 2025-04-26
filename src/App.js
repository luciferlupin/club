import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Gallery from './Gallery';
import EventModal from './EventModal';
import './App.css';

const EVENTS = [
  {
    date: new Date(2025, 3, 28),
    title: 'Spring Bash',
    description: 'Kick off the season with our Spring Bash! Music, drinks, and fun all night.',
    location: 'Club XYZ',
  },
  {
    date: new Date(2025, 4, 5),
    title: 'VIP Night',
    description: 'Exclusive VIP event with special guests and performances.',
    location: 'Club XYZ',
  },
];

function App() {
  const [form, setForm] = useState({ name: '', phone: '', event: '', entryType: '' });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRSVP = (e) => {
    e.preventDefault();
    const message = `Hi, I want to RSVP for ${form.event}!\nEntry Type: ${form.entryType}\nName: ${form.name}, Phone: ${form.phone}`;
    const whatsappNumber = 'YOUR_WHATSAPP_NUMBER'; // Replace with your WhatsApp number (with country code, e.g., 911234567890)
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  const handleReserve = (event) => {
    setShowModal(false);
    setForm(f => ({ ...f, event: event.title }));
    setTimeout(() => {
      const rsvp = document.querySelector('.rsvp-section');
      if (rsvp) rsvp.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  const upcomingEvents = EVENTS.filter(ev => ev.date >= new Date());

  function Home() {
    return (
      <>
        <section className="brand-header">
          <img src="/logo.png" alt="Club Logo" className="logo" />
          <h1>VibeX Club</h1>
          <p className="hero-tagline" style={{ marginBottom: '1.3rem' }}>
  Where Nights Come Alive. <span role="img" aria-label="sparkles">✨</span>
</p>
          <a
  href="https://wa.me/8595121436?text=Hi%20VibeX%20Club!%20I%20want%20to%20book%20my%20spot%20for%20the%20next%20event."
  className="cta-btn"
  target="_blank"
  rel="noopener noreferrer"
>
  Book Your Spot
</a>
        </section>

        <section className="intro-section">
          <h2>Welcome to VibeX</h2>
          <p>
            Step into the city’s most electrifying club experience! Enjoy world-class DJs, themed nights, and VIP luxury in a space designed for unforgettable memories.
          </p>
          <ul className="features-list">
            <li><span role="img" aria-label="dj">🎧</span> World-class DJs</li>
            <li><span role="img" aria-label="vip">🥂</span> VIP Experiences</li>
            <li><span role="img" aria-label="party">🕺</span> Themed Party Nights</li>
            <li><span role="img" aria-label="camera">📸</span> Stunning Event Gallery</li>
          </ul>
        </section>

        <div className="divider"></div>

        <section className="why-vibex-section">
  <h2>Why Choose VibeX?</h2>
  <div className="why-vibex-features">
    <div className="why-vibex-card">
      <span role="img" aria-label="security" className="why-vibex-icon">🛡️</span>
      <h3>Safe & Inclusive</h3>
      <p>Enjoy a secure, welcoming environment where everyone can party with peace of mind.</p>
    </div>
    <div className="why-vibex-card">
      <span role="img" aria-label="sound" className="why-vibex-icon">🔊</span>
      <h3>Top-Tier Sound</h3>
      <p>Experience world-class sound and lighting for an immersive night out.</p>
    </div>
    <div className="why-vibex-card">
      <span role="img" aria-label="star" className="why-vibex-icon">🌟</span>
      <h3>Celebrity Nights</h3>
      <p>Dance alongside celebrity DJs and special guests every month.</p>
    </div>
    <div className="why-vibex-card">
      <span role="img" aria-label="luxury" className="why-vibex-icon">💎</span>
      <h3>Luxury Ambiance</h3>
      <p>Indulge in a premium atmosphere with stunning interiors and VIP service.</p>
    </div>
  </div>
</section>

        <div className="divider"></div>

        <section className="calendar-section">
          <h2>Upcoming Events</h2>
          <div className="events-list">
            {upcomingEvents.length === 0 ? (
              <p>No upcoming events. Stay tuned!</p>
            ) : (
              <ul>
                {upcomingEvents.map((event, idx) => (
                  <li key={idx} style={{cursor:'pointer'}} onClick={() => handleEventClick(event)}>
                    <span className="event-dot">●</span> <strong>{event.title}</strong> - {new Date(event.date).toDateString()}<br/>
                    <span style={{opacity:0.82}}>{event.location}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="rsvp-section">
          <h2>RSVP Now</h2>
          <form className="rsvp-form" onSubmit={handleRSVP}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleFormChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleFormChange}
              required
            />
            <select name="event" value={form.event} onChange={handleFormChange} required>
              <option value="">Select Event</option>
              {upcomingEvents.map(ev => (
                <option key={ev.title} value={ev.title}>{ev.title} ({ev.date.toDateString()})</option>
              ))}
            </select>
            <select name="entryType" value={form.entryType} onChange={handleFormChange} required>
              <option value="">Entry Type</option>
              <option value="Couple">Couple</option>
              <option value="Stag">Stag</option>
              <option value="Table">Table</option>
            </select>
            <button type="submit">RSVP via WhatsApp</button>
          </form>
        </section>
      </>
    );
  }

  return (
    <Router>
      <nav className="main-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <footer className="footer">
          <p>&copy; 2025 Club Promotions. All rights reserved.</p>
        </footer>
        {/* Event Modal rendered globally */}
        <EventModal
          event={showModal ? selectedEvent : null}
          onClose={closeModal}
          onReserve={handleReserve}
        />
      </div>
    </Router>
  );
}

export default App;
