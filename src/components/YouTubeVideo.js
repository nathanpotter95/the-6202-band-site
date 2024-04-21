// import React, { useRef, useEffect } from "react";

// const YouTubeVideo = () => {
//   const playerRef = useRef(null);

//   useEffect(() => {
//     // Load YouTube player when component mounts
//     const tag = document.createElement("script");
//     tag.src = "https://www.youtube.com/iframe_api";
//     const firstScriptTag = document.getElementsByTagName("script")[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     window.onYouTubeIframeAPIReady = () => {
//       playerRef.current = new window.YT.Player("youtube-player", {
//         videoId: "",
//         playerVars: {
//           rel: 0, // Prevent showing related videos
//           autoplay: 1, // Auto play the video
//           controls: 1, // Show player controls
//         },
//         events: {
//           onStateChange: handleVideoStateChange,
//         },
//       });
//     };

//     return () => {
//       // Cleanup function to remove YouTube player
//       if (playerRef.current) {
//         playerRef.current.destroy();
//       }
//     };
//   }, []);

//   const handleVideoStateChange = (event) => {
//     // Handle video state changes here
//   };

//   return (
//     <div>
//       <div id="youtube-player"></div>
//     </div>
//   );
// };

// export default YouTubeVideo;
