const Gallery = () => (
  <section className="section" id="gallery">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      style={{ height: "100%" }}
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="image-container">
            <img
              className="d-block img-fluid"
              src="https://www.aikido-gyor.hu/wp-content/uploads/photo-gallery/Edz%C3%A9sen/edzes_1-01.jpg?bwg=1550586464"
              alt="First slide"
            />
          </div>
        </div>
        <div className="carousel-item">
          <div className="image-container">
            <img
              className="d-block img-fluid"
              src="https://www.aikido-gyor.hu/wp-content/uploads/photo-gallery/Edzotabor_2011/1104_tabor_13-01.jpg?bwg=1550586184"
              alt="Second slide"
            />
          </div>
        </div>
        <div className="carousel-item">
          <div className="image-container">
            <img
              className="d-block img-fluid"
              src="https://www.aikido-gyor.hu/wp-content/uploads/photo-gallery/Edzotabor_2011/1104_tabor_4-01.jpg?bwg=1550586184"
              alt="Third slide"
            />
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </section>
);
export default Gallery;
