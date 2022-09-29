import React from "react";
import BackgroundVideo from "../../../../public/Background/space_plain.mp4";
// If I didnt import the video was not playing in some pages

function Background() {
  return (
    <video autoPlay muted loop>
      <source src={BackgroundVideo} type="video/mp4" />
    </video>
  );
}

export default Background;
