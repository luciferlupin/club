import React from 'react';
import './EventModal.css';

function EventModal({ event, onClose, onReserve }) {
  if (!event) return null;

  // fallback/defaults
  const {
    title, name, date, time, location, address, price, dressCode,
    specialGuest, dj, artist, description, extraInfo
  } = event;

  return (
    <div className="event-modal-overlay" onClick={onClose}>
      <div className="event-modal-card" onClick={e => e.stopPropagation()}>
        <button className="event-modal-close" onClick={onClose}>&times;</button>
        <h2>{title || name || 'Event Details'}</h2>
        <div className="event-modal-info-grid">
          <div className="event-modal-label">Date:</div>
          <div>{date ? new Date(date).toLocaleDateString() : 'TBA'}</div>

          <div className="event-modal-label">Time:</div>
          <div>{time || '10:00 PM onwards'}</div>

          <div className="event-modal-label">Location:</div>
          <div>{location || 'TBA'}</div>

          <div className="event-modal-label">Address:</div>
          <div>{address || 'See club website for details'}</div>

          <div className="event-modal-label">Entry Fee:</div>
          <div>{price || 'Entry Free / RSVP Required'}</div>

          <div className="event-modal-label">Dress Code:</div>
          <div>{dressCode || 'Smart Casuals'}</div>

          {(specialGuest || extraInfo?.specialGuest) && <><div className="event-modal-label">Special Guest:</div><div>{specialGuest || extraInfo?.specialGuest}</div></>}
          {(dj || artist || extraInfo?.dj) && <><div className="event-modal-label">DJ / Artist:</div><div>{dj || artist || extraInfo?.dj}</div></>}

          <div className="event-modal-label">Description:</div>
          <div>{description || 'No additional description.'}</div>
        </div>
        <button className="event-modal-reserve" onClick={() => onReserve(event)}>
          Reserve Spot
        </button>
      </div>
    </div>
  );
}

export default EventModal;
