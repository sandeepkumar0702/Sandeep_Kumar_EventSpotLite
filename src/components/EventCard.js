import React from "react";
const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={() => onClick(event)}>
      <img className="event-image" src={event.image} alt={event.name} />
      <h3>{event.name}</h3>
      <p>{event.date} - {event.location}</p>
    </div>
  );
};
export default EventCard;
