"use client";

import Link from "next/link";
import { useState } from "react";

function TopUpPage(params: any) {
  return (
    <>
      <main className="new-content">
        <div className="container">
          <div className="page-header">
            <span>当前位置：</span>
            <a href="./index.html">首页</a>
            <i className="ion ion-chevron-right"></i>
            <a href="#top">hello</a>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 topup-dropdown">
              <div className="dropdown">
                <button
                  id="dLabel"
                  className="dropdown-btn"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  请选择游戏
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dLabel">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 topup-dropdown">
              <div className="dropdown">
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  id="choose-server-list"
                >
                  请选择服务器
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 topup-dropdown">
              <div className="dropdown">
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  请选择角色
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </button>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 topup-dropdown">
              <div className="dropdown">
                您的地区:
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  请选择地区
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row" id="server-list">
            <ul className="nav nav-pills nav-stacked col-sm-3">
              <li role="presentation" className="active">
                <a href="#top">Home</a>
              </li>
              <li role="presentation">
                <a href="#top">Profile</a>
              </li>
              <li role="presentation">
                <a href="#top">Messages</a>
              </li>
            </ul>
            <div className="col-sm-9 server-name-group">
              <div className="server-name-btn">1</div>
              <div className="server-name-btn">2</div>
              <div className="server-name-btn">3</div>
              <div className="server-name-btn">4</div>
              <div className="server-name-btn">5</div>
              <div className="server-name-btn">1</div>
              <div className="server-name-btn">2</div>
              <div className="server-name-btn">3</div>
              <div className="server-name-btn">4</div>
              <div className="server-name-btn">5</div>
            </div>
          </div>
          <div className="halving-line"></div>
          <div className="row">
            <div className="page-header">储值类型：</div>
            <div className="topup-pathway-group">
              <div className="topup-pathway-btn"></div>
            </div>
          </div>
          <div className="halving-line"></div>
          <div className="row">
            <div className="col-sm-8 server-name-group">
              <div className="amount-title"></div>
              <div className="amount-group">
                <div className="amount-btn">1</div>
                <div className="amount-btn">2</div>
                <div className="amount-btn">3</div>
                <div className="amount-btn">4</div>
                <div className="amount-btn">5</div>
                <div className="amount-btn">1</div>
                <div className="amount-btn">2</div>
                <div className="amount-btn">3</div>
                <div className="amount-btn">4</div>
                <div className="amount-btn">5</div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="amount-notice-title"></div>
              <div className="amount-notice"></div>
              <div className="amount-btn"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default TopUpPage;
