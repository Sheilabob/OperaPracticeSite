
function ActTwoLine8() {
    const audio = new Audio("assets/audio/ActTwoLine8.mp3")
    
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
                <p><strong>Reusing Rarish(Colton):</strong> These are good food dishes, made of very sturdy plastic.  You can take your food home in them, and wash them, and use them again for tomorrow's lunch.</p>
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
  
  export default ActTwoLine8;