"use client";

import Link from "next/link";
import { useState } from "react";

function SingleBlogPage(props: any) {
  const { data } = props;
  const [htmlContent, setHtmlContent] = useState(data.single_blog.content);
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
                    <span className="breadcrum-icon">/</span>
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
                  <div className="bl-blog-detail">
                    <div className="head-blog">
                      <h2 className="title-blog-detail">
                        {data.single_blog.title}
                      </h2>
                      <div className="info-blog-detail"></div>
                    </div>
                    <div className="media-blog-detail">
                      <div className="pic">
                        <img src={data.single_blog.img} alt="IMG" />
                      </div>
                      <div className="date">
                        <span className="number">
                          {getDay(data.single_blog.date)}
                        </span>
                        {monthFormat(data.single_blog.date)}
                      </div>
                    </div>
                    <div className="text-blog-detail">
                      <div className="wrap-share-blog sticky-sidebar">
                        <div className="share">
                          <span className="namefield"> Share </span>
                          <span className="socials">
                            <a
                              href="#top"
                              className="item-social"
                              id="facebook-link"
                              title="Share on Facebook"
                              target="_blank"
                            >
                              <i className="ion ion-social-facebook"></i>
                            </a>
                            <a
                              href="#top"
                              className="item-social"
                              id="twitter-link"
                            >
                              <i className="ion ion-social-twitter"></i>
                            </a>
                            <a
                              href="#top"
                              className="item-social"
                              id="google-link"
                            >
                              <i className="ion ion-social-googleplus"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="content-blog">
                        <div
                          dangerouslySetInnerHTML={{ __html: htmlContent }}
                        ></div>
                        <div className="tags">
                          <span className="name-field">Tags:</span>
                          {data.single_blog.tag}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <div className="widget-area col-sm-9 col-md-8 col-lg-3 sticky-sidebar">
                <aside className="widget widget_thim_layout_builder">
                  <div className="bp-element bp-element-posts layout-list-2">
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

export default SingleBlogPage;
