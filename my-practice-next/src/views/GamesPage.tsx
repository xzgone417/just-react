"use client";

import Link from "next/link";
import { useState } from "react";

function GamesPage(props: any) {
  const { data } = props;
  const [serversDialog, setServersDialog] = useState(0);
  const dateFormat = function (dateString: string | number | Date) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" } as any;
    return date.toLocaleDateString("en-US", options);
  };
  function monthDayFormat(timestamp: any) {
    // 创建一个日期对象
    const date = new Date(Number(timestamp));
    const options = {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    } as any;
    const formattedDate = date
      .toLocaleString("en-US", options)
      .replace(/\//g, "-");
    return formattedDate;
  }
  function dateTimeFormate(timestamp: any) {
    const date = new Date(Number(timestamp));
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    } as any;
    const formattedDate = date
      .toLocaleString(undefined, options)
      .replace(/\//g, "-");
    return formattedDate;
  }
  return (
    <>
      <div id="main-content">
        <div className="page-title">
          <div className="main-top">
            <div className="overlay-top-header"></div>
            <div className="content container">
              <h1>GAME MAKES LIFE MORE INTERESTING</h1>
            </div>
          </div>
        </div>
        <div className="site-content sidebar-right">
          <div className="container">
            <div className="row">
              <main className="site-main col-lg-8">
                <div className="wrap-main-content">
                  <div className="products-list">
                    <div className="row">
                      {data.game_list.map((item: any) => (
                        <div
                          className="col-sm-6 col-md-4 game-list-item"
                          key={item.gp_link}
                        >
                          <div className="item-product">
                            <div className="media-item">
                              <div className="pic">
                                <a href={item.gp_link} target="_blank">
                                  <img src={item.img} alt="IMG" />
                                </a>
                                <div className="btn-play">
                                  <div className="btn-gplay">
                                    <a href={item.gp_link} target="_blank">
                                      <img
                                        className="a-btn-gplay"
                                        src="./public/images/store-button-google-play.svg"
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
                                        src="./public/images/store-button-app-store.svg"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-item">
                              <h4 className="title">
                                <a href={item.gp_link} target="_blank">
                                  {item.title}
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </main>

              <div className="widget-area col-sm-9 col-md-8 col-lg-4 ">
                <aside className="widget widget_product_categories">
                  <div className="product-categories-title">
                    <h3 className="widget-title">Servers</h3>
                    <strong
                      className="right-product-categories-title"
                      onClick={() => {
                        setServersDialog(1);
                      }}
                    >
                      MORE <i className="fas fa-angle-double-right"></i>
                    </strong>
                  </div>
                  <ul className="product-categories">
                    {data.server_list[0].map((item: any) => (
                      <li className="cat-item">
                        <a className="left-server" href="#top">
                          {item.game}
                        </a>
                        <span className="server-item-span"> {item.name} </span>
                        <span className="server-item-span">
                          {monthDayFormat(item.time)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </aside>

                <aside className="widget">
                  <div className="bp-element-products">
                    <div className="heading-products">
                      <h3 className="title">Most Popular</h3>
                    </div>
                    <div className="list-products">
                      {data.aside_list.map((item: any) => (
                        <div className="product-item" key={item.link}>
                          <a href={item.link} className="pic">
                            <img src={item.img} alt="IMG" />
                          </a>
                          <div className="text">
                            <h4 className="title">
                              <a href={item.link}>{item.title}</a>
                            </h4>
                            <span className="price">
                              <ins>
                                <span className="woocommerce-Price-amount">
                                  {dateFormat(item.date)}
                                </span>
                              </ins>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
      {serversDialog > 0 && (
        <>
          <div className="servers-dialog-container">
            <div className="servers-dialog-title">
              <h3 className="title">开服讯息</h3>
              <strong
                onClick={() => {
                  setServersDialog(0);
                }}
                className="close-servers-dialog"
              >
                <i className="fas fa-times"></i>
              </strong>
            </div>
            <div className="servers-dialog-content">
              <ul className="servers-dialog-list">
                {data.server_list[0].map((item: any) => (
                  <li className="server-item">
                    <a className="left-server server-item-span" href="#top">
                      {item.game}
                    </a>
                    <span className="server-item-span"> {item.name} </span>
                    <span className="server-item-span">
                      {dateTimeFormate(item.time)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="servers-dialog-pagination">
                <nav aria-label="Page navigation">
                  <ul className="pagination">
                    <li>
                      <a href="#top" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li>
                      <a href="#top">1</a>
                    </li>
                    <li>
                      <a href="#top">2</a>
                    </li>
                    <li>
                      <a href="#top">3</a>
                    </li>
                    <li>
                      <a href="#top">4</a>
                    </li>
                    <li>
                      <a href="#top">5</a>
                    </li>
                    <li>
                      <a href="#top" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div
            className="the-overlay"
            onClick={(e) => {
              e.stopPropagation();
              setServersDialog(0);
            }}
          ></div>
        </>
      )}
    </>
  );
}

export default GamesPage;
