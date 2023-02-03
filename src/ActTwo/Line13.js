
function ActTwoLine13() {
    const audio = new Audio("assets/audio/ActTwoLine13.mp3")

    
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
                <p><strong>Kid 1 (Elena):</strong> Oooh, yes - it might be fun to use these things.</p>
                <p><strong>Kid 2 (Maecie):</strong> Yeah, we could play a game with them.</p>
                <p><strong>Kid 3 (Iker):</strong> Or, we can make a sculpture!</p>
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
  
  export default ActTwoLine13;