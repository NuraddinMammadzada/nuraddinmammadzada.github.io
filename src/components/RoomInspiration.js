// RoomInspiration.js
import React from 'react';
import "./styles/RoomInspiration.css"

const RoomInspiration = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>50+ Beautiful Rooms Inspiration</h1>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button>Explore More</button> 
      </div>
      <div className="room-gallery">
        <div className="room">
          <img src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_1215684-8.jpg" alt="Bedroom" />
          <div className="room-info">
            <div className="room-number">01</div>
            
            <div className="room-name">Textil</div>
            <div className="room-title">Inner Peace</div>
          </div>
        </div>
        <div className="room">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Dining Room" />
          <div className="room-info">
            <div className="room-number">02</div>
            <div className="room-name">Qab-Qacaq </div>
            <div className="room-title">Family Time</div>
          </div>
        </div>
        <div className="room">
          <img src="https://strgimgr.umico.az/sized/840/764739-31a5b91125c1fdf71151fc5852d98a9e.jpg" alt="Dining Room" />
          <div className="room-info">
            <div className="room-number">02</div>
            <div className="room-name">Geyim</div>
            <div className="room-title">Family Time</div>
          </div>
        </div>
      </div>
      <div className="pagination">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default RoomInspiration;