"use client";

import Link from "next/link";
import { useState, useEffect, Suspense, useMemo } from "react";
import Image from "next/image";
import HomePage from "@/views/HomePage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginDialog from "@/components/LoginDialog";
import ScrollToTop from "@/components/ScrollToTop";
import VideoModal from "@/components/VideoModal";

import "@/styles/index.scss";

function HomeTemplate({ data }: any) {
  const [dialogVisible, setDialogVisible] = useState(0);
  const [dialogState, setDialogState] = useState(0);
  const [asideVisible, setAsideVisible] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
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
  // const dialogProps = useMemo(() => {
  //   return {
  //     dialogState: dialogState,
  //   };
  // }, [dialogState]);

  return (
    <>
      <div
        className="responsive home-1"
        id="wrapper-container"
        onClick={(e) => {
          if (asideVisible === 0) {
            return;
          }
          e.preventDefault();
          setAsideVisible(0);
        }}
      >
        <Header
          to_setDialogState={to_setDialogState}
          asideVisible={asideVisible}
          setAsideVisible={setAsideVisible}
        ></Header>
        <HomePage data={data} setVideoModalOpen={setVideoModalOpen}></HomePage>
        <Footer></Footer>
      </div>
      <LoginDialog
        dialogState={dialogState}
        dialogVisible={dialogVisible}
        to_setDialogState={to_setDialogState}
      ></LoginDialog>
      <ScrollToTop></ScrollToTop>
      <VideoModal
        videoModalOpen={videoModalOpen}
        setVideoModalOpen={setVideoModalOpen}
      ></VideoModal>
    </>
  );
}

export default HomeTemplate;
