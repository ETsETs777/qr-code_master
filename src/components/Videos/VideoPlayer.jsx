import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import styles from './VideoPlayer.module.css';

// List of popular video IDs
const VIDEO_IDS = [
  'dQw4w9WgXcQ', // Never Gonna Give You Up
  'jNQXAC9IVRw', // Me at the zoo
  'kJQP7kiw5Fk', // Despacito
  '9bZkp7q19f0', // Gangnam Style
  'OPf0YbXqDm0', // Uptown Funk
  'JGwWNGJdvx8', // Shape of You
  'pRpeEdMmmQ0', // Shake it Off
  'CevxZvSJLk8', // Roar
  'hT_nvWreIhg', // Counting Stars
  'fJ9rUzIMcZQ'  // Bohemian Rhapsody
];

export const VideoPlayer = () => {
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    getRandomVideo();
  }, []);

  const getRandomVideo = () => {
    const randomIndex = Math.floor(Math.random() * VIDEO_IDS.length);
    setCurrentVideoId(VIDEO_IDS[randomIndex]);
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    setIsPlaying(true);
  };

  const onEnd = () => {
    getRandomVideo();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Случайные видео</h2>
      <div className={styles.playerWrapper}>
        {currentVideoId && (
          <YouTube
            videoId={currentVideoId}
            opts={opts}
            onReady={onReady}
            onEnd={onEnd}
            className={styles.player}
          />
        )}
      </div>
      <button 
        className={styles.nextButton}
        onClick={getRandomVideo}
      >
        Следующее видео
      </button>
    </div>
  );
};