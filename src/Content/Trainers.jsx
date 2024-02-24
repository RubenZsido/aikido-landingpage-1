function Trainers() {
  return (
    <section className="section" id="trainers">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h2>
                Szakértő <em>Edzők</em>
              </h2>
              <img src="images/line-dec.png" alt="" />
              <p></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="trainer-item">
              <div className="image-thumb">
                <img src="images/toth_istvan.jpg" alt="" />
              </div>
              <div className="down-content">
                <span>Aikido Edző</span>
                <h4>Dr. Tóth István</h4>
                <p>
                  Dr. Tóth István 6. danos instruktor, a klub főinstruktora, aki
                  hatalmas tudással és elkötelezettséggel oktatja az Aikido
                  művészetét.
                </p>
                <p style={{ margin: "0px" }}>Elérthetőségek: </p>
                <p style={{ margin: "0px" }}>
                  <span style={{ margin: "0px" }}> +36 20 368-4797</span>
                </p>
                <p>tothi416@msn.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="trainer-item">
              <div className="image-thumb">
                <img src="images/nagy_peter.jpg" alt="" />
              </div>
              <div className="down-content" id="contact-this">
                <span>Aikido Segédedző És Box Edző</span>
                <h4>Nagy Péter</h4>
                <p>
                  Nagy Péter, a klub segédedzője, egy 4. danos Aikido és box
                  edző, aki szenvedélyesen oktat és inspirálja a tanítványokat.
                </p>
                <p style={{ margin: "0px" }}>Elérhetőségek:</p>
                <p>
                  <span style={{ margin: "0px" }}>+36 70 378-3784</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trainers;
