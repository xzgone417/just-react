import React, { useState } from "react";
import "@/assets/css/videoModal.css"; // 引入样式文件

const VideoModal = (props: any) => {
  const closeModal = () => {
    props.setVideoModalOpen(false);
  };

  return (
    <div>
      {props.videoModalOpen && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="video-close-button" onClick={closeModal}>
              &times;
            </span>
            <iframe
              width="900"
              height="506"
              src="https://www.youtube.com/embed/SgocMZj5A40?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoModal;
