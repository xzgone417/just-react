"use client";

import Link from "next/link";
import { useState } from "react";

function HomePage({ data }: any) {
  const [count, setCount] = useState(0);

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
                  <div
                    className="slide-posts js-call-slick-col"
                    data-slidestoshow="1"
                    data-slidestoscroll="1"
                    data-infinite="1"
                    data-autoplay="1"
                    data-autoplayspeed="5000"
                    data-responsive="[1, 1], [1, 1], [1, 1], [1, 1], [1, 1]"
                  >
                    <div className="wrap-arrow-slick">
                      <div className="arow-slick prev-slick">
                        <i className="ion ion-ios-arrow-left"></i>
                      </div>
                      <div className="arow-slick next-slick">
                        <i className="ion ion-ios-arrow-right"></i>
                      </div>
                    </div>
                    <div className="slide-slick">
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
                                    (item: any, index: any) => (
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
