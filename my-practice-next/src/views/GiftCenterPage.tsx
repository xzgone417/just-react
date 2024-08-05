"use client";

import Link from "next/link";
import { useState } from "react";

function GiftCenterPage(params: any) {
  return (
    <>
      <main className="new-content">
        <div className="container">
          <div className="page-header">
            <span>当前位置：</span>
            <a href="./index.html">首页</a>
            <i className="ion ion-chevron-right"></i>
            <a href="#">gift-center</a>
          </div>
          <div className="row ">
            <div className="gift-center-type">
              <button
                type="button"
                id="gift-center-btn"
                className="btn btn-default btn-lg user-btn"
              >
                礼包中心
              </button>
              <button
                type="button"
                id="my-gift-btn"
                className="btn btn-danger btn-lg user-btn"
              >
                我的礼包
              </button>
            </div>
            <div className="col-sm-6 gift-list">
              <div className="gift-item">
                <div className="gift-item-content">
                  <div className="content-img"></div>
                  <div className="content-text">
                    <p className="text-name">游戏名称XXXX:新手礼包XXXXXXX</p>
                    <p className="text-description">
                      {" "}
                      礼包奖励描述XXXOXXXXXXXXX
                    </p>
                    <p className="text-course">兑换教程:XXXXXX40童中市场</p>
                  </div>
                  <div className="content-btn">
                    <button
                      type="button"
                      className="btn btn-default btn-lg gift-content-btn"
                    >
                      领取
                    </button>
                  </div>
                </div>
                <div className="gift-item-addition">
                  <p className="addition-text">礼包兑换码:xxxxxxxxxxxxxx</p>
                  <p className="addition-btn">
                    {" "}
                    <button
                      type="button"
                      className="btn btn-default gift-addition-btn"
                    >
                      复制
                    </button>
                  </p>
                </div>
              </div>
              <div className="gift-item">
                <div className="gift-item-content">
                  <div className="content-img"></div>
                  <div className="content-text">
                    <p className="text-name">游戏名称XXXX:新手礼包XXXXXXX</p>
                    <p className="text-description">
                      {" "}
                      礼包奖励描述XXXOXXXXXXXXX
                    </p>
                    <p className="text-course">兑换教程:XXXXXX40童中市场</p>
                  </div>
                  <div className="content-btn">
                    <button
                      type="button"
                      className="btn btn-default btn-lg gift-content-btn"
                    >
                      领取
                    </button>
                  </div>
                </div>
                <div className="gift-item-addition">
                  <p className="addition-text">礼包兑换码:xxxxxxxxxxxxxx</p>
                  <p className="addition-btn">
                    {" "}
                    <button
                      type="button"
                      className="btn btn-default gift-addition-btn"
                    >
                      复制
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default GiftCenterPage;
