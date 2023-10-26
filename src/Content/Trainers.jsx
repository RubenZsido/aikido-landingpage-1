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
              <img src="assets/images/line-dec.png" alt="" />
              <p>
                Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
                viverra ipsum dolor, ultricies fermentum massa consequat eu.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="trainer-item">
              <div className="image-thumb">
                <img
                  src="https://www.aikido-gyor.hu/wp-content/uploads/2019/04/Toth_I_3_kicsi.jpg"
                  alt=""
                />
              </div>
              <div className="down-content">
                <span>Aikido Edző</span>
                <h4>Dr. Tóth István</h4>
                <p>
                  Dr. Tóth István 6. danos instruktor, a klub főinstruktora, aki
                  hatalmas tudással és elkötelezettséggel oktatja az Aikido
                  művészetét.
                </p>
                <p>
                  Elérthetőségek:{" "}
                  <p>
                    <span> +36 20 368-4797</span> <p>tothi416@msn.com</p>
                  </p>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="trainer-item">
              <div className="image-thumb">
                <img
                  src="https://www.aikido-gyor.hu/wp-content/uploads/2019/04/Nagy_P_kicsi.jpg"
                  alt=""
                />
              </div>
              <div className="down-content">
                <span>Aikido Segédedző És Box Edző</span>
                <h4>Nagy Péter</h4>
                <p>
                  Nagy Péter, a klub segédedzője, egy 4. danos Aikido és box
                  edző, aki szenvedélyesen oktat és inspirálja a tanítványokat.
                </p>
                <p>
                  Elérhetőségek:
                  <p>
                    <span>+36 70 378-3784</span>
                  </p>
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
