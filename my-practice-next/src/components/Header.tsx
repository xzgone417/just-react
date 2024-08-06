"use client";

import Link from "next/link";
import { useState } from "react";
import { Select, ConfigProvider, Space, Drawer } from "antd";
import { DrawerStyles } from "antd/es/drawer/DrawerPanel";

function Header(props: any) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerStyles: DrawerStyles = {
    header: {
      paddingLeft: 0,
    },
    body: {
      paddingLeft: 0,
    },
    footer: {
      paddingLeft: 0,
    },
  };
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
                    setDrawerOpen(true);
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
                      <Link href="/about"> About </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/blogs"> Blogs </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/top-up"> TopUp </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/user-center"> UserCenter </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/contact"> Contact </Link>
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
                        optionSelectedBg: "rgb(228, 9, 20,0.1)",
                        optionSelectedFontWeight: 700,
                      },
                    },
                  }}
                >
                  <Select
                    defaultValue="en"
                    style={{
                      width: 150,
                    }}
                    size="large"
                    onChange={handleChange}
                    options={[
                      { value: "zhCN", label: "简体中文" },
                      { value: "en", label: "English" },
                    ]}
                    optionRender={(option) => (
                      <Space>
                        <span style={{ color: "#111" }}>{option.label}</span>
                      </Space>
                    )}
                  />
                </ConfigProvider>
              </div>
            </div>
          </div>
        </div>
      </header>
      <ConfigProvider
        drawer={{
          styles: drawerStyles,
        }}
      >
        <Drawer
          title="SOFISH"
          onClose={() => {
            setDrawerOpen(false);
          }}
          width="45vw"
          open={drawerOpen}
          placement="left"
          style={{ paddingLeft: 0 }}
        >
          <nav className="mobile-menu-container">
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
        </Drawer>
      </ConfigProvider>
    </>
  );
}

export default Header;
