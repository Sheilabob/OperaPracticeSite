
function ActTwoLine11() {
    const audio = new Audio("assets/audio/ActTwoLine11.mp3")

    
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
                <p><strong>Janitor (Clay):</strong> I quit.  I give up.  There's nowhere to put all the trash, and people are throwing it on the kids' trampoline.</p>
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
  
  export default ActTwoLine11;