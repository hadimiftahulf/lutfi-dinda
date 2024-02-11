import { NextPage } from "next";
import Head from "next/head";
import LandingPageTemplate from "../templates/LandingPage/LandingPageTemplate";
import Script from "next/script";

const Index: NextPage = () => {
  return (
    <div id="wrapper">
      {/* header begin */}
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* logo begin */}
              <div id="logo">
                <a href="index.html">
                  <h2>
                    Lutfi<span>&amp;</span>Dinda
                  </h2>
                </a>
              </div>
              {/* logo close */}
              {/* small button begin */}
              <span id="menu-btn" />
              {/* small button close */}
              <span className="btn-rsvp">RSVP</span>
              {/* mainmenu begin */}
            </div>
            {/* mainmenu close */}
          </div>
        </div>
      </header>
      {/* header close */}
      {/* content begin */}
      <div id="content" className="no-bottom no-top">
        <div id="popup-box" className="full-height">
          <span className="btn-close">
            <i className="icon_close" />
          </span>
          <div className="container center-y">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="deco id-color">
                  <span>Turut Mengundang anda</span>
                </h2>
                <h2 data-wow-delay=".2s">Sabtu, 02 Maret 2024</h2>
              </div>
              <div className="spacer-double" />
              <div className="col-md-5 col-md-offset-1 text-right">
                <h3>Akad Nikah</h3>
                09:00 - Selesai
                <br /> Astaraja 02/11 Ds. Margahurip
                <br />
              </div>
              <div className="col-md-5">
                <h3>Resepsi</h3>
                12:00 - Selesai
                <br /> Astaraja 02/11 Ds. Margahurip
                <br />
              </div>
              <div className="spacer-double" />
              <div className="spacer-single" />
            </div>
          </div>
        </div>
        {/* section begin */}
        <section
          id="section-hero"
          className="full-height relative z1 owl-slide-wrapper no-top no-bottom text-light"
          data-stellar-background-ratio=".2"
        >
          <div className="owl-slider-nav">
            <div className="next" />
            <div className="prev" />
          </div>
          <div className="center-y fadeScroll relative" data-scroll-speed={4}>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <div className="row">
                    <div className="spacer-double" />
                    <div className="spacer-single" />
                    <div className="col-md-5 text-right text-center-sm relative">
                      <h2 className="name">Lutfi</h2>
                    </div>
                    <div className="col-md-2 text-center">
                      <span className="deco-big" data-scroll-speed={2}>
                        &amp;
                      </span>
                    </div>
                    <div className="col-md-5 text-left text-center-sm relative">
                      <h2 className="name">Dinda</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="custom-owl-slider"
            className="owl-slide"
            data-scroll-speed={2}
          >
            <div className="item">
              <img src="images/wedding/3.jpg" alt="" />
            </div>
            <div className="item">
              <img src="images/wedding/6.jpg" alt="" />
            </div>
            <div className="item">
              <img src="images/wedding/7.jpg" alt="" />
            </div>
            <div className="item">
              <img src="images/wedding/8.jpg" alt="" />
            </div>
          </div>
        </section>
        {/* section close */}
        {/* section begin */}
        <section
          id="section-event-1"
          className="text-light"
          data-stellar-background-ratio=".2"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="deco id-color">
                  <span>Turut Mengundang</span>
                </h2>
                <h2 data-wow-delay=".2s">Sabtu, 02 Maret 2024</h2>
                <div className="spacer-single" />
              </div>
              <div className="col-md-6">
                <img
                  src="images/misc/3.jpg"
                  alt=""
                  className="img-responsive img-rounded wow fadeInLeft"
                />
              </div>
              <div
                className="col-md-5 col-md-offset-1 pt40 pb40 wow fadeIn"
                data-wow-delay=".5s"
              >
                <h3>Akad Nikah</h3>
                Sabtu, 02 Maret 2024
                <br /> 09:00 PM - Selesai
                <br /> Astaraja 02/11 Ds. Margahurip
                <br />
                <a
                  href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                  className="btn btn-custom mt30 popup-gmaps"
                >
                  View on map
                </a>
              </div>
            </div>
            <div className="spacer-double" />
            <div className="row">
              <div
                className="col-md-5 pt40 pb40 text-right wow fadeIn"
                data-wow-delay=".5s"
              >
                <h3>Resepsi</h3>
                Sabtu, 02 Maret 2024
                <br /> 11:00 PM - Selesai
                <br /> Astaraja 02/11 Ds. Margahurip
                <br />
                <a
                  href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                  className="btn btn-custom mt30 popup-gmaps"
                >
                  View on map
                </a>
              </div>
              <div className="col-md-6 col-md-offset-1">
                <img
                  src="images/misc/4.jpg"
                  alt=""
                  className="img-responsive img-rounded wow fadeInRight"
                />
              </div>
            </div>
          </div>
        </section>
        {/* section close */}
        {/* section begin */}
        <section
          id="section-bride"
          className="full-height no-top no-bottom text-light"
          data-stellar-background-ratio=".2"
        >
          <div className="center-y">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center wow fadeInUp">
                  <h2>Dinda Berliandani S.E</h2>
                  <div className="spacer-single" />
                  <p>Putri Kedua Dari Bpk. Suhadi &amp; ibu Yani Suryani S.E</p>
                  {/* social icons */}
                  <div className="social-icons-sm">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-rss" />
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope-o" />
                    </a>
                  </div>
                  {/* social icons close */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section close */}
        {/* section begin */}
        <section
          id="section-groom"
          className="full-height no-top no-bottom text-light"
          data-stellar-background-ratio=".2"
        >
          <div className="center-y">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center wow fadeInUp">
                  <h2>M Lutfi Firdaus S</h2>
                  <div className="spacer-single" />
                  <p>
                    Putra dari Bpk. Odang Sulisman S.PD &amp; Ibu ecin kuraesin
                    (Almh) / Nia
                  </p>
                  {/* social icons */}
                  <div className="social-icons-sm">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-rss" />
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope-o" />
                    </a>
                  </div>
                  {/* social icons close */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section close */}
        {/* section begin */}
        <section
          id="section-guestbook"
          className="text-light"
          data-stellar-background-ratio=".2"
        >
          <div className="container relative">
            <div className="row wow fadeInUp">
              <div className="col-md-12 text-center">
                <h2>Refrensi</h2>
                <div className="spacer-single" />
              </div>
              <div
                id="testimonial-carousel"
                className="de_carousel"
                data-wow-delay=".3s"
              >
                <div className="col-md-6 item">
                  <div className="de_testi opt-2">
                    <blockquote>
                      <p>
                        Segala sesuatu Kami ciptakan berpasang-pasangan agar
                        kamu mengingat (kebesaran Allah).
                      </p>
                      <div className="de_testi_by">Az-Zariyat:49</div>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-6 item">
                  <div className="de_testi opt-2">
                    <blockquote>
                      <p>
                        Dan di antara tanda-tanda kekuasaan-Nya ialah Dia
                        menciptakan untukmu istri-istri dari jenismu sendiri,
                        supaya kamu cenderung dan merasa tenteram kepadanya, dan
                        dijadikan-Nya di antaramu rasa kasih dan sayang.
                        Sesungguhnya pada yang demikian itu benar-benar terdapat
                        tanda-tanda bagi kaum yang berfikir
                      </p>
                      <div className="de_testi_by">Ar Rum : 21</div>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section close */}
      </div>
      {/* content close */}
      {/* footer begin */}
      <footer>
        <div className="container text-center text-light">
          <div className="row">
            <div className="col-md-12">
              <h2 className="hs1 wow fadeInUp">
                Lutfi<span>&amp;</span>Dinda
              </h2>
            </div>
          </div>
        </div>
      </footer>
      <Script src="/js/bootstrap.min.js"></Script>
      <Script src="/js/jquery.isotope.min.js"></Script>
      <Script src="/js/easing.js"></Script>
      <Script src="/js/owl.carousel.js"></Script>
      <Script src="/js/jquery.countTo.js"></Script>
      <Script src="/js/validation-rsvp.js"></Script>
      <Script src="/js/wow.min.js"></Script>
      <Script src="/js/jquery.magnific-popup.min.js"></Script>
      <Script src="/js/enquire.min.js"></Script>
      <Script src="/js/jquery.stellar.min.js"></Script>
      <Script src="/js/jquery.plugin.js"></Script>
      <Script src="/js/jquery.countdown.js"></Script>
      <Script src="/js/countdown-custom.js"></Script>
      <Script src="/js/animsition.min.js"></Script>
      <Script src="/js/designesia.js"></Script>
      <Script src="/js/jquery.min.js" strategy="beforeInteractive"></Script>
    </div>
  );
};

export default Index;
