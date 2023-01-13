
function ActTwoLine7() {
    const audio = new Audio("assets/audio/ActTwoLine7.mp3")

    
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
            <p><strong>Customer 1 (Hadley):</strong> We're running out of places to put them.</p>
                <p><strong>Customer 2 (Odin):</strong> And it's starting to smell bad from yesterday's food.</p>
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
  
  export default ActTwoLine7;