import React from "react"; /* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useSearchParams } from "next/navigation";
import "font-awesome/css/font-awesome.min.css";

const galery = [
  {
    src: "/images/wedding/ourgalery-01.jpg",
    alt: "Dinda & Lutfi",
  },
  {
    src: "/images/wedding/ourgalery-02.jpg",
    alt: "Dinda & Lutfi",
  },
  {
    src: "/images/wedding/ourgalery-03.jpg",
    alt: "Dinda & Lutfi",
  },
  {
    src: "/images/wedding/ourgalery-04.jpg",
    alt: "Dinda & Lutfi",
  },
  {
    src: "/images/wedding/ourgalery-05.jpg",
    alt: "Dinda & Lutfi",
  },
  {
    src: "/images/wedding/ourgalery-06.jpg",
    alt: "Dinda & Lutfi",
  },
  {
    src: "/images/wedding/ourgalery-07.jpg",
    alt: "Dinda & Lutfi",
  },
  {
    src: "/images/wedding/ourgalery-08.jpg",
    alt: "Dinda & Lutfi",
  },
  {
    src: "/images/wedding/ourgalery-09.jpg",
    alt: "Dinda & Lutfi",
  },
  {
    src: "/images/wedding/ourgalery-10.jpg",
    alt: "Dinda & Lutfi",
  },
  {
    src: "/images/wedding/ourgalery-11.jpg",
    alt: "Dinda & Lutfi",
  },
  {
    src: "/images/wedding/ourgalery-12.jpg",
    alt: "Dinda & Lutfi",
  },
  {
    src: "/images/wedding/ourgalery-13.jpg",
    alt: "Dinda & Lutfi",
  },
  {
    src: "/images/wedding/ourgalery-14.jpg",
    alt: "Dinda & Lutfi",
  },
  {
    src: "/images/wedding/ourgalery-15.jpg",
    alt: "Dinda & Lutfi",
  },
];

const Index: NextPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("kepada");
  const [tabs, setTabs] = React.useState("ourGalery");
  const clipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    alert("Copied: " + value);
  };
  return (
    <>
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
                      Ber<span>&amp;</span>Upil
                    </h2>
                  </a>
                </div>
                {/* logo close */}
                {/* small button begin */}
                <span id="menu-btn" />
                {/* small button close */}
                <span className="btn-rsvp">RSVP</span>
              </div>
              {/* mainmenu close */}
            </div>
          </div>
        </header>
        {/* header close */}
        {/* content begin */}
        <div id="content" className="no-bottom no-top">
          {/* rsvp popup begin */}
          <div
            id="popup-box"
            className="full-height"
            // style={{ position: "absolute", height: "531px", display: "none" }}
          >
            <span className="btn-close">
              <i className="icon_close" />
            </span>
            <div className="container center-y">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2 className="deco id-color">
                    <span>Turut Mengundang anda</span>
                  </h2>
                  <br />
                  <h2>{search}</h2>
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
          {/* rsvp popup close */}
          {/* section begin */}
          <section
            id="section-hero"
            className="full-height relative z1 owl-slide-wrapper no-top no-bottom text-light"
            data-stellar-background-ratio=".2"
          >
            <div className="center-y fadeScroll relative" data-scroll-speed={4}>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <div className="row">
                      <div className="spacer-single" />
                      <div className="col-md-5 text-right text-center-sm relative">
                        <h2 className="name">Ber</h2>
                      </div>
                      <div className="col-md-2 text-center">
                        <span className="deco-big" data-scroll-speed={2}>
                          &amp;
                        </span>
                      </div>
                      <div className="col-md-5 text-left text-center-sm relative">
                        <h2 className="name">Upil</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Carousel
              // id="custom-owl-slider"
              className="owl-slide custom-owl-slider"
              data-scroll-speed={5}
              autoPlay={true}
              showThumbs={false}
              infiniteLoop={true}
              showStatus={false}
              stopOnHover={false}
              swipeable={true}
            >
              <div className="item">
                <img src="/images/wedding/foto-utama-01.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/images/wedding/foto-utama-02.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/images/wedding/foto-utama-03.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/images/wedding/foto-utama-04.jpg" alt="" />
              </div>
            </Carousel>
          </section>
          {/* section close */}
          {/* section begin */}
          <section id="section-couple" className="no-top mobile-saction">
            <div className="container relative mt-60 z-index">
              <div className="row">
                <div className="col-md-5 col-md-offset-1 text-center">
                  <img
                    src="images/wedding/foto-masing1.jpg"
                    alt=""
                    className="img-responsive img-rounded wow fadeInLeft"
                    data-wow-delay=".2s"
                  />
                  <div className="padding40">
                    <h2>Dinda Berliandani</h2>
                    <p>Tetap bermimpi setinggi langit walaupun kurang tidur</p>
                    {/* social icons */}
                    <div className="social-icons-sm">
                      <a
                        href="https://www.instagram.com/dindaberliandani?igsh=MXA5bTJ3Nnl0aWkzMw%3D%3D"
                        target="_blank"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                      <a
                        href="https://www.tiktok.com/@dindaberliandani_?_t=8k2TdPiG66S&_r=1"
                        target="_blank"
                      >
                        <i className="fa fa-tiktok"></i>
                      </a>
                    </div>
                    {/* social icons close */}
                  </div>
                </div>
                <div className="col-md-5 text-center">
                  <img
                    src="images/wedding/foto-masing2.jpg"
                    alt=""
                    className="img-responsive img-rounded wow fadeInRight"
                    data-wow-delay=".2s"
                  />
                  <div className="padding40">
                    <h2>Luthfi Firdaus</h2>
                    <p>Buah persik di pohon pisang cik sabatang</p>
                    {/* social icons */}
                    <div className="social-icons-sm">
                      <a
                        href="https://www.instagram.com/upilskrt?igsh=d3J4amRjMTAzeHhs&utm_source=qr"
                        target="_blank"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                    </div>
                    {/* social icons close */}
                  </div>
                </div>
                <div className="col-md-2 col-md-offset-5 text-center absolute">
                  <span className="circle wow zoomIn" data-wow-delay=".8s">
                    <i className="fa fa-heart" />
                  </span>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </section>
          {/* section close */}
          {/* section begin */}
          <section
            id="section-quote"
            aria-label="section-quote-1"
            className="text-light"
            data-stellar-background-ratio=".2"
          >
            <div className="container">
              <div className="row wow fadeInUp">
                <div className="col-md-8 col-md-offset-2">
                  <blockquote className="very-big text-light wow fadeIn">
                    Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia
                    menciptakan pasangan-pasangan untukmu dari (jenis) dirimu
                    sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan
                    di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada
                    yang demikian itu benar-benar terdapat tanda-tanda
                    (kebesaran Allah) bagi kaum yang berpikir.
                    <span>Ar-Rum : 21</span>
                  </blockquote>
                </div>
              </div>
            </div>
          </section>
          {/* section close */}
          {/* section begin */}
          {/* section close */}
          {/* section begin */}
          <section id="section-event">
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
            id="section-guestbook"
            className="text-light"
            data-stellar-background-ratio=".2"
          >
            <div className="container relative">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2>Referensi</h2>
                  <div className="spacer-single" />
                </div>
                <Carousel
                  // id="testimonial-carousel"
                  className="de_carousel"
                  data-wow-delay=".3s"
                  showStatus={false}
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
                          supaya kamu cenderung dan merasa tenteram kepadanya,
                          dan dijadikan-Nya di antaramu rasa kasih dan sayang.
                          Sesungguhnya pada yang demikian itu benar-benar
                          terdapat tanda-tanda bagi kaum yang berfikir
                        </p>
                        <div className="de_testi_by">Ar Rum : 21</div>
                      </blockquote>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </section>
          {/* section close */}
          <section id="section-gallery">
            <div className="container">
              <div className="row">
                {/* <div className="col-md-12 text-center">
                  <h2>Our Gallery</h2>
                  <div className="spacer-single" />
                </div> */}
                <div className="col-md-12">
                  <div className="de_tab tab_style_3 text-center">
                    <ul className="de_nav">
                      <li
                        className={tabs === "ourGalery" ? "active" : ""}
                        data-link="#section-services-tab"
                        onClick={() => setTabs("ourGalery")}
                      >
                        <span>Our Gallery</span>
                      </li>
                      <li
                        className={tabs === "reservasi" ? "active" : ""}
                        data-link="#section-services-tab"
                        onClick={() => setTabs("reservasi")}
                      >
                        <span>Reservasi</span>
                      </li>
                    </ul>
                    {tabs === "ourGalery" && (
                      <div className="de_tab_content">
                        <div id="tab1" className="tab_single_content">
                          <div className="row">
                            {galery.map((item, index) => (
                              <div
                                className="col-md-4 text-center mb10"
                                key={index}
                              >
                                <figure className="picframe img-rounded mb20">
                                  <a className="image-popup" href={item.src}>
                                    <span className="overlay-v">
                                      <i />
                                    </span>
                                  </a>
                                  <img
                                    src={item.src}
                                    className="img-responsive img-rounded"
                                    alt=""
                                  />
                                </figure>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {tabs === "reservasi" && (
                      <div className="de_tab_content">
                        <div id="tab1" className="tab_single_content">
                          <div className="row">
                            <div className="col-md-12 text-center">
                              <h2 className="deco id-color">
                                <span>MOHAMMAD LUTHFI FIRDAUS</span>
                              </h2>
                              <br />
                              <div
                                style={{
                                  display: "flex",
                                  fontSize: "20px",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <p>1300024680715 - Mandiri</p>{" "}
                                <i
                                  className="fa fa-clipboard"
                                  style={{
                                    marginBottom: "15px",
                                    fontSize: "20px",
                                    paddingLeft: "10px",
                                  }}
                                  onClick={() => clipboard("1300024680715")}
                                ></i>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 text-center">
                              <h2 className="deco id-color">
                                <span>Dinda berliandani</span>
                              </h2>
                              <br />
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  fontSize: "20px",
                                  justifyContent: "center",
                                }}
                              >
                                <p>1310017806250 - Mandiri</p>
                                <i
                                  className="fa fa-clipboard"
                                  onClick={() => clipboard("1310017806250")}
                                  style={{
                                    marginBottom: "15px",
                                    fontSize: "20px",
                                    paddingLeft: "10px",
                                  }}
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* content close */}
        {/* footer begin */}
        <footer>
          <div className="container text-center text-light">
            <div className="row">
              <div className="col-md-12">
                <h2 className="hs1 wow fadeInUp">
                  Ber<span>&amp;</span>Upil
                </h2>
              </div>
            </div>
          </div>
        </footer>
        {/* footer close */}
        {/* <a href="#" id="back-to-top" />
        <div id="preloader">
          <div className="preloader1" />
        </div> */}
      </div>

      <Script src="/js/jquery.min.js" strategy="beforeInteractive"></Script>
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
      <Script src="/js/animsition.min.js"></Script>
      <Script src="/js/designesia.js"></Script>
    </>
  );
};

export default Index;
