"use client";

import Link from "next/link";
import { useState } from "react";
import "@/styles/section.scss";
import { Select, ConfigProvider } from "antd";

function Header(props: any) {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <header className="site-header sticky-header">
        <div className="header-container">
          <div className="the-header-content element-to-stick">
            <div className="left-header-container">
              <div className="header-logo">
                <Link href="/">
                  <img
                    src="http://tmp-test.sofishgame.com/public/images/logo.png"
                    alt="IMG"
                  />
                </Link>
              </div>
            </div>

            <div className="header-menu-container">
              <div className="wrap-content-header">
                <div
                  className="menu-mobile-effect navbar-toggle"
                  onClick={() => {
                    props.setAsideVisible(1);
                  }}
                >
                  <div className="text-menu">Menu</div>
                  <div className="icon-wrap">
                    <i className="ion-navicon"></i>
                  </div>
                </div>
                <nav className="main-navigation">
                  <ul className="menu-lists">
                    <li className="menu-item-has-children">
                      <Link href="/home"> Home </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/games"> Games </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/blogs"> Blogs </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/topup"> TopUp </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/user-center"> UserCenter </Link>
                    </li>
                  </ul>
                </nav>
                <div className="container-header-logo">
                  <Link href="/home">
                    <img
                      src="http://tmp-test.sofishgame.com/public/images/logo.png"
                      alt="IMG"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="right-header-container">
              <div className="header-menu-right">
                <div className="login-links">
                  <strong
                    className="login"
                    data-display=".box-login"
                    data-toggle="modal"
                    data-target="#login-dialogs"
                    id="header-login-link"
                  >
                    <button
                      type="button"
                      className="btn header-menu-login-btn"
                      onClick={() => {
                        props.to_setDialogState(2);
                      }}
                    >
                      <i className="far fa-user"></i>
                      <span className="header-menu-login-span">Login</span>
                    </button>
                  </strong>
                </div>
                {/* <!-- <div className="account-links">
                        <a href="./user-center.html" className="account-name">xwosjo,欢迎你</a>
                        <a href="./user-center.html" className="account-center">会员中心</a>
                        <button id="account-logout" className="account-logout">退出</button>
                    </div> --> */}
              </div>
              <div className="change-language-links">
                <ConfigProvider
                  theme={{
                    components: {
                      Select: {
                        selectorBg: "#e40914",
                        optionHeight: 48,
                        optionLineHeight: 2.4,
                        colorBorder: "#fff",
                        colorText: "#fff",
                        colorIcon: "#fff",
                      },
                    },
                  }}
                >
                  <Select
                    defaultValue="lucy"
                    style={{
                      width: 150,
                    }}
                    popupClassName="lang-s"
                    size="large"
                    onChange={handleChange}
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                      { value: "disabled", label: "Disabled", disabled: true },
                    ]}
                  />
                </ConfigProvider>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav
        className={
          props.asideVisible > 0
            ? "mobile-menu-container mobile-menu-open"
            : "mobile-menu-container"
        }
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="inner-menu">
          <ul className="nav navbar-nav">
            <li>
              <Link href="/"> Home </Link>
            </li>
            <li>
              <Link href="/games"> Games </Link>
            </li>
            <li>
              <Link href="/blogs"> Blogs </Link>
            </li>
            <li>
              <Link href="/topup"> TouUp </Link>
            </li>
            <li>
              <Link href="/user-center"> UserCenter </Link>
            </li>
          </ul>
          <div className="widget-area">
            {/* <aside className="widget widget_nav_menu">
              <div className="menu-useful-links-container">
                <ul className="menu">
                  <li className="menu-item menu-item-has-children">
                    <a href="#top">LANGUAGE</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="#top" id="chang-language-zhCN">
                          简体中文
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="#top" id="chang-language-en">
                          English
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </aside> */}
            <aside className="widget widget_text">
              <div className="textwidget">
                <div className="copyright-text">
                  Copyright 2018 Corporate WordPress Theme by ThimPress.
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
