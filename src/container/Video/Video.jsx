import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { playmusic } from '../../constants';

import './Video.css';

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  return (
    <section className="video">
      <video
        className="video__video"
        ref={vidRef}
        src={playmusic}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="video__overlay app__flex--center">
        <div
          className="video__overlay-circle app__flex--center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
  </section>
  );
};

export default Video;
