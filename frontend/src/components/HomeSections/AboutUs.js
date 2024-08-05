import React from 'react';
import 'aos/dist/aos.css'; // AOS library for animations
import AOS from 'aos';
import aboutImage from '../../assets/images/aboutus-center-img.png';

const AboutUs = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="about-us-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-12"></div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <figure className="about-figure" data-aos="fade-down">
              <img src={aboutImage} alt="" className="about-center-img" />
            </figure>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="about-content">
              <h6 className="about-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom">About Us</h6>
              <h2>We’re Committed to Meet the quality</h2>
              <p className="mb-2 about-padding">Quis autem vel eum iure reprehenderit qui in ea volu velit esse quam nihil molestiae consequatur, vel illum eui dolorem eum fugiat ruo.</p>
              <p className="mb-4 about-padding">Reprehenderit qui in ea volu velit esse quam nihil moe stiae consequatur, vel illum eui.</p>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                  <div className="about-content-box">
                    <div className="mb-0 about-span-box">
                      <span className="counter">8</span>
                      <span>K</span>
                      <span className="about-plus">+</span>
                    </div>
                    <p className="mb-0">Happy Clients</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                  <div className="about-content-box box-margin-left">
                    <div className="mb-0 about-span-box">
                      <span className="counter">22</span>
                      <span className="about-plus">+</span>
                    </div>
                    <p className="mb-0">Instruments</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                  <div className="about-content-box">
                    <div className="mb-0 about-span-box">
                      <span className="counter">50</span>
                      <span className="about-plus">+</span>
                    </div>
                    <p className="mb-0">Years in market</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="about-content-box box-margin-left">
                    <div className="mb-0 about-span-box">
                      <span className="counter">99</span>
                      <span className="about-plus">%</span>
                    </div>
                    <p className="mb-0">Projects completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;