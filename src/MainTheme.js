import { useState } from "react";

function MainTheme() {
    const [audio, setAudio] = useState(new Audio("assets/audio/MainOperaTheme.mp3"))

    
    function playAudio() {
        audio.play();
    };

    function pauseAudio() {
        audio.pause();
    }


    return (
      <div>
        <h2 onClick={playAudio}>Main Theme</h2>
        <p onClick={pauseAudio}>What can we do to save the world?</p>
        <p>What can we do to reduce?</p>
        <p>What can we do to save animals?</p>
        <p>What can we do to reuse?</p>
        <p>What can we do to save ourselves?</p>
        <p>What can we do to recylce?</p>
        <p>Reduce, Reuse, Recycle</p>
        <p>Reduce, Reuse, Recycle</p>
        <p>Reduce, Reuse, Recycle</p>
      </div>
    );
  }
  
  export default MainTheme;