import React, { useState } from "react";
import EventCard from "../components/EventCard";
import events from "../data";

const EventList = ({ onEventClick }) => {
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="event-list">
      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="events-grid">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} onClick={onEventClick} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
