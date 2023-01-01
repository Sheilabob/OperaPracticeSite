
function ActOneLine11() {
    const audio = new Audio("assets/audio/MainOperaTheme.mp3")

    
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
                <p><strong>Roosevell, Town Reporter (Jaidan):</strong> Reducing Rya helped them save their trees by sharing and reducing and they never had to worry about their trees again.</p>
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
  
  export default ActOneLine11;