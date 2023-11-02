import "bootstrap/dist/css/bootstrap.min.css";
const Gallery = () => (
  <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="https://www.aikido-gyor.hu/wp-content/uploads/photo-gallery/Edz%C3%A9sen/edzes_1-01.jpg?bwg=1550586464"
          className="d-block w-100"
          alt="..."
        />
      </div>
      <div className="carousel-item">
        <img src="/images/team2.JPEG" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/images/team1.jpg" className="d-block w-100" alt="..." />
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
export default Gallery;
