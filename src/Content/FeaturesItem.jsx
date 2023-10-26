function FeaturesItem() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h2>
                Professzionális <em>Edzések</em>
              </h2>
              <img src="/images/line-dec.png" alt="waves" />
              <p>
                Aikido klubunk mindig szívesen fogad új tagokat, és nem
                szükséges hozzá előzetes tapasztalat. Mindenkit szívesen látunk,
                akár kezdő, akár tapasztalt harcművész vagy. Az első hetekben és
                hónapokban elég egy melegítő alsó és egy fehér póló az
                edzésekhez.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="features-items">
              <li className="feature-item">
                <div className="left-icon">
                  <img src="/images/features-first-icon.png" alt="First One" />
                </div>
                <div className="right-content">
                  <h4>Professzionális oktatók</h4>
                  <p>
                    Tapasztalt és képzett oktatóink segítenek a fejlődésedben.
                  </p>
                </div>
              </li>
              <li className="feature-item">
                <div className="left-icon">
                  <img src="/images/features-first-icon.png" alt="second one" />
                </div>
                <div className="right-content">
                  <h4>Egészség</h4>
                  <p>
                    Az Aikido rendszeres gyakorlása erősíti az izmokat, javítja
                    az állóképességet
                  </p>
                </div>
              </li>
              <li className="feature-item">
                <div className="left-icon">
                  <img
                    src="/images/features-first-icon.png"
                    alt="third gym training"
                  />
                </div>
                <div className="right-content">
                  <h4>Önvédelem</h4>
                  <p>
                    Az Aikido hatékony önvédelmi rendszer, amely a békés
                    konfliktusmegoldás és az ellenfél erőinek kihasználása
                    mellett segít a veszélyes helyzetek elkerülésében.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="features-items">
              <li className="feature-item">
                <div className="left-icon">
                  <img
                    src="/images/features-first-icon.png"
                    alt="fourth muscle"
                  />
                </div>
                <div className="right-content">
                  <h4>Barátságos közösség</h4>
                  <p>
                    Csatlakozz közösségünkhöz, ahol mindenkit szívesen látunk,
                    és együtt fejlődünk.
                  </p>
                </div>
              </li>
              <li className="feature-item">
                <div className="left-icon">
                  <img
                    src="/images/features-first-icon.png"
                    alt="training fifth"
                  />
                </div>
                <div className="right-content">
                  <h4>Biztonság</h4>
                  <p>
                    Az edzésen ügyelünk egymás testi épségére, minimalizáljuk a
                    sérüléseket.
                  </p>
                </div>
              </li>
              <li className="feature-item">
                <div className="left-icon">
                  <img
                    src="/images/features-first-icon.png"
                    alt="gym training"
                  />
                </div>
                <div className="right-content">
                  <h4>Önbizalom</h4>
                  <p>
                    Az Aikido nemcsak testi erőt fejleszt, hanem kiemelkedően
                    hozzájárul az önbizalom növeléséhez is.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesItem;
