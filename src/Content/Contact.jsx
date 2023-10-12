function Contact() {
  /*<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.9668009820716!2d17.6221629!3d47.685064700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bbfe2dcdb8a57%3A0x6512cb344c414856!2zR3nFkXIsIEJlcmNzw6lueWkgbGlnZXQgMjIsIDkwMjU!5e0!3m2!1sen!2shu!4v1697125276405!5m2!1sen!2shu"
    width="600"
    height="450"
    style="border:0;"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>;*/
  const srcURL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.9668009820716!2d17.6221629!3d47.685064700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bbfe2dcdb8a57%3A0x6512cb344c414856!2zR3nFkXIsIEJlcmNzw6lueWkgbGlnZXQgMjIsIDkwMjU!5e0!3m2!1sen!2shu!4v1697125276405!5m2!1sen!2shu";
  return (
    <section className="section" id="contact-us">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div id="map">
              <iframe
                src={srcURL} // Replace srcURL with the properly encoded URL
                width="100%"
                height="600px"
                frameBorder="0"
                style={{ border: "0" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="container-fluid">
              <p>Helyszín: Győr, Bercsényi Liget 22.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
