"use client";

import Link from "next/link";
import { useState, useEffect, Suspense, useMemo } from "react";
import UserCenterPage from "@/views/UserCenterPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginDialog from "@/components/LoginDialog";
import ScrollToTop from "@/components/ScrollToTop";
import "@/styles/user-center.scss";

function UserCenterTemplate({ data }: any) {
  const [dialogVisible, setDialogVisible] = useState(0);
  const [dialogState, setDialogState] = useState(0);
  function to_setDialogState(_type: number) {
    if (_type === 1) {
      setDialogVisible(1);
      setDialogState(1);
    } else if (_type === 2) {
      setDialogVisible(1);
      setDialogState(2);
    } else if (_type === 3) {
      setDialogVisible(1);
      setDialogState(3);
    } else {
      setDialogVisible(0);
      setDialogState(0);
    }
  }

  return (
    <>
      <div className="responsive home-1" id="wrapper-container">
        <Header to_setDialogState={to_setDialogState}></Header>
        <UserCenterPage data={data}></UserCenterPage>
        <Footer></Footer>
      </div>
      <LoginDialog
        dialogState={dialogState}
        dialogVisible={dialogVisible}
        to_setDialogState={to_setDialogState}
      ></LoginDialog>
      <ScrollToTop></ScrollToTop>
    </>
  );
}

export default UserCenterTemplate;
