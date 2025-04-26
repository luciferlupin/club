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

function ContactForm({ upcomingEvents }) {
  const [form, setForm] = React.useState({ name: '', phone: '', event: '', entryType: '' });
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    const message = `Hi, I want to RSVP for ${form.event}!\nEntry Type: ${form.entryType}\nName: ${form.name}, Phone: ${form.phone}`;
    const whatsappNumber = '918595121436'; // Use country code (e.g., 91 for India)
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    const win = window.open(url, '_blank');
    if (!win) {
      alert('Unable to open WhatsApp. Please check your popup blocker or use WhatsApp Web.');
    }
    setForm({ name: '', phone: '', event: '', entryType: '' });
  };
  return (
    <form className="rsvp-form" onSubmit={handleSubmit} autoComplete="off">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        autoComplete="off"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
        autoComplete="off"
      />
      <select name="event" value={form.event} onChange={handleChange} required>
        <option value="">Select Event</option>
        {upcomingEvents.map(ev => (
          <option key={ev.title} value={ev.title}>{ev.title} ({ev.date.toDateString()})</option>
        ))}
      </select>
      <select name="entryType" value={form.entryType} onChange={handleChange} required>
        <option value="">Entry Type</option>
        <option value="Couple">Couple</option>
        <option value="Stag">Stag</option>
        <option value="Table">Table</option>
      </select>
      <button type="submit">RSVP via WhatsApp</button>
    </form>
  );
}

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

        </section>


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
          <ContactForm upcomingEvents={upcomingEvents} />
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
