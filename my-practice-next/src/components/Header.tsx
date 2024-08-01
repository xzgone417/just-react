import Link from "next/link";
// import { useState } from "react";

function Header(params: any) {
  return (
    <>
      <header className="site-header sticky-header">
        <div className="header-container">
          <div className="the-header-content element-to-stick">
            <div className="left-header-container">
              <div className="header-logo">
                <Link href="/blogs">
                  <img
                    src="http://tmp-test.sofishgame.com/public/images/logo.png"
                    alt="IMG"
                  />
                </Link>
              </div>
            </div>

            <div className="header-menu-container">
              <div className="wrap-content-header">
                <div className="menu-mobile-effect navbar-toggle">
                  <div className="text-menu">Menu</div>
                  <div className="icon-wrap">
                    <i className="ion-navicon"></i>
                  </div>
                </div>
                <nav className="main-navigation">
                  <ul className="menu-lists">
                    <li className="menu-item-has-children">
                      <a href="./index.html"> Home </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="./games.html"> Games </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="./blogs.html"> Blogs </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="./topup.html"> TopUp </a>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/user-center"> UserCenter </Link>
                    </li>
                  </ul>
                </nav>
                <div className="container-header-logo">
                  <a href="./index.html">
                    <img
                      src="http://tmp-test.sofishgame.com/public/images/logo.png"
                      alt="IMG"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="right-header-container">
              <div className="header-menu-right">
                <div className="login-links">
                  <a
                    href="#top"
                    className="login"
                    data-display=".box-login"
                    data-toggle="modal"
                    data-target="#login-dialogs"
                    id="header-login-link"
                  >
                    <button type="button" className="btn header-menu-login-btn">
                      <i className="far fa-user"></i>
                      <span className="header-menu-login-span">Login</span>
                    </button>
                  </a>
                </div>
                {/* <!-- <div className="account-links">
                        <a href="./user-center.html" className="account-name">xwosjo,欢迎你</a>
                        <a href="./user-center.html" className="account-center">会员中心</a>
                        <button id="account-logout" className="account-logout">退出</button>
                    </div> --> */}
              </div>
              <div className="change-language-links">
                <div className="dropdown">
                  <button
                    id="dLabel"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="dropdown-btn btn change-language-btn"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                    <span className="change-language-span">LANGUAGE</span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dLabel">
                    <a href="#top" id="chang-language-en">
                      <li className="dropdown-item-li">English</li>
                    </a>
                    <a href="#top" id="chang-language-zhCN">
                      <li className="dropdown-item-li">简体中文</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="mobile-menu-container mobile-effect">
        <div className="inner-menu">
          <ul className="nav navbar-nav">
            <li>
              <a href="./index.html"> Home </a>
            </li>
            <li>
              <a href="./games.html"> Games </a>
            </li>
            <li>
              <a href="./blogs.html"> Blogs </a>
            </li>
            <li>
              <a href="./topup.html"> TouUp </a>
            </li>
            <li>
              <a href="./user-center.html"> UserCenter </a>
            </li>
          </ul>
          <div className="widget-area">
            <aside className="widget widget_nav_menu">
              <div className="menu-useful-links-container">
                <ul className="menu">
                  <li className="menu-item menu-item-has-children">
                    <a href="#top">LANGUAGE</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="#top" id="chang-language-zhCN">
                          {" "}
                          简体中文{" "}
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="#top" id="chang-language-en">
                          {" "}
                          English
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </aside>
            <aside className="widget widget_text">
              <div className="textwidget">
                <div className="copyright-text">
                  Copyright 2018 Corporate WordPress Theme by ThimPress.{" "}
                  <a href="#top">ThimPress</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
