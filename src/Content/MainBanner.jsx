function MainBanner() {
  return (
    <div className="main-banner" id="top">
      <video autoPlay muted loop id="bg-video">
        <source src="/images/aikido_stock.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay header-text">
        <div className="caption">
          <h6>Üdvözlünk Győr legrégebbi Aikido klubjának honlapján</h6>
          <h2>
            Aikido edzések <em>győrben</em>
          </h2>
          <div className="main-button scroll-to-section">
            <a href="#trainers">Jelentkezz</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
