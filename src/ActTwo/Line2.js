
function ActTwoLine2() {
    const audio = new Audio("assets/audio/ActTwoLine2.mp3")

    
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
                <p><strong>Customer 1 (Kaylee):</strong> Mine got dirty.  I got cheese on them.</p>
                <p><strong>Customer 2 (Darian):</strong> Mine too.  They got mud on them.</p>
                <p><strong>Customer 3 (Hadlee):</strong> These are yesterday's pants. Why would I wear yesterday's pants?</p>
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
  
  export default ActTwoLine2;