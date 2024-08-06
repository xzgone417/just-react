"use client";

import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function AboutPage(props: any) {
  const { data } = props;
  const sliderBrands = [
    { img: "http://tmp-test.sofishgame.com/public/images/h-a.png" },
    { img: "http://tmp-test.sofishgame.com/public/images/h-m.png" },
    { img: "http://tmp-test.sofishgame.com/public/images/h-g.png" },
    { img: "http://tmp-test.sofishgame.com/public/images/h-8.png" },
    { img: "http://tmp-test.sofishgame.com/public/images/h-02.png" },
    { img: "http://tmp-test.sofishgame.com/public/images/h-03.png" },
    { img: "http://tmp-test.sofishgame.com/public/images/h-04.png" },
    { img: "http://tmp-test.sofishgame.com/public/images/h-05.png" },
    { img: "http://tmp-test.sofishgame.com/public/images/h-06.png" },
    { img: "http://tmp-test.sofishgame.com/public/images/h-07.png" },
  ];
  const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <div id="main-content">
        <div className="page-title">
          <div className="main-top">
            <div className="overlay-top-header"></div>
            <div className="content container">
              <h1>A LEADING GLOBAL ONLINE GAMES PUBLISHER</h1>
            </div>
          </div>
        </div>
        <main className="site-content">
          <div className="container">
            <div className="field-heading">
              <h3 className="f-title">Let's make great things together!</h3>
              <div className="f-description">
                If you are a newbie to managing a WordPress website, then
                congratulations! You are here at the right track with us because
                we are going to introduce you one of the most knowledge when
                owning a WordPress page: how to find your site the best
                WordPress Hosting service.This process is often overlooked.
              </div>
            </div>
          </div>
          <section className="our-service-section">
            <div className="container">
              <div className="field-heading">
                <h3 className="f-title">Our Services</h3>
                <div className="f-description">
                  Let's make great things together!
                </div>
              </div>

              <div className="row">
                <div className="col-sm-4">
                  <div className="icon-box">
                    <div className="icon-image">
                      <img
                        src="http://tmp-test.sofishgame.com/public/images/features01.png"
                        alt="IMG"
                      />
                    </div>
                    <div className="i-content">
                      <h3 className="i-title">Globalisation</h3>
                      <div className="i-description">
                        We are committed to publishing high-quality games to the
                        global market.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="icon-box">
                    <div className="icon-image">
                      <img
                        src="http://tmp-test.sofishgame.com/public/images/features02.png"
                        alt="IMG"
                      />
                    </div>
                    <div className="i-content">
                      <h3 className="i-title">Professional</h3>
                      <div className="i-description">
                        With a strong team and rich resources, we are experts in
                        overseas distribution.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="icon-box">
                    <div className="icon-image">
                      <img
                        src="http://tmp-test.sofishgame.com/public/images/features03.png"
                        alt="IMG"
                      />
                    </div>
                    <div className="i-content">
                      <h3 className="i-title">Localisation</h3>
                      <div className="i-description">
                        We care about the characteristics of each market
                        &committed to making every player enjoy it.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="the-brand-section">
            <div className="container">
              <div className="slide-brands">
                <Slider {...sliderSettings}>
                  {sliderBrands.map((item: any) => (
                    <div className="item-slick" key={item.img}>
                      <img src={item.img} alt="IMG" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default AboutPage;
