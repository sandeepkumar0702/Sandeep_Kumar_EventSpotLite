// src/App.js
import React, { useState } from "react";
import EventList from "./pages/EventList";
import EventModal from "./components/EventModal";
import "./App.css";

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="App">
      <header>
        <h1>EventSpot Lite</h1>
      </header>
      <EventList onEventClick={handleEventClick} />
      {selectedEvent && (
        <EventModal
          isOpen={!!selectedEvent}
          onClose={handleCloseModal}
          event={selectedEvent}
        />
      )}
    </div>
  );
};

export default App;
