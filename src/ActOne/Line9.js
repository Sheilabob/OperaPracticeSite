
function ActOneLine9() {
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
                <p><strong>Town Kid 1 (Evalyn):</strong> We need more toys.</p>
                <p><strong>Town Kid 2 (Macee):</strong> I don't have one that looks like hers yet.</p>
                <p><strong>Town Kid 3 (Millie):</strong> Mine's getting boring.</p>
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
  
  export default ActOneLine9;