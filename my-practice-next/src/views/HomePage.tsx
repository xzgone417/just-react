"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HomePage({ data }: any) {
  const slickSettings = {
    dots: false, //是否显示小圆点索引
    autoplay: true, //是否自动播放
    infinite: true, //是否无限循环
    autoplaySpeed: 5000, //自动播放的时间
    fade: true, //是否采用淡入淡出的效果
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let sliderRef = useRef(null) as any;
  const nextSlick = () => {
    sliderRef?.slickNext();
  };
  const previousSlick = () => {
    sliderRef?.slickPrev();
  };
  return (
    <>
      <div id="main-content">
        <div className="thim-banner_home-1">
          <div className="overlay-area"></div>
          <div className="container">
            <div className="bp-element bp-element-st-list-videos vblog-layout-1">
              <div className="wrap-element">
                <div className="feature-item">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="video">
                        <img src={data.home_game.img} alt="IMG" />
                        <div className="overlay"></div>
                        <div className="meta-info">
                          <div className="imdb">
                            <span className="value">
                              {data.home_game.score}
                            </span>
                          </div>
                        </div>
                        <a
                          href={data.home_game.video_link}
                          className="btn-play popup-youtube"
                        ></a>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="text">
                        <h4 className="title">
                          <a href={data.home_game.gp_link} target="_blank">
                            {data.home_game.title}
                          </a>
                        </h4>
                        <div className="info"></div>
                        <div className="description">{data.home_game.desc}</div>
                        <a
                          href={data.home_game.link}
                          className="btn-readmore btn-normal shape-round"
                          target="_blank"
                        >
                          read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bp-element bp-element-st-list-videos vblog-layout-1-1">
              <div className="wrap-element">
                <div className="normal-items">
                  <div className="row">
                    {data.game_list.map((item: any, index: any) => (
                      <div className="col-sm-6 col-lg-3" key={item.gp_link}>
                        <div className="item">
                          <div className="pic">
                            <a href={item.gp_link} target="_blank">
                              <img src={item.img} alt="IMG" />
                            </a>
                            <div className="label">{item.tag}</div>
                            <div className="btn-play">
                              <div className="btn-gplay">
                                <a href={item.gp_link} target="_blank">
                                  <img
                                    className="a-btn-gplay"
                                    src="http://tmp-test.sofishgame.com/public/images/store-button-google-play.svg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="btn-aplay">
                                <a
                                  href="#top"
                                  aria-disabled="true"
                                  target="_blank"
                                >
                                  <img
                                    className="a-btn-aplay"
                                    src="http://tmp-test.sofishgame.com/public/images/store-button-app-store.svg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <h4 className="title">
                            <a href={item.gp_link} target="_blank">
                              {item.title}
                            </a>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="thim-news-feed_home-1" id="news-feed">
          <div className="container">
            <div className="bp-element bp-element-posts vblog-layout-slider-3">
              <div className="wrap-element">
                <div className="heading-post">
                  <h3 className="title">News Feed</h3>
                  <div className="description">
                    It is a long established fact that a reader
                  </div>
                </div>
                <div className="list-posts">
                  <div className="slide-posts js-call-slick-col">
                    <div className="wrap-arrow-slick">
                      <div
                        className="arow-slick prev-slick"
                        onClick={previousSlick}
                      >
                        <i className="ion ion-ios-arrow-left"></i>
                      </div>
                      <div
                        className="arow-slick next-slick"
                        onClick={nextSlick}
                      >
                        <i className="ion ion-ios-arrow-right"></i>
                      </div>
                    </div>
                    <div className="slide-slick">
                      <Slider
                        {...slickSettings}
                        ref={(slider) => {
                          sliderRef = slider;
                        }}
                      >
                        {data.news_feed.top.map(
                          (element: any, keying: string | number) => (
                            <div className="item-slick" key={element.link}>
                              <div className="post-item">
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="feature-item">
                                      <a href={element.link}>
                                        <img src={element.img} alt="IMG" />
                                      </a>
                                      <div className="overlay"></div>
                                      <div className="content">
                                        <h4 className="title">
                                          <a href={element.link}>
                                            {element.desc}
                                          </a>
                                        </h4>
                                        <div className="info">
                                          <span className="item-info">
                                            {element.date}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    {data.news_feed.item[keying].map(
                                      (item: any) => (
                                        <div className="item" key={item.link}>
                                          <div className="pic">
                                            <a href={item.link}>
                                              <img src={item.img} alt="IMG" />
                                            </a>
                                          </div>
                                          <div className="text">
                                            <div className="info">
                                              {item.date}
                                            </div>
                                            <h4 className="title">
                                              <a
                                                href={item.link}
                                                title={item.tip_title}
                                              >
                                                {item.title}
                                              </a>
                                            </h4>
                                            <div
                                              className="description"
                                              title={item.tip_desc}
                                            >
                                              {item.desc}
                                            </div>
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
