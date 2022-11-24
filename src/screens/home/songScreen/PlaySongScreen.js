import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
import ojorleycover from "../assets/images/ojorleycover.jpeg";
import ojorley from "../assets/audio/ojorley.mpeg";
import Slide from "../Slide";
import ControlPanel from "../Controlpanel";
import { useSelector } from "react-redux";

export default function PlaySongScreen() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElement = useRef(null);
  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audio_selector = useSelector((state) => state.audio.audio);

  const play = () => {
    setIsPlaying(!isPlaying);
  };

  const onChange = (e) => {
    const audio = audioElement.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying]);
  return (
    <div class="main-container">
      <div class="first-container flex container">
        <div>
          <img class="song-image" src={audio_selector.cover} alt="" />
          <div
            onClick={() => play()}
            className="flex flex-col items-center justify-center mt-4"
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-14 h-14 fill-amber-400"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-14 h-14 fill-amber-400"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <Slide percentage={percentage} onChange={onChange} />
          <audio
            onTimeUpdate={getCurrDuration}
            onLoadedData={(e) => {
              setDuration(e.currentTarget.duration.toFixed(2));
            }}
            src={ojorley}
            ref={audioElement}
          ></audio>
          <ControlPanel duration={duration} currentTime={currentTime} />
        </div>
      </div>
      <div class="second-container container"></div>
      <div class="content-container container">
        <div class="song-data">
          <h2 class="song-title">Ojorley</h2>
          <h4 class="song-artist">By Cina soul</h4>
        </div>
        <div class="info-container">
          <div class="lyrics-container">
            <div class="inner-container">
              <div class="lyrics-title">Lyrics</div>
              <p class="lyrics">{audio_selector.lyrics}</p>
            </div>
          </div>
          {audio_selector.translation && (
            <div class="lyrics-container">
              <div class="inner-container">
                <div class="lyrics-title">Translation</div>
                <p class="lyrics">{audio_selector.translation}</p>
              </div>
            </div>
          )}
          {audio_selector.history && (
            <div className={`history-container`}>
              <div class="history-inner-container">
                <div class="history-title">The History</div>
                <p class="history">{audio_selector.history}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
