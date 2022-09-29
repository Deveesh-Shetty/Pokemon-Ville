import React from "react";
import BackgroundVideo from "../../../Assets/Background/space_plain.mp4";
// If I didnt import the video was not playing in some pages so changed from public to src

function Background() {
  return (
    <video autoPlay muted loop>
      <source src={BackgroundVideo} type="video/mp4" />
    </video>
  );
}

export default Background;
