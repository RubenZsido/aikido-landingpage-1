import "bootstrap/dist/css/bootstrap.min.css";
const Gallery = () => (
  <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="\images\1_kardok.JPG" className="d-block w-100" alt="terem" />
      </div>
      <div className="carousel-item">
        <img src="\images\2_falkep.JPG" className="d-block w-100" alt="terem" />
      </div>
      <div className="carousel-item">
        <img src="\images\3_edzes.JPG" className="d-block w-100" alt="edzés" />
      </div>
      <div className="carousel-item">
        <img src="\images\4_edzes.JPG" className="d-block w-100" alt="edzés" />
      </div>
      <div className="carousel-item">
        <img
          src="\images\5_hajlongas.ARW"
          className="d-block w-100"
          alt="alázat"
        />
      </div>
      <div className="carousel-item">
        <img
          src="\images\6_csoportkep.ARW"
          className="d-block w-100"
          alt="csoportlkép"
        />
      </div>
      <div className="carousel-item">
        <img
          src="\images\7_csoportkep.ARW"
          className="d-block w-100"
          alt="7_csoportkep"
        />
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
