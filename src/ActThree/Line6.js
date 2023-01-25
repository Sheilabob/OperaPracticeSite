
function Act3Line6() {
    const audio = new Audio("assets/audio/Act3Line6.mp3")

    
    function playAudio() {
        audio.play();
    };

    function pauseAudio() {
        audio.pause();
    }


    return (
      <div>
        <div className="card">
            <div className="insideCard words">
                <p><strong>Art Teacher(Odin)</strong> Great job on our paper dinosaur movie kids.  Now we need to clean up.</p>
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
  
  export default Act3Line6;