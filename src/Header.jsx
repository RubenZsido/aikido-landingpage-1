function Header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                Aikido<em> Győr</em>
              </a>
              <ul className="nav">
                <li className="scroll-to-section">
                  <a href="#top" className="active">
                    Kezdőlap
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#schedule">Idöpontok</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#trainers">Kapcsolat</a>
                </li>
                <li className="main-button">
                  <a href="#trainers">Jelentkezz</a>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
