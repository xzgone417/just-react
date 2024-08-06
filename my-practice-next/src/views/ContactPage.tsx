"use client";

import Link from "next/link";
import { useState } from "react";

function ContactPage(props: any) {
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
              <h1>22 N Canal Rd, Singapore</h1>
            </div>
          </div>
        </div>

        <main className="site-content">
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-lg-3">
                <div className="icon-box">
                  <div className="icon-image">
                    <i className="ion ion-android-pin"></i>
                  </div>
                  <div className="i-content">
                    <h3 className="i-title">Our Location</h3>
                    <p className="i-description">22 N Canal Rd, Singapore</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-lg-3">
                <div className="icon-box">
                  <div className="icon-image">
                    <i className="ion ion-android-call"></i>
                  </div>
                  <div className="i-content">
                    <h3 className="i-title">Call Us</h3>
                    <p className="i-description">
                      <span>+65 69705034</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-lg-3">
                <div className="icon-box">
                  <div className="icon-image">
                    <i className="ion ion-email"></i>
                  </div>
                  <div className="i-content">
                    <h3 className="i-title">Message</h3>
                    <p className="i-description">
                      <span>contact@sofish.com</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-lg-3">
                <div className="icon-box">
                  <div className="icon-image">
                    <i className="ion ion-thumbsup"></i>
                  </div>
                  <div className="i-content">
                    <h3 className="i-title">Follow Us</h3>
                    <p className="i-description">
                      <a href="#top" target="_blank" className="icon-link">
                        <i className="ion ion-social-facebook"></i>
                      </a>
                      <a href="#top" target="_blank" className="icon-link">
                        <i className="ion ion-social-youtube"></i>
                      </a>
                      <a href="#top" target="_blank" className="icon-link">
                        <i className="ion ion-social-twitter"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-line-contact-page"></div>
          </div>
          <div className="container">
            <div className="field-heading">
              <h3 className="f-title">Send a message</h3>
              <p className="f-description">
                Your email address will not be published. Required fields are
                marked.
              </p>
            </div>

            <form className="contact-form" name="msg">
              <label className="wrap-input">
                <input type="text" name="name" placeholder="Name*" id="name" />
                <span id="nameerr"></span>
              </label>
              <label className="wrap-input">
                <input
                  type="text"
                  name="email"
                  placeholder="Email*"
                  id="email"
                />
                <span id="emailerr"></span>
              </label>
              <label className="wrap-input">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number*"
                  id="phone"
                />
                <span id="phoneerr"></span>
              </label>
              <label className="wrap-input full-width">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  id="subject"
                />
              </label>
              <label className="wap-textarea">
                <textarea name="msg" placeholder="Message*" id="msg"></textarea>
              </label>
              <button
                className="form-submit"
                type="button"
                value="send your message"
                id="contact"
              >
                send your message
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default ContactPage;
