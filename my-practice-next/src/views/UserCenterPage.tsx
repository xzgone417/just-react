"use client";

import Link from "next/link";
import { useState } from "react";

function UserCenterPage(params: any) {
  return (
    <>
      {" "}
      <main className="new-content">
        <div className="container">
          <div className="page-header">
            <span>当前位置：</span>
            <a href="./index.html">首页</a>
            <i className="ion ion-chevron-right"></i>
            <a href="#">user-center</a>
          </div>
          <div className="row">
            <div className="col-xs-6 weal-div ">
              <div className="my-weal-div">
                <div className="user-bg-div"></div>
                <button
                  type="button"
                  id="to-open-my-gift"
                  className="btn btn-default btn-lg user-btn"
                >
                  我的礼包
                </button>
                <Link href="/gift-center">
                  <button
                    type="button"
                    id="to-open-gift-center user-btn"
                    className="btn btn-default btn-lg user-btn"
                  >
                    礼包中心
                  </button>
                </Link>
                <button
                  type="button"
                  id="to-open-wholesale"
                  className="btn btn-default btn-lg user-btn"
                >
                  大额汇款
                </button>
              </div>
            </div>
            <div className="col-xs-6 account-div">
              <div className="my-account-div">
                <div className="user-bg-div"></div>
                <button
                  type="button"
                  id="to-change-password"
                  className="btn btn-default btn-lg user-btn"
                >
                  更改密码
                </button>
                <button
                  type="button"
                  id="to-bind-email"
                  className="btn btn-default btn-lg user-btn"
                >
                  绑定邮箱
                </button>
                <button
                  type="button"
                  id="to-open-recharge-order"
                  className="btn btn-default btn-lg user-btn"
                >
                  储值订单
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default UserCenterPage;
