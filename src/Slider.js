import React from 'react';

function Slider() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-block w-100 bg-dark text-white text-center p-5">
            <h2>Welcome to Technoleaf</h2>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 bg-secondary text-white text-center p-5">
            <h2>Innovative Services</h2>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 bg-success text-white text-center p-5">
            <h2>Contact Us Today!</h2>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
