"use client";
import Link from "next/link";
import { useState } from "react";
import "@/styles/dialog.scss";
function LoginDialog(params: any) {
  return (
    <>
      <div
        id="login-dialogs"
        className="modal fade"
        tabIndex={1}
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-content login-dialogs-content" role="dialog">
          <div className="popup-close">
            <i className="fa fa-times"></i>
          </div>
          <div className="login-popup box-register">
            <div className="media-content"></div>
            <div className="inner-login">
              <h3 className="title">
                <span className="current-title">Register</span>
                <span>
                  {" "}
                  <strong className="display-box" data-display=".box-login">
                    Login
                  </strong>{" "}
                </span>
              </h3>
              <div className="form-row">
                <div className="wrap-form">
                  <div className="form-desc">We will need...</div>
                  <form id="registerform">
                    <p className="login-username">
                      <input
                        type="text"
                        name="userName"
                        placeholder="Username"
                        className="input"
                      />
                    </p>
                    <p className="login-email">
                      <input
                        type="email"
                        name="userEmail"
                        placeholder="Email"
                        className="input"
                      />
                    </p>
                    <p className="text-mail">
                      We send your registration email to this address.
                    </p>
                    <p className="button-submit">
                      <button
                        type="submit"
                        id="submit-register-form"
                        className="button btn-danger button-large submit-btn"
                      >
                        Register
                      </button>
                    </p>
                    <p className="text-protocol">
                      <input type="checkbox" name="protocol" />{" "}
                      <strong
                        data-toggle="modal"
                        data-target="#protocol-dialog"
                      >
                        我已閱讀並同意《會員條款及管理規章》
                      </strong>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="login-popup box-login">
            <div className="media-content"></div>
            <div className="inner-login">
              <h3 className="title">
                <span>
                  <strong className="display-box" data-display=".box-register">
                    Registration
                  </strong>
                </span>
                <span className="current-title">Login</span>
              </h3>
              <div className="form-row">
                <div className="wrap-form">
                  <div className="form-desc"> We will need... </div>
                  <form id="loginform">
                    <p className="login-username">
                      <input
                        type="text"
                        name="userName"
                        placeholder="Username"
                        className="input"
                      />
                    </p>
                    <p className="login-password">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input "
                      />
                      <i
                        className="far fa-eye-slash popup-password-eye"
                        aria-hidden="true"
                      ></i>
                    </p>
                    <p className="login-remember">
                      <label>
                        {" "}
                        <input
                          type="checkbox"
                          name="rememberMe"
                          id="rememberMe"
                        />
                        Remember Me
                      </label>
                    </p>
                    <p className="button-submit" style={{ marginTop: "1em" }}>
                      <button
                        type="submit"
                        id="submit-login-form"
                        className="button btn-danger button-large submit-btn"
                      >
                        Login
                      </button>
                    </p>
                  </form>
                  <p className="link-bottom">
                    <strong
                      className="display-box"
                      data-display=".box-lostpass"
                    >
                      {" "}
                      Lost your password?{" "}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="login-popup box-lostpass">
            <div className="media-content"></div>
            <div className="inner-login">
              <h3 className="title">
                <span>
                  <strong className="display-box" data-display=".box-register">
                    Registration
                  </strong>
                </span>
                <span className="current-title"> Reset Password</span>
              </h3>
              <div className="form-row">
                <div className="wrap-form">
                  <form
                    name="lostpasswordform"
                    id="lostpasswordform"
                    method="post"
                  >
                    <p className="description">
                      {" "}
                      Please enter your username or email address. You will
                      receive a link to create a new password via email.
                    </p>
                    <p className="login-username">
                      <input
                        placeholder="请输入您的账号"
                        type="text"
                        name="user_login_lostpass"
                        id="lost-password-account"
                        className="input"
                      />
                    </p>
                    <p className="login-username">
                      <input
                        placeholder="请输入您的邮箱"
                        type="text"
                        name="user_login_lostpass"
                        id="lost-password-email"
                        className="input"
                      />
                    </p>
                    <p className="login-username">
                      <input
                        placeholder="请输入验证码"
                        type="text"
                        name="user_login_lostpass"
                        id="lost-password-auth-code"
                        className="input"
                      />
                    </p>
                    <p className="login-username">
                      <input
                        placeholder="请输入您想修改的密码"
                        type="text"
                        name="user_login_lostpass"
                        id="lost-password-password"
                        className="input"
                      />
                    </p>
                    <p>
                      <button
                        type="submit"
                        id="submit-lost-password-form"
                        className="button btn-danger button-large submit-btn"
                      >
                        Reset Password
                      </button>
                    </p>
                    <p className="link-bottom">
                      {" "}
                      Are you a member?
                      <strong className="display-box" data-display=".box-login">
                        {" "}
                        Sign in now{" "}
                      </strong>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="protocol-dialog" className="modal fade" role="dialog">
        <div className="modal-dialog protocol-modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">會員條款及規則制度</h4>
            </div>
            <div className="modal-body">
              <p>Modal 2 Content</p>
            </div>
          </div>
        </div>
      </div>

      <div id="back-to-top" className="btn-back-to-top">
        <i className="ion ion-ios-arrow-thin-up"></i>
      </div>
    </>
  );
}

export default LoginDialog;
