
function Act3Line12() {
    const audio = new Audio("assets/audio/Act3Line12.mp3")

    
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
                <p><strong>Student 4 (Tristyn):</strong>Nothing.  There's nothing to see over here.</p>
                <p><strong>Student 5 (Lila):</strong> Okay, okay, we stashed them in the cupboard.</p>
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
  
  export default Act3Line12;