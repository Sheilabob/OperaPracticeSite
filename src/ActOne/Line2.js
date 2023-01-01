
function ActOneLine2() {
    const audio = new Audio("assets/audio/Act1Line2.mp3")

    
    function playAudio() {
        audio.play();
    };

    function pauseAudio() {
        audio.pause();
    }


    return (
      <div>
        <div className="card wholeGroup">
            <div className="insideCard words">
                <p><strong>Townspeople:</strong> All of our trees are getting cut down! All of our trees are getting used up! We are running out of trees</p>
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
  
  export default ActOneLine2;