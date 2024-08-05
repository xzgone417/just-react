"use client";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import { Button } from "antd";
import "@/styles/dialog.scss";

function LoginDialog(props: any) {
  const registerUserNameRef = useRef<HTMLInputElement>(null);
  const registerUserEmailRef = useRef<HTMLInputElement>(null);
  const registerProtocolRef = useRef<HTMLInputElement>(null);
  const loginUserNameRef = useRef<HTMLInputElement>(null);
  const loginPasswordRef = useRef<HTMLInputElement>(null);
  const loginRememberRef = useRef<HTMLInputElement>(null);
  const lostUserNameRef = useRef<HTMLInputElement>(null);
  const lostEmailRef = useRef<HTMLInputElement>(null);
  const lostAuthCodeRef = useRef<HTMLInputElement>(null);
  const lostNewPasswordRef = useRef<HTMLInputElement>(null);
  const [authCodeState, setAuthCodeState] = useState(0);
  const [authCodeText, setAuthCodeText] = useState("发送");

  useEffect(() => {
    if (authCodeState > 0) {
    }
  }, [authCodeState]);
  const handleRegisterFormData = (e: any) => {
    e.preventDefault();
    console.log(
      registerUserNameRef.current && registerUserNameRef.current.value
    );
    console.log(
      registerUserEmailRef.current && registerUserEmailRef.current.value
    );
    console.log(
      registerProtocolRef.current && registerProtocolRef.current.value,
      "x",
      registerProtocolRef.current!.checked
    );
  };
  const handleLoginFormData = (e: any) => {
    e.preventDefault();
  };
  const handleLostPasswordFormData = (e: any) => {
    e.preventDefault();
  };
  function startCountdown(times: number, type?: number) {
    let emailTimeCount = times;
    let codeTimer = setInterval(() => {
      if (emailTimeCount > 0 && emailTimeCount <= times) {
        emailTimeCount--;
      } else {
        // emailTimeShow = false;
        // emailText = $t("sf_action_send");
        clearInterval(codeTimer);
      }
    }, 1000);
  }
  const LoginBox: FC<any> = (params) => {
    if (params.dialogState === 1) {
      return (
        <div
          className="login-popup box-register"
          role="dialog"
          onClick={(e) => {
            e.stopPropagation();
            props.to_setDialogState(1);
          }}
        >
          <div
            className="popup-close"
            onClick={(e) => {
              e.stopPropagation();
              props.to_setDialogState(0);
            }}
          >
            <i className="fa fa-times"></i>
          </div>
          <div className="media-content"></div>
          <div className="inner-login">
            <h3 className="title">
              <strong
                className="current-title"
                onClick={(e) => {
                  e.stopPropagation();
                  props.to_setDialogState(1);
                }}
              >
                Register
              </strong>{" "}
              /{" "}
              <strong
                className="display-box"
                onClick={(e) => {
                  e.stopPropagation();
                  props.to_setDialogState(2);
                }}
              >
                Login
              </strong>
            </h3>
            <div className="form-row">
              <div className="wrap-form">
                <div className="form-desc">We will need...</div>
                <form id="register-form">
                  <p className="login-username">
                    <input
                      type="text"
                      name="userName"
                      placeholder="Username"
                      className="input"
                      ref={registerUserNameRef}
                    />
                  </p>
                  <p className="login-email">
                    <input
                      type="email"
                      name="userEmail"
                      placeholder="Email"
                      className="input"
                      ref={registerUserEmailRef}
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
                      onSubmit={handleRegisterFormData}
                    >
                      Register
                    </button>
                  </p>
                  <p className="text-protocol">
                    <label>
                      <input
                        type="checkbox"
                        name="protocol"
                        ref={registerProtocolRef}
                      />
                      <strong>我已閱讀並同意《會員條款及管理規章》</strong>
                    </label>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (params.dialogState === 2) {
      return (
        <div
          className="login-popup box-login"
          onClick={(e) => {
            e.stopPropagation();
            props.to_setDialogState(2);
          }}
        >
          <div
            className="popup-close"
            onClick={(e) => {
              e.stopPropagation();
              props.to_setDialogState(0);
            }}
          >
            <i className="fa fa-times"></i>
          </div>
          <div className="media-content"></div>
          <div className="inner-login">
            <h3 className="title">
              <strong
                className="display-box"
                onClick={(e) => {
                  e.stopPropagation();
                  props.to_setDialogState(1);
                }}
              >
                Registration
              </strong>{" "}
              /{" "}
              <strong
                className="current-title"
                onClick={(e) => {
                  e.stopPropagation();
                  props.to_setDialogState(2);
                }}
              >
                Login
              </strong>
            </h3>
            <div className="form-row">
              <div className="wrap-form">
                <div className="form-desc"> We will need... </div>
                <form id="login-form">
                  <p className="login-username">
                    <input
                      type="text"
                      name="userName"
                      placeholder="Username"
                      className="input"
                      ref={loginUserNameRef}
                    />
                  </p>
                  <p className="login-password">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="input "
                      ref={loginPasswordRef}
                    />
                    <i
                      className="far fa-eye-slash popup-password-eye"
                      aria-hidden="true"
                    ></i>
                  </p>
                  <p className="login-remember">
                    <label>
                      <input
                        type="checkbox"
                        name="remember"
                        id="rememberMe"
                        ref={loginRememberRef}
                      />
                      Remember Me
                    </label>
                  </p>
                  <p className="button-submit" style={{ marginTop: "1em" }}>
                    <button
                      type="submit"
                      id="submit-login-form"
                      className="button btn-danger button-large submit-btn"
                      onSubmit={handleLoginFormData}
                    >
                      Login
                    </button>
                  </p>
                </form>
                <p className="link-bottom">
                  <strong
                    className="display-box"
                    onClick={(e) => {
                      e.stopPropagation();
                      props.to_setDialogState(3);
                    }}
                  >
                    Lost your password?
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (params.dialogState === 3) {
      return (
        <div
          className="login-popup box-lost-pass"
          onClick={(e) => {
            e.stopPropagation();
            props.to_setDialogState(3);
          }}
        >
          <div
            className="popup-close"
            onClick={(e) => {
              e.stopPropagation();
              props.to_setDialogState(0);
            }}
          >
            <i className="fa fa-times"></i>
          </div>
          <div className="media-content"></div>
          <div className="inner-login">
            <h3 className="title">
              <strong
                className="display-box"
                onClick={(e) => {
                  e.stopPropagation();
                  props.to_setDialogState(1);
                }}
              >
                Registration
              </strong>{" "}
              /{" "}
              <strong
                className="current-title"
                onClick={(e) => {
                  e.stopPropagation();
                  props.to_setDialogState(3);
                }}
              >
                {" "}
                Reset Password
              </strong>
            </h3>
            <div className="form-row">
              <div className="wrap-form">
                <form
                  name="lost-password-form"
                  id="lost-password-form"
                  method="post"
                >
                  <p className="description">
                    Please enter your username or email address. You will
                    receive a link to create a new password via email.
                  </p>
                  <p className="login-username">
                    <input
                      placeholder="请输入您的账号"
                      type="text"
                      name="lostUserName"
                      id="lost-password-account"
                      className="input"
                      ref={lostUserNameRef}
                    />
                  </p>
                  <p className="login-username">
                    <input
                      placeholder="请输入您的邮箱"
                      type="email"
                      name="lostEmail"
                      id="lost-password-email"
                      className="input"
                      ref={lostEmailRef}
                    />
                  </p>
                  <p className="login-username">
                    <input
                      placeholder="请输入验证码"
                      type="text"
                      name="lostAuthCode"
                      id="lost-password-auth-code"
                      className="input"
                      ref={lostAuthCodeRef}
                    />
                    <Button type="primary" danger className="auth-code-btn">
                      {authCodeState}
                    </Button>
                  </p>
                  <p className="login-username">
                    <input
                      placeholder="请输入新密码"
                      type="password"
                      name="lostNewPassword"
                      id="lost-password-password"
                      className="input"
                      ref={lostNewPasswordRef}
                    />
                  </p>
                  <p>
                    <button
                      type="submit"
                      id="submit-lost-password-form"
                      className="button btn-danger button-large submit-btn"
                      onSubmit={handleLostPasswordFormData}
                    >
                      Reset Password
                    </button>
                  </p>
                  <p
                    className="link-bottom"
                    onClick={(e) => {
                      e.stopPropagation();
                      props.to_setDialogState(2);
                    }}
                  >
                    Are you a member?
                    <strong className="display-box"> Sign in now</strong>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };
  return (
    <>
      {props.dialogVisible > 0 ? (
        <div
          className="login-dialogs-content"
          onClick={(e) => {
            e.stopPropagation();
            props.to_setDialogState(0);
          }}
        >
          <LoginBox dialogState={props.dialogState}></LoginBox>
        </div>
      ) : (
        <></>
      )}

      {/* <div id="protocol-dialog" className="modal fade" role="dialog">
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
*/}
    </>
  );
}

export default LoginDialog;
