import { AppConfig, getFullAddressFromConfig } from '@/AppConst';

export function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="section-header text-center">
          {/* <p>Contact Us</p> */}
          <h2>Contact Us For Any Query</h2>
        </div>
        <div className="row align-items-center contact-information">
          <div className="col-md-6 col-lg-3">
            <div className="contact-info">
              <div className="contact-icon">
                <i className="fa fa-map-marker-alt"></i>
              </div>
              <div className="contact-text">
                <h3>Address</h3>
                <p>{getFullAddressFromConfig()}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="contact-info">
              <div className="contact-icon">
                <i className="fa fa-phone-alt"></i>
              </div>
              <div className="contact-text">
                <h3>Call Us</h3>
                <p>{AppConfig.contact}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="contact-info">
              <div className="contact-icon">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h3>Email Us</h3>
                <p>{AppConfig.email}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="contact-info">
              <div className="contact-icon">
                <i className="fa fa-share"></i>
              </div>
              <div className="contact-text">
                <h3>Follow Us</h3>
                <div className="contact-social">
                  <a href={AppConfig.social.twitter}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={AppConfig.social.facebook}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={AppConfig.social.youtube}>
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href={AppConfig.social.instagram}>
                    <i className="fab fa-instagram"></i>
                  </a>
                  {/* <a href={AppConfig.social.facebook}>
                    <i className="fab fa-linkedin-in"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row contact-form">
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14245.985569480275!2d80.8718311!3d26.7923186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff8c2be6f8bf%3A0x8703e3e3faf698d8!2sStack%20Desire%20Consultancy!5e0!3m2!1sen!2sin!4v1678997120195!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-md-6">
            <div id="success"></div>
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                  data-validation-required-message="Please enter your name"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required
                  data-validation-required-message="Please enter your email"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  required
                  data-validation-required-message="Please enter a subject"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  required
                  data-validation-required-message="Please enter your message"
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div>
                <button
                  className="btn custom-btn"
                  type="submit"
                  id="sendMessageButton"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
