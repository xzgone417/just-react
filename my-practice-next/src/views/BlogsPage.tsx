"use client";

import Link from "next/link";
import { useState } from "react";

function BlogsPage(props: any) {
  const { data } = props;
  var dateFormat = function (dateString: string | number | Date) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" } as any;
    return date.toLocaleDateString("en-US", options);
  };
  var monthFormat = function (dateString: string | number | Date) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long" } as any;
    return date.toLocaleDateString("en-US", options);
  };
  var getDay = function (dateString: string | number | Date) {
    const date = new Date(dateString);
    return date.getDate();
  };
  return (
    <>
      <div id="main-content">
        <div className="page-title">
          <div className="main-top">
            <div className="overlay-top-header"></div>
            <div className="content container">
              <h1>{data.title.top}</h1>
              <div className="wrap-breadcrumb">
                <ul className="breadcrumbs">
                  <li>
                    <a href="./index.html">{data.title.left}</a>
                  </li>
                  <li>
                    <span className="breadcrumb-icon">/</span>
                    {data.title.right}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="site-content sidebar-right">
          <div className="container">
            <div className="row">
              <main className="site-main col-lg-9">
                <div className="wrap-main-content">
                  <div className="blog-list">
                    {data.blog_list.map((item: any) => (
                      <article className="item-blog image-item" key={item.link}>
                        <div className="media-item">
                          <div className="pic">
                            <a href={item.link}>
                              <img src={item.img} alt="IMG" />
                            </a>
                          </div>
                          <div className="date">
                            <span className="number">{getDay(item.date)}</span>
                            {monthFormat(item.date)}
                          </div>
                        </div>
                        <div className="text-item">
                          <h4 className="title">
                            <a href={item.link}>{item.title}</a>
                          </h4>
                          <div className="content">{item.desc}</div>
                          <a
                            href={item.link}
                            className="btn-learn-more btn-small shape-round"
                          >
                            learn more
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>

                  <ul className="loop-pagination">
                    {data.pagination.blog_numbers.map((item: any) => (
                      <li key={item.link}>
                        <a
                          href={item.link}
                          className={
                            data.pagination.current == item.num
                              ? "page-numbers current"
                              : "page-numbers"
                          }
                        >
                          {item.num}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href={data.pagination.next_link}
                        className="page-numbers next"
                      >
                        Next
                        <i className="ion ion-ios-arrow-thin-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </main>
              <div className="widget-area col-sm-9 col-md-8 col-lg-3 ">
                <aside className="widget">
                  <div className="bp-element-posts layout-list-2">
                    <div className="wrap-element">
                      <div className="list-posts">
                        {data.aside_list.map((item: any) => (
                          <div className="post-item1" key={item.link}>
                            <div className="pic">
                              <a href={item.link}>
                                <img src={item.img} alt="IMG" />
                              </a>
                            </div>
                            <div className="text">
                              <h4 className="title">
                                <a href={item.link}>{item.title}</a>
                              </h4>
                            </div>
                            <div className="info">{dateFormat(item.date)}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogsPage;
