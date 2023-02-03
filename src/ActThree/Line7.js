
function Act3Line7() {
    const audio = new Audio("assets/audio/Act3Line7.mp3")

    
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
                <p><strong>Student 1 (Harlynn):</strong>We need more trash cans to hold all these.</p>
                <p><strong>Student 2 (Iker):</strong> I'll work on squishing them very small.</p>
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
  
  export default Act3Line7;