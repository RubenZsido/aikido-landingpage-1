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
                  Bitters cliche tattooed 8-bit distillery mustache. Keytar
                  succulents gluten-free vegan church-key pour-over seitan
                  flannel.
                </p>
                <p>
                  Elérthetőségek:{" "}
                  <p>
                    +36 20 368-4797 <p>tothi416@msn.com</p>
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
                <span>Aikido és Box Edző</span>
                <h4>Nagy Péter</h4>
                <p>
                  Bitters cliche tattooed 8-bit distillery mustache. Keytar
                  succulents gluten-free vegan church-key pour-over seitan
                  flannel.
                </p>
                <p>
                  Elérhetőségek: <p>+36 70 378-3784</p>
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
