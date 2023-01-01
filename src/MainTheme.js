
function MainTheme() {
    const audio = new Audio("assets/audio/MainOperaTheme.mp3")

    
    function playAudio() {
        audio.play();
    };

    function pauseAudio() {
        audio.pause();
    }


    return (
      <div>
        <div className="card wholeGroup">
            <div className="insideCard words">
                <h2>Main Theme</h2>
                <p>What can we do to save the world?<br />
                What can we do to reduce?<br />
                What can we do to save animals?<br />
                What can we do to reuse?<br />
                What can we do to save ourselves?<br />
                What can we do to recylce?<br />
                Reduce, Reuse, Recycle<br />
                Reduce, Reuse, Recycle<br />
                Reduce, Reuse, Recycle</p>
            </div>
            <div className="insideCard play" onClick={playAudio}>
                &#9654;&#65039;
            </div>
            <div className="insideCard pause" onClick={pauseAudio}>
                &#9208;&#65039;
            </div>

        </div>
      </div>
    );
  }
  
  export default MainTheme;